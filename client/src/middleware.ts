import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "./utils/decodeToken";

export function middleware(req: NextRequest) {
  // 요청의 URL
  const url = req.nextUrl.clone();

  // 로그인 페이지와 회원가입 페이지는 미들웨어를 통과
  if (url.pathname.startsWith("/_next") || url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const token =
    req.cookies.get("token")?.value ||
    req.headers.get("Authorization")?.split(" ")[1];

  // /sign_up 페이지 처리
  if (url.pathname.startsWith("/sign_up")) {
    if (token) {
      // 토큰이 있는 경우, 적절한 페이지로 리다이렉트
      return redirectBasedOnRole(token, req);
    }
    // 토큰이 없는 경우, /sign_up 페이지 접근 허용
    return NextResponse.next();
  }

  // JWT 토큰이 없으면 로그인 페이지로 리다이렉트
  if (!token) {
    if (url.pathname === "/") {
      return NextResponse.next(); // 토큰이 없으면서 "/"로 가는 요청은 통과
    }
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  let decodedToken;
  try {
    decodedToken = decodeToken(token);
  } catch (error) {
    // 토큰이 유효하지 않으면 로그인 페이지로 리다이렉트
    url.pathname = "/";
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 로그인된 사용자가 /sign_up에 접근하려고 하는 경우 처리
  if (url.pathname.startsWith("/sign_up")) {
    // 토큰이 있는 경우, /sign_up에 접근하지 못하도록 리다이렉트
    url.pathname = decodedToken.roleID === 1 ? "/admin/stockInfo" : "/UserPage";
    return NextResponse.redirect(url);
  }

  console.log("url패스", url.pathname);
  // 로그인된 사용자가 /sign_up에 접근하려고 하는 경우 처리
  if (url.pathname.startsWith("/sign_up")) {
    if (decodedToken.roleID === 1) {
      // roleID가 1인 사용자는 /admin/stockInfo로 리다이렉트
      url.pathname = "/admin/stockInfo";
      return NextResponse.redirect(url);
    } else if (decodedToken.roleID === 0) {
      // roleID가 0인 사용자는 /UserPage로 리다이렉트
      url.pathname = "/UserPage";
      return NextResponse.redirect(url);
    }
  }

  // 토큰이 있는 사용자가 "/"로 접근하는 경우 처리
  if (url.pathname === "/") {
    if (decodedToken.roleID === 1) {
      // roleID가 1인 사용자는 /admin/stockInfo로 리다이렉트
      url.pathname = "/admin/stockInfo";
      return NextResponse.redirect(url);
    } else if (decodedToken.roleID === 0) {
      // roleID가 0인 사용자는 /UserPage로 리다이렉트
      url.pathname = "/UserPage";
      return NextResponse.redirect(url);
    }
  }

  // 관리자 권한이 필요한 경로에 대한 처리
  if (url.pathname.startsWith("/admin")) {
    if (decodedToken.roleID !== 1) {
      // 관리자가 아닌 경우, 홈 페이지로 리다이렉트
      url.pathname = "/UserPage";
      return NextResponse.redirect(url);
    }
  }
  function redirectBasedOnRole(token: string, req: NextRequest) {
    try {
      const decodedToken = decodeToken(token);
      const redirectUrl =
        decodedToken.roleID === 1 ? "/admin/stockInfo" : "/UserPage";
      return NextResponse.redirect(new URL(redirectUrl, req.url));
    } catch {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // 모든 검사 통과 시, 요청을 그대로 진행
  return NextResponse.next();
}

export const config = {
  matcher: [
    // 미들웨어가 실행될 경로
    "/:path*",
  ],
};
