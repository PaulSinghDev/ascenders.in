import { Interests } from "@/components/Sections/Interests";
import type { NextPage } from "next";
import Head from "next/head";
import { Header, JourneysSection, WhyTravelWithUs } from "../components";

const Home: NextPage = () => (
  <main role="main">
    <Head>
      <title>Ascenders | H.E.A.L</title>
      <meta name="description" content="Ascenders | H.E.A.L" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header type="hero" pageType="home" />
    <WhyTravelWithUs />
    <JourneysSection />
    <Interests />
  </main>
);

export default Home;
