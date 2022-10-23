import { MainNav } from "@/components/MainNav/MainNav";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GlobalStyles, GlobalFonts } from "styles";
import { Footer } from "../components";

const Ascenders = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleHashRouteChange = (
      url: string,
      { shallow }: { shallow: boolean }
    ) => {
      const handleHashRouteEnd = () => {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          document.documentElement.style.removeProperty("scroll-behavior");
          router.events.off("hashChangeComplete", handleHashRouteEnd);
        }, 500);
      };
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );

      document.documentElement.style.setProperty(
        "scroll-behavior",
        "smooth",
        "important"
      );
      router.events.on("hashChangeComplete", handleHashRouteEnd);
    };

    const handleRouteChange = () => {
      const handleRouteChangeComplete = () => {
        document.documentElement.classList.remove("loading");
        router.events.off("routeChangeComplete", handleRouteChangeComplete);
      };
      document.documentElement.classList.add("loading");
      router.events.on("routeChangeComplete", handleRouteChangeComplete);
    };

    router.events.on("hashChangeStart", handleHashRouteChange);
    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("hashChangeStart", handleHashRouteChange);
    };
  }, []);
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <span id="loader" />
      <MainNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default Ascenders;
