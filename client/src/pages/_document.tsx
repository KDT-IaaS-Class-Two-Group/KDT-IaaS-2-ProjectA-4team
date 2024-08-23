import { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";

/**
 * @crystal23733
 * @date 24.08.23
 *
 * `MyDocument` 컴포넌트는 Next.js 애플리케이션의 기본 HTML 문서 구조를 정의합니다.
 *
 * 이 컴포넌트는 HTML 문서의 `<html>`, `<head>`, `<body>`를 렌더링하며, 애플리케이션의 모든 페이지에서 공통적으로 적용될 HTML 구조를 제공합니다.
 *
 * `favicon` 링크는 환경 변수에서 가져온 URL을 사용하여 문서의 아이콘을 설정합니다.
 *
 * @component
 *
 * @param {DocumentProps} props - Next.js의 DocumentProps를 포함합니다.
 *
 * @returns {JSX.Element} - 전체 HTML 문서 구조를 렌더링하는 JSX 요소를 반환합니다.
 */
export default function MyDocument(props: DocumentProps) {
  const favicon = process.env.NEXT_PUBLIC_S3_FAVICON_URL as string;
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
