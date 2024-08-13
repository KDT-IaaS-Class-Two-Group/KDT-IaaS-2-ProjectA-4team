import { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";

export default function MyDocument(props: DocumentProps) {
  const favicon = process.env.NEXT_PUBLIC_S3_FAVICON_URL as string;
  return (
    <Html>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
