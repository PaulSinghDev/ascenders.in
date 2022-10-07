import { Accordion } from "@/components/Accordion/Accordion";
import { Gallery } from "@/components/Gallery/Gallery";
import { JourneyHealBlock } from "@/components/JourneyHealBlock/JourneyHealBlock";
import { JourneyOverview } from "@/components/JourneyOverview/JourneyOverview";
import { JourneyStaffCarousel } from "@/components/JourneyStaffCarousel/JourneyStaffCarousel";
import { QuickLinks } from "@/components/QuickLinks/QuickLinks";
import { Text } from "components/Base";
import { Header } from "components/Header";
import { journeys } from "data";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Journey } from "types/data.types";
import { JourneysCarousel } from "@/components/JourneysCarousel/JourneysCarousel";

const testLinks = [
  { label: "Overview", url: "#overview", title: "Skip to the overview" },
  { label: "Gallery", url: "#gallery", title: "Skip to the gallery" },
  { label: "Itinerary", url: "#itinerary", title: "Skip to the itinerary" },
  {
    label: "Important Information",
    url: "#important-information",
    title: "Skip to the important information section",
  },
  { label: "HEAL", url: "#heal", title: "Skip to the HEAL section" },
  {
    label: "What to bring",
    url: "#what-to-bring",
    title: "Skip to the what to bring section",
  },
];

const JourneyPage: React.FC<Journey> = ({
  title,
  description,
  tagline,
  itinerary,
  heal,
  level,
  group,
  importantInformation,
  inclusions,
  location,
  gallery,
  staff,
  interest,
  thumbnail,
  overviewBullets,
}) => {
  console.log(tagline);
  return (
    <div>
      <Head>
        <title>Ascenders | H.E.A.L | Our Journeys | {`${title}`}</title>
        <meta
          name="description"
          content={`Ascenders | H.E.A.L | Ascenders | H.E.A.L | Our Journeys | ${title}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        type="hero"
        pageType="pdp"
        heading={title}
        location={location.label}
        groupSize={group}
        level={level}
        interests={interest}
        description={tagline}
        backgroundUrl={thumbnail}
      />
      <Text lines={description} />
      <QuickLinks links={testLinks} />
      <JourneyOverview
        id="overview"
        bulletPoints={overviewBullets}
        brochureUrl="some-url"
      />
      <Gallery images={gallery} id="gallery" />
      <Accordion
        title={itinerary.title}
        id="itinerary"
        description={itinerary.description}
        items={itinerary.days}
      />
      <JourneyHealBlock heal={heal} id="heal" />
      <Accordion
        title={importantInformation.title}
        id="important-information"
        description={importantInformation.description}
        items={importantInformation.items}
      />
      <JourneyStaffCarousel staff={staff} />
      <Accordion
        title={inclusions.title}
        id="what-to-bring"
        description={inclusions.description}
        items={inclusions.items}
      />
      <JourneysCarousel interest={interest} level={level} location={location} />
    </div>
  );
};

export default JourneyPage;

// Generate all our static paths using our journeys and their slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const output = {
    paths: journeys.map((journey) => ({
      params: { slug: journey.slug },
    })),
    fallback: false,
  };
  return output;
};

// Generate the static props to pass to the page component
export const getStaticProps: GetStaticProps = async (context) => {
  const journeyObject = journeys.find(
    (journey) => journey.slug === context?.params?.slug
  );
  // No object so we don't need props for now
  if (!journeyObject) {
    return {
      props: {},
    };
  }
  // Got object so pass it down as a prop
  return {
    props: {
      ...journeyObject,
    },
  };
};
