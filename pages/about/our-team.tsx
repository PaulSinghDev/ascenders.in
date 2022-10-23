import { Accordion } from "@/components/Accordion/Accordion";
import { Header } from "components/Header";
import Head from "next/head";

const OurTime: React.FC<{}> = () => (
  <main role="main">
    <Head>
      <title>Our Team | Ascenders</title>
      <meta name="description" content="Our Team | Ascenders" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header
      pageType="info"
      heading="Our Team"
      subheading="Please carefully read the following information which relates to our privacy policy."
    />
    <Accordion title="" description={[]} items={[]} />
  </main>
);

export default OurTime;
