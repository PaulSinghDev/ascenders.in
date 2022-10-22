import { Accordion } from "@/components/Accordion/Accordion";
import { Header } from "components/Header";
import Head from "next/head";

const PrivacyPolicy: React.FC<{}> = () => (
  <main role="main">
    <Head>
      <title>Privacy Policy | Ascenders</title>
      <meta name="description" content="Privacy Policy | Ascenders" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header
      pageType="info"
      heading="Privacy Policy"
      subheading="Please carefully read the following information which relates to our privacy policy."
    />
    <Accordion title="" description={[]} items={[]} />
  </main>
);

export default PrivacyPolicy;
