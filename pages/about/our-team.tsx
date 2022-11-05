import { Accordion } from "@/components/Accordion/Accordion";
import Meta from "@/components/Base/Meta";
import { Header } from "components/Header";

const OurTime: React.FC<{}> = () => (
  <main role="main">
    <Meta
      title="About Our Team | Ascenders"
      description="About Our Team | Ascenders"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/about/our-team`}
      favicon="/favicon.ico"
    />
    <Header
      pageType="info"
      heading="Our Team"
      subheading="Please carefully read the following information which relates to our privacy policy."
    />
    <Accordion title="" description={[]} items={[]} />
  </main>
);

export default OurTime;
