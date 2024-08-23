import { AppProps } from "next/app";
import "../../style/globals.css";

/**
 * @crystal23733
 * @date 24.08.23
 *
 * `MyApp` 컴포넌트는 Next.js 애플리케이션의 최상위 컴포넌트로, 모든 페이지의 공통 레이아웃과 스타일을 정의합니다.
 *
 * 이 컴포넌트는 전역 CSS 파일을 포함하고, 각 페이지 컴포넌트와 해당 페이지의 props를 전달하여 렌더링합니다.
 *
 * @component
 *
 * @param {AppProps} props - Next.js 앱의 컴포넌트 및 페이지 props를 포함합니다.
 * @param {React.ComponentType} props.Component - 현재 렌더링되는 페이지 컴포넌트입니다.
 * @param {Object} props.pageProps - 현재 페이지 컴포넌트에 전달되는 props입니다.
 *
 * @returns {JSX.Element} - 현재 페이지 컴포넌트를 렌더링하는 JSX 요소를 반환합니다.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
