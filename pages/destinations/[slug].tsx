import { Header } from "@/components/Header";
import { destinations } from "data/destinations";
import { GetStaticPaths, GetStaticProps } from "next";
import { Destination, Journey } from "types/data.types";
import { getRelatedJourneys } from "services/journey.service";
import JourneysGrid from "@/components/JourneysGrid/JourneysGrid";
import Head from "next/head";

interface DestinationPageProps extends Destination {
  journeys: Journey[];
}

const DestinationPage: React.FC<DestinationPageProps> = ({
  title,
  journeys,
}) => (
  <main role="main">
    <Head>
      <title>{`Journeys in ${title} | Ascenders`}</title>
      <meta name="description" content={`Journeys in ${title} | Ascenders`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header
      pageType="info"
      heading={title}
      subheading={`Get inspired to take a journey in ${title.toLowerCase()}. Showing a total of ${
        journeys.length
      } journeys.`}
    />
    <JourneysGrid journeys={journeys} />
  </main>
);

export default DestinationPage;

// Generate all our static paths using our destinations and their slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const output = {
    paths: destinations.map((destination) => ({
      params: { slug: destination.slug },
    })),
    fallback: false,
  };
  return output;
};

// Generate the static props to pass to the page component
export const getStaticProps: GetStaticProps = async (context) => {
  const destinationObject = destinations.find(
    (destination) => destination.slug === context?.params?.slug
  );

  const journeys = getRelatedJourneys([], destinationObject) || [];
  // No object so we don't need props for now
  if (!destinationObject) {
    return {
      props: {
        journeys,
      },
    };
  }
  // Got object so pass it down as a prop
  return {
    props: {
      ...destinationObject,
      journeys,
    },
  };
};
