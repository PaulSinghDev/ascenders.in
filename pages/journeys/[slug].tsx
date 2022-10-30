import { Accordion } from "@/components/Accordion/Accordion";
import { Gallery } from "@/components/Gallery/Gallery";
import { HealBlock } from "@/components/HealBlock/HealBlock";
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
import { Section } from "@/components/Base/Section";
import styled from "styled-components";

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

const IntroSection = styled(Section)`
  p {
    margin: 0 auto;
    max-width: 700px;
    margin-bottom: var(--margin-lg);
    &:first-child {
      margin-top: calc(var(--margin-xl) * 2);
    }

    &:last-child {
      margin-bottom: calc(var(--margin-xl) * 2);
    }
  }
`;

const StaffSection = styled(Section)`
  max-width: 800px;
  margin: auto;
`;

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
}) => (
  <main role="main">
    <Head>
      <title>{`${title} | Journeys | Ascenders | Go Beyond | H.E.A.L`}</title>
      <meta
        name="description"
        content={`${title} | Journeys | Ascenders | Go Beyond | H.E.A.L`}
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
        integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
        crossOrigin=""
      />
    </Head>
    <Header
      type="hero"
      pageType="pdp"
      heading={title}
      location={location.slug}
      groupSize={group}
      level={level}
      interests={interest}
      description={tagline}
      backgroundUrl={thumbnail}
    />
    <IntroSection>
      <Text lines={description} />
      <QuickLinks links={testLinks} />
    </IntroSection>
    <JourneyOverview
      id="overview"
      bulletPoints={overviewBullets}
      brochureUrl="some-url"
      destination={location}
    />
    <Gallery images={gallery} id="gallery" />
    <Accordion
      title={itinerary.title}
      id="itinerary"
      description={itinerary.description}
      items={itinerary.days}
    />
    <HealBlock heal={heal} id="heal" />
    <Accordion
      title={importantInformation.title}
      id="important-information"
      description={importantInformation.description}
      items={importantInformation.items}
    />
    <StaffSection>
      <JourneyStaffCarousel staff={staff} />
    </StaffSection>
    <Accordion
      title={inclusions.title}
      id="what-to-bring"
      description={inclusions.description}
      items={inclusions.items}
    />
    <Section id="journeys">
      <JourneysCarousel interest={interest} level={level} location={location} />
    </Section>
  </main>
);

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
