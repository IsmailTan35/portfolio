import "../styles/globals.css";
import { hotjar } from "react-hotjar";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3763776, 6);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
