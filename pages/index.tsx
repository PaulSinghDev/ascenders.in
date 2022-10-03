import { Interests } from "@/components/Sections/Interests";
import type { NextPage } from "next";
import Head from "next/head";
import { Header, JourneysSection, WhyTravelWithUs } from "../components";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Ascenders | H.E.A.L</title>
      <meta name="description" content="Ascenders | H.E.A.L" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header type="hero" pageType="home" />
    <WhyTravelWithUs />
    <JourneysSection />
    <Interests />
  </div>
);

export default Home;
