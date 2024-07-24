<<<<<<< HEAD
import { AppProps } from "next/app";
import "../../style/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
=======
import { AppProps } from 'next/app';
import '../../style/globals.css';

function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
>>>>>>> 43d67f4 (:heavy_plus_sign:유호영:기본 전역컴포넌트 생성)
