import JourneysGrid from "@/components/JourneysGrid/JourneysGrid";
import { Header } from "components/Header";
import { journeys as journeyData } from "data";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Journey } from "../types";

const Search: React.FC<{ journeys: Journey[]; searchTerm: string }> = ({
  journeys,
  searchTerm,
}) => (
  <main role="main">
    <Head>
      <title>{`You searched for '${searchTerm}' | Ascenders`}</title>
      <meta
        name="description"
        content={`You searched for '${searchTerm}' | Ascenders`}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header
      pageType="info"
      heading={`You searched for '${searchTerm}'`}
      subheading={`Showing a total of ${journeys.length} journeys matching your query`}
    />
    <JourneysGrid journeys={journeys} />
  </main>
);

export default Search;

// Generate the static props to pass to the page component
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const journeysArray = journeyData.filter((journey) => {
    const journeyQuery = `${query?.journeys}`.toLowerCase();
    const queryRegex = new RegExp(journeyQuery, "ig");

    const matchAccommodation = !!journey.accommodation.type.find((acc) =>
      queryRegex.test(acc)
    );
    queryRegex.lastIndex = 0;

    const matchingSlug = queryRegex.test(journey.slug);
    queryRegex.lastIndex = 0;

    const matchingTitle = queryRegex.test(journey.title);
    queryRegex.lastIndex = 0;

    const matchingInterest = !!journey?.interest?.find((interest) =>
      queryRegex.test(interest.slug)
    );
    queryRegex.lastIndex = 0;

    const matchingLocation = queryRegex.test(journey.location.slug);
    queryRegex.lastIndex = 0;

    return (
      matchAccommodation ||
      matchingInterest ||
      matchingLocation ||
      matchingSlug ||
      matchingTitle
    );
  });
  // Got object so pass it down as a prop
  return {
    props: {
      journeys: journeysArray || [],
      searchTerm: query?.journeys || "",
    },
  };
};
