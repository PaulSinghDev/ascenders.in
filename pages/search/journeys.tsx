import Meta from "@/components/Base/Meta";
import JourneysGrid from "@/components/JourneysGrid/JourneysGrid";
import { Header } from "components/Header";
import { journeys as journeyData } from "data";
import { GetServerSideProps } from "next";
import { Journey } from "@/types/data.types";

const Search: React.FC<{ journeys: Journey[]; searchTerm: string }> = ({
  journeys,
  searchTerm,
}) => (
  <main role="main">
    <Meta
      favicon="/favicon.ico"
      title={`You searched for '${searchTerm}' | Ascenders`}
      description={`You searched for '${searchTerm}' | Ascenders`}
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/search`}
    />
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
    const journeyQuery = `${query?.q}`.toLowerCase();
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
      searchTerm: query?.q || "",
    },
  };
};
