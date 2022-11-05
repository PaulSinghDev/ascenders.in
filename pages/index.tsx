import Meta from "@/components/Base/Meta";
import { Gallery } from "@/components/Gallery/Gallery";
import { Interests } from "@/components/Sections/Interests";
import type { NextPage } from "next";
import { Header, JourneysSection, WhyTravelWithUs } from "../components";
import { GalleryImage } from "../types";

const gallery: GalleryImage[] = [
  {
    title: "Become Boundless",
    src: "",
    interest: [],
    alt: "",
    description: [
      "Having an element of uncertainty adds thrill to life, and these Himalayan outdoors spark that feeling.",
      "Reach out and experience.",
    ],
  },
  {
    title: "Earth is the Bad",
    src: "",
    interest: [],
    alt: "",
    description: [""],
  },
  {
    title: "Sky is the Roof",
    src: "",
    interest: [],
    alt: "",
    description: [""],
  },
  {
    title: "Body is the Tool",
    src: "",
    interest: [],
    alt: "",
    description: [""],
  },
  {
    title: "Nature is the Song",
    src: "",
    interest: [],
    alt: "",
    description: [""],
  },
  {
    title: "Himalaya is the Doctor",
    src: "",
    interest: [],
    alt: "",
    description: [""],
  },
  {
    title: "'Go Beyond' is the Mission",
    src: "",
    interest: [],
    alt: "",
    description: [""],
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
