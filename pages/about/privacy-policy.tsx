import { Accordion } from "@/components/Accordion/Accordion";
import Meta from "@/components/Base/Meta";
import { Header } from "components/Header";

const PrivacyPolicy: React.FC<{}> = () => (
  <main role="main">
    <Meta
      title="Privacy Policy | Ascenders"
      description="Privacy Policy | Ascenders"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/about/privacy-policy`}
      favicon="/favicon.ico"
    />
    <Header
      pageType="info"
      heading="Privacy Policy"
      subheading="Please carefully read the following information which relates to our privacy policy."
    />
    <Accordion title="" description={[]} items={[]} />
  </main>
);

export default PrivacyPolicy;
