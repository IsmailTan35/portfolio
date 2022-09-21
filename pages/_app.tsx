import "../styles/globals.css";
import "../styles/topbar.css";
import "../styles/skills.css";
import "../styles/home.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
