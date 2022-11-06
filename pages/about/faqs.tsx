import { Header } from "components/Header";
import Meta from "@/components/Base/Meta";

const FrequentlyAskedQuestions: React.FC<{}> = () => (
  <main role="main">
    <Meta
      title="Frequently Asked Questions | Ascenders"
      description="Frequently Asked Questions | Ascenders"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/about/faqs`}
      favicon="/favicon.ico"
    />
    <Header
      pageType="info"
      heading="Frequently Asked Questions"
      subheading="Got a question you think someone may have asked us before? If so have a look at the most frequently asked questions we receive."
    />
  </main>
);

export default FrequentlyAskedQuestions;
