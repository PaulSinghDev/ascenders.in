import { Accordion } from "@/components/Accordion/Accordion";
import { Header } from "components/Header";
import Head from "next/head";
import { terms } from "data/terms";

const TermsConditions: React.FC<{}> = () => (
  <main role="main">
    <Head>
      <title>Terms & Conditions | Ascenders</title>
      <meta name="description" content="Terms & Conditions | Ascenders" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header
      pageType="info"
      heading="Terms and Conditions"
      subheading="Please Read Depending on the individual Journey that the participant chooses, the applicable Terms & Conditions, including but not limited to, cost, deposit, payments, cancellations, and refunds, may differ from those listed below. In pre-Journey communications, a copy of the complete Terms and Policies that apply to each participant will be issued. Any term that is found to be unlawful or unenforceable by a court of competent jurisdiction will not impact the legality or application of any other provision, and will be considered removed from this Agreement."
    />
    <Accordion title="" description={[]} items={terms} />
  </main>
);

export default TermsConditions;
