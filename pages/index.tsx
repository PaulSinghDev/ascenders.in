import { Interests } from "@/components/Sections/Interests";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer, Header, Journeys, WhyTravelWithUs } from "../components";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Ascenders | H.E.A.L</title>
      <meta name="description" content="Ascenders | H.E.A.L" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Header type="hero" pageType="home" />
      <WhyTravelWithUs />
      <Journeys />
      <Interests />
    </main>
    <Footer />
  </div>
);

export default Home;
