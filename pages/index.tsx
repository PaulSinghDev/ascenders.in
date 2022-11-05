import Meta from "@/components/Base/Meta";
import { Gallery } from "@/components/Gallery/Gallery";
import { Interests } from "@/components/Sections/Interests";
import type { NextPage } from "next";
import { Header, JourneysSection, WhyTravelWithUs } from "../components";
import { GalleryImage } from "../types";

const gallery: GalleryImage[] = [
  {
    title: "Become Boundless",
    src: "/assets/images/galleries/home-page/700px/ali-bugyal.jpg",
    tags: ["hiking", "mountains"],
    alt: "One person standing on the horizon of a mountain",
    description: [
      "Having an element of uncertainty adds thrill to life, and these Himalayan outdoors spark that feeling.",
      "Reach out and experience.",
    ],
  },
  {
    title: "Earth is the Bed",
    src: "/assets/images/galleries/home-page/700px/camping.jpg",
    tags: ["camping", "tents", "mountains"],
    alt: "Rocky mountains with tents in the distance",
    description: [
      "Why settle for a small apartment in one particular location, When you have the entire earth to live on?",
      "Break free of the boundaries to enlarge your space.",
    ],
  },
  {
    title: "Sky is the Roof",
    src: "/assets/images/galleries/home-page/700px/milky-way-galaxy.jpg",
    tags: ["stars", "mountains", "photography"],
    alt: "Silhouette of a person on the horizon with a backdrop of the Milky Way",
    description: [
      "Consider yourself sleeping beneath the rainbow of stars that form the boundless cosmic roof that envelops you.",
    ],
  },
  {
    title: "Body is the Tool",
    src: "/assets/images/galleries/home-page/700px/bedni-bugyal.jpg",
    tags: ["mountains", "trekking"],
    alt: "Young person sat on a rock with a mountainous backdrop",
    description: [
      "Mountainous HEAL journeys are the best trainer to help you reshape the first pillar of your life which is your body.",
    ],
  },
  {
    title: "Mind is the temple",
    src: "/assets/images/galleries/home-page/700px/mountaineering.jpg",
    tags: ["mountains", "trekking"],
    alt: "Two mountain climber standing at the foot of a peak",
    description: [
      "A place that could transform your mind into a temple, and bring back mental flexibility.",
    ],
  },
  {
    title: "Nature is the Song",
    src: "/assets/images/galleries/home-page/700px/sunset.jpg",
    tags: ["mountains", "trekking"],
    alt: "One person standing on the edge of a mountain as the sun sets behind them",
    description: [
      "A beautiful symphony can only be heard in the midst of mother nature; echoes of birds, whistling of rushing winds, and gurgling of rivers.",
    ],
  },
  {
    title: "Himalaya is the Doctor",
    src: "/assets/images/galleries/home-page/700px/homestay.jpg",
    tags: ["homestays", "trekking", "tradition"],
    alt: "Four travellers standing near a rustic traditional home",
    description: [
      "Immerse yourself in Himalayan life which is the best treatment of all sorts to re-engineer existence.",
    ],
  },
  {
    title: "'Go Beyond' is the Mission",
    src: "/assets/images/galleries/home-page/700px/roopkund-lake.jpg",
    tags: ["mountains", "trekking", "nature"],
    alt: "The bright midday sun shining over a snow covered mountain",
    description: [
      "The mission is to go beyond who you were.",
      "Join us on a mountainous HEAL journey unravelling possibilities to visit the new you.",
    ],
  },
];

const Home: NextPage = () => (
  <main role="main">
    <Meta
      title="Home | Ascenders | Go Beyond | H.E.A.L"
      description="Ascenders | H.E.A.L"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
      favicon="/favicon.ico"
    />
    <Header type="hero" pageType="home" />
    <WhyTravelWithUs />
    <JourneysSection />
    <Gallery images={gallery} />
    <Interests />
  </main>
);

export default Home;
