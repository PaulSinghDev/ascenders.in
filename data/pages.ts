import { Page } from "../types";
import { destinations } from "./destinations";
import { interests } from "./interests";
import { journeys } from "./journeys";
import { staff } from "./staff";

export const pages: Page[] = [
  {
    title: "Home",
    path: "/",
    description:
      "We offer conscious and self-transformative HEAL journeys that are all about learning to care for Self-Health and Earth in a journey full of Adventure and Love.",
    thumbnail:
      "/assets/images/galleries/deoria-tal-chadrishila/chandrashilla-peak.jpg",
  },
  {
    title: "Journeys",
    path: "/journeys",
    description:
      "For travellers looking to get fully immersed in the lap of the might Himalayas, our hiking expeditions offer the ultimate opportunity to get exposed to this heal-loaded sel transformative voyage.",
    thumbnail: "/assets/images/galleries/ali-bedni-bugyal/icy-desert.jpg",
  },
  {
    title: "Interests",
    path: "/interests",
    description:
      "For travellers looking to get fully immersed in the lap of the might Himalayas, our hiking expeditions offer the ultimate opportunity to get exposed to this heal-loaded sel transformative voyage.",
    thumbnail: "/assets/images/galleries/ali-bedni-bugyal/icy-desert.jpg",
  },
  {
    title: "Destinations",
    path: "/destinations",
    description:
      "For travellers looking to get fully immersed in the lap of the might Himalayas, our hiking expeditions offer the ultimate opportunity to get exposed to this heal-loaded sel transformative voyage.",
    thumbnail:
      "/assets/images/galleries/uttarakhand/snow-fields-mountain-top.jpg",
  },
  {
    title: "About HEAL",
    path: "/about/heal",
    description:
      "The acronym H.E.A.L stand for Health, Earth, Adventure, Love; journeys that are based on learning to care for self-health and Earth's beauty.",
    thumbnail: "/assets/images/random/young-boy-laughing.jpeg",
  },
  {
    title: "Team",
    path: "/team",
    description:
      "Get to know our team, all out members of staff are really excited to meet new people and show the beauty that India has to offer.",
    thumbnail: "/assets/images/galleries/ali-bedni-bugyal/ali-bugyal.jpg",
  },
  {
    title: "Contact Us",
    path: "/about/contact-us",
    description:
      "If you would like to get in contact with us for any reason at all please the use information below and we will do our best to respond to you within 48 hours.",
    thumbnail: "/assets/images/galleries/ali-bedni-bugyal/ali-bugyal.jpg",
  },
  {
    title: "Privacy Policy",
    path: "/about/privacy-policy",
    description:
      "The following information relates to how we use your data within Ascenders. Please read it carefully and feel free to reach out for any clarification.",
    thumbnail: "/assets/images/galleries/ali-bedni-bugyal/ali-bugyal.jpg",
  },
  {
    title: "Terms and Conditions",
    path: "/about/terms-conditions",
    description:
      "Please Read Depending on the individual Journey that the participant chooses, the applicable Terms & Conditions, including but not limited to, cost, deposit, payments, cancellations, and refunds, may differ from those listed below. In pre-Journey communications, a copy of the complete Terms and Policies that apply to each participant will be issued. Any term that is found to be unlawful or unenforceable by a court of competent jurisdiction will not impact the legality or application of any other provision, and will be considered removed from this Agreement.",
    thumbnail: "/assets/images/galleries/ali-bedni-bugyal/ali-bugyal.jpg",
  },
  {
    title: "Frequently Asked Questions",
    path: "/about/faqs",
    description:
      "Got a question you think someone may have asked us before? If so have a look at the most frequently asked questions we receive.",
    thumbnail: "/assets/images/galleries/ali-bedni-bugyal/ali-bugyal.jpg",
  },
  ...journeys.map((journey) => ({
    title: journey.title,
    path: `/journeys/${journey.slug}`,
    description: journey.description.join(" "),
    thumbnail: journey.thumbnail,
  })),
  ...interests.map((interest) => ({
    title: interest.title,
    path: `/interests/${interest.slug}`,
    description: interest.description.join(" "),
    thumbnail: interest.thumbnail,
  })),
  ...destinations.map((destination) => ({
    title: destination.title,
    path: `/destinations/${destination.slug}`,
    description: destination.description.join(" "),
    thumbnail: destination.thumbnail.src,
  })),
  ...staff.map((member) => ({
    title: member.name,
    path: `/team/${member.slug}`,
    description: `Find out more about ${member.name}. Here you will be able to read about their interests and favoured treks`,
    thumbnail: member.image.src,
  })),
];
