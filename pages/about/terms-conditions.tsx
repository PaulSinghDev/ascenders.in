import { Accordion } from "@/components/Accordion/Accordion";
import { Header } from "components/Header";
import { terms } from "data/terms";
import Meta from "@/components/Base/Meta";

const TermsConditions: React.FC<{}> = () => (
  <main role="main">
    <Meta
      title="Terms & Conditions | Ascenders"
      description="Terms & Conditions | Ascenders"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/about/terms-conditions`}
      favicon="/favicon.ico"
    />
    <Header
      pageType="info"
      heading="Terms and Conditions"
      subheading="Please Read Depending on the individual Journey that the participant chooses, the applicable Terms & Conditions, including but not limited to, cost, deposit, payments, cancellations, and refunds, may differ from those listed below. In pre-Journey communications, a copy of the complete Terms and Policies that apply to each participant will be issued. Any term that is found to be unlawful or unenforceable by a court of competent jurisdiction will not impact the legality or application of any other provision, and will be considered removed from this Agreement."
    />
    <Accordion title="" description={[]} items={terms} />
  </main>
);

export default TermsConditions;
