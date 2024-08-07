import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "./src/utils/decodeToken";

export function middleware(req: NextRequest) {
  console.log("Middleware is running");

  // 요청의 URL
  const url = req.nextUrl.clone();
  const token =
    req.cookies.get("token")?.value ||
    req.headers.get("Authorization")?.split(" ")[1];

  // 로그인 페이지와 회원가입 페이지는 미들웨어를 통과
  if (url.pathname === "/" || url.pathname.startsWith("/sign_up")) {
    return NextResponse.next();
  }

  // JWT 토큰이 없으면 로그인 페이지로 리다이렉트
  if (!token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  let decodedToken;
  try {
    decodedToken = decodeToken(token);
  } catch (error) {
    // 토큰이 유효하지 않으면 로그인 페이지로 리다이렉트
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // 관리자 권한이 필요한 경로에 대한 처리
  if (url.pathname.startsWith("/admin")) {
    if (decodedToken.roleID !== 1) {
      // 관리자가 아닌 경우, 홈 페이지로 리다이렉트
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  // 모든 검사 통과 시, 요청을 그대로 진행
  return NextResponse.next();
}

export const config = {
  matcher: [
    // 미들웨어가 실행될 경로
    "/admin:path*",
  ],
};
