import { Header } from "components/Header";
import Meta from "@/components/Base/Meta";

const ContactUs: React.FC<{}> = () => (
  <main role="main">
    <Meta
      title="Contact Us | Ascenders"
      description="Contact Us | Ascenders"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/about/contact-us`}
      favicon="/favicon.ico"
    />
    <Header
      pageType="info"
      heading="Contact us"
      subheading="If you would like to get in contact with us for any reason at all please the use information below and we will do our best to respond to you within 48 hours."
    />
  </main>
);

export default ContactUs;
