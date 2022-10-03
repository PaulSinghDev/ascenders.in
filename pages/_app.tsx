import { MainNav } from "@/components/MainNav/MainNav";
import type { AppProps } from "next/app";
import { GlobalStyles, GlobalFonts } from "styles";
import { Footer } from "../components";

const Ascenders = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalFonts />
    <GlobalStyles />
    <MainNav />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default Ascenders;
