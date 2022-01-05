import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ascenders | H.E.A.L</title>
        <meta name="description" content="Ascenders | H.E.A.L" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Ascenders | H.E.A.L</h1>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
