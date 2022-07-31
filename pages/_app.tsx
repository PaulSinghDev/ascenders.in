import type { AppProps } from "next/app";
import { GlobalStyles, GlobalFonts } from "styles";

const Ascenders = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalFonts />
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default Ascenders;
