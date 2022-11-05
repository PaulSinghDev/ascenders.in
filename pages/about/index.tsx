import Meta from "@/components/Base/Meta";
import { Header } from "@/components/Header";

const AboutPage: React.FC = () => (
  <main role="main">
    <Meta
      title="About Ascenders | Ascenders"
      description="About Ascenders | Ascenders"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/about`}
      favicon="/favicon.ico"
    />
    <Header pageType="info" heading="About Ascenders" />
  </main>
);

export default AboutPage;
