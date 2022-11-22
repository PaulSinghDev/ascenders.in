import Meta from "@/components/Base/Meta";
import { Header } from "components/Header";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Content = styled.div`
  padding: var(--padding-lg) calc(var(--padding-lg) * 2);
  max-width: 1024px;
  margin: auto;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: var(--margin-sm);
    color: var(--dark-blue);
  }

  p {
    line-height: 1.6;
    font-size: 16px;
    margin-bottom: 12px;
    color: var(--dark-blue);
    font-size: 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    max-width: calc(100% - calc(var(--margin-md) * 2));
    object-fit: cover;
    border-radius: var(--border-radius-lg);
    margin: calc(var(--margin-lg) * 2) var(--margin-md);
  }
`;

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
      subheading="We gather personal information, as described in this policy, and anonymized data, as defined in this policy. You will be informed at the point of providing your personal information what information we need, and why."
    />
    <Content>
      <ReactMarkdown>
        {`
### COMMENTS AND QUESTIONS

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at contact@ascenders.in

### CONSENT

By using our website, you hereby consent to our Privacy Policy and agree to its terms.

Specifically, we gather

### DATA WE COLLECT

- When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, Identification proof (Driving License, Aadhar card, Identification number) and telephone number.

-   Information from you during the registration process, such as your first and last names, country of residence, gender, date of birth, email address, username, and password, when you open an account, participate in a promotion, or link your profile on a third-party website or platform with your registration account;

-   Information such as personal hobbies, food allergies, special concerns and personal preferences to customize the journey for you while travelling with us;

-   Transaction data, such as your residential address, phone number, and payment details, that you give us when you inquire about our offerings;

-   Details you disclose in open forums on our websites and applications, including your public posts;

-   Information sent using our message, chat, post, or similar functionality that is sent one-to-one or within a small group, where we are allowed by the applicable law to collect this information;

-   Information we obtain from a third party, such as a site or platform provider, about the use of our applications on third-party platforms or devices;

-   Location data, such as that supplied by a mobile device or other device interacting with one of our sites, applications, or physical properties (including through beacon technologies), or data connected to your IP address or another online or device identifier where we are legally allowed to process such data;

-   Activity data on your use of our sites and applications, as well as the usage by any individuals you authorise to use them through your account, such as the content you view or upload, how frequently you use our services, and your preferences;

-   Your browser or device type, unique device identifier, and IP address are among the usage, viewing, technical, and device data we collect when you visit our sites, use our applications on third-party sites or platforms, open emails we send, or connect with our wireless Internet connectivity services and other similar technologies;

-   Photos or videos that were taken by guests while they travelled with us.

### DATA COLLECTION PURPOSE

-   Supplying, running, and maintaining our website;

-   Enhance, customise, and broaden our website;

-   Recognize and examine how you are using our website;

-   Create new goods, services, features, and capabilities;

-   Communicate with you, either directly or through one of our partners, on a variety of topics, such as customer service, website changes and other information, as well as marketing and promotional activities.

-   Send with emails;

-   Identify and stop fraud;

-   Like any other website, Ascenders uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information;

-   When you use our applications on third-party websites or platforms or visit our sites and applications, we collect information using analytics technologies.

-   To update or add to the data you gave or that we automatically collected, such as when we use third-party services to check postal address information, we obtain information from additional reliable sources. Before we can obtain your information, applicable legislation may require that you give the third-party permission to share it with us.

-   You may consult this list to find the Privacy Policy for each of the advertising partners of Ascenders.

### ADVERTISING PARTNER'S PRIVACY POLICIES

-   Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Ascenders, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

-   Note that Ascenders has no access to or control over these cookies that are used by third-party advertisers.

### INDIVIDUAL CHOICE

Depending on the applicable law, you may have the ability to exercise certain controls and choices regarding our collection, use and sharing of your information. These controls and choices may include:

-   Correcting, updating, and deleting your registration account;

-   Requesting access to the personal information we hold about you and that we amend or delete it;

-   Choosing whether to receive from us offers and promotions for our products and services, or products and services that we think may be of interest to you;

-   Choosing or changing your choices for subscriptions, newsletters, and alerts;

-   Requesting removal of your personal information from a public forum on one of our sites or [application](https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/#); and

### MODIFICATION

We reserve the right to modify this privacy statement at any time to reflect emerging technology, business trends, legal requirements, or other factors. If these changes are significant, we will notify you and, where required by applicable legislation, get your permission. By posting notice of the changes on our sites and applications, sending you an email at the most recent email address you gave us, or by using another method that complies with the law, notice may be given to you.

### CHILDREN'S INFORMATION

Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

Ascenders does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`}
      </ReactMarkdown>
    </Content>
  </main>
);

export default PrivacyPolicy;
