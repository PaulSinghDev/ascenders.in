import type { AppProps } from "next/app";
import { GlobalStyles, GlobalFonts } from "styles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
