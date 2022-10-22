import { Header } from "@/components/Header";
import { interests } from "data";
import { GetStaticPaths, GetStaticProps } from "next";
import { Interest } from "types/data.types";
import { getRelatedJourneys } from "services/journey.service";
import JourneysGrid from "@/components/JourneysGrid/JourneysGrid";
import styled from "styled-components";

interface InterestPageProps extends Interest {
  count?: number;
}

const GridWrapper = styled.div`
  border-radius: var(--border-radius-xl);
  margin: var(--margin-xl);

  > div:first-child {
    margin: 0;
  }
`;

const InterestPage: React.FC<InterestPageProps> = ({
  title,
  slug,
  description,
}) => {
  const interest = interests.find((i) => i.slug === slug);
  const journeys = interest ? getRelatedJourneys([interest]) : [];
  return (
    <main role="main">
      <Header
        pageType="info"
        heading={`${title} Journeys`}
        subheading={description.join(" ")}
      />
      <GridWrapper>
        <JourneysGrid journeys={journeys} />
      </GridWrapper>
    </main>
  );
};

export default InterestPage;

// Generate all our static paths using our interests and their slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const output = {
    paths: interests.map((interest) => ({
      params: { slug: interest.slug },
    })),
    fallback: false,
  };
  return output;
};

// Generate the static props to pass to the page component
export const getStaticProps: GetStaticProps = async (context) => {
  const interestObject = interests.find(
    (interest) => interest.slug === context?.params?.slug
  );
  const journeys = getRelatedJourneys(interestObject ? [interestObject] : []);
  // No object so we don't need props for now
  if (!interestObject) {
    return {
      props: {
        count: journeys.length,
      },
    };
  }
  // Got object so pass it down as a prop
  return {
    props: {
      ...interestObject,
    },
  };
};
