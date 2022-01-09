import type { NextPage } from "next";
import Head from "next/head";
import { ComingSoon } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ascenders | H.E.A.L</title>
        <meta name="description" content="Ascenders | H.E.A.L" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ComingSoon />
      </main>
    </div>
  );
};

export default Home;
