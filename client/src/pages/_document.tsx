import { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";

export default function MyDocument(props: DocumentProps) {
  const favicon = process.env.NEXT_PUBLIC_S3_FAVICON_URL as string;
  return (
    <Html>
      <Head>
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; connect-src 'self' http://13.125.186.170:3001;"
        /> */}
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
