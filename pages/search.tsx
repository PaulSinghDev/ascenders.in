import JourneysGrid from "@/components/JourneysGrid/JourneysGrid";
import { Header } from "components/Header";
import { journeys as journeyData } from "data";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Journey } from "../types";

const Search: React.FC<{ journeys: Journey[]; searchTerm: string }> = ({
  journeys,
  searchTerm,
}) => {
  console.log(journeys);
  return (
    <div>
      <Head>
        <title>Ascenders | H.E.A.L | Our Journeys | Search</title>
        <meta
          name="description"
          content="Ascenders | H.E.A.L | Ascenders | H.E.A.L | Our Journeys | Search"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        type="hero"
        pageType="plp"
        heading={`You searched for '${searchTerm}'`}
        subheading={`Showing a total of ${journeys.length} journeys matching your query`}
      />
      <JourneysGrid journeys={journeys} />
    </div>
  );
};

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
      queryRegex.test(interest)
    );
    queryRegex.lastIndex = 0;

    const matchingLocation = queryRegex.test(journey.location.label);
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
