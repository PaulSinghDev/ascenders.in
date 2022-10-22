import { Accordion } from "@/components/Accordion/Accordion";
import { Header } from "components/Header";
import Head from "next/head";
import { terms } from "data/terms";

const Search: React.FC<{}> = () => (
  <main role="main">
    <Head>
      <title>Ascenders | H.E.A.L | Our Journeys | Search</title>
      <meta
        name="description"
        content="Ascenders | H.E.A.L | Ascenders | H.E.A.L | Our Journeys | Search"
      />
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

export default Search;
