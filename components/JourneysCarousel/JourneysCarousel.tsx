import { Destination, Difficulty, Interest, Journey } from "@/types/data.types";
import { journeys } from "data";
import { getRelatedJourneys } from "services/journey.service";
import styled from "styled-components";
import { JourneyCard } from "../JourneyCard/JourneyCard";

const JourneyHeading = styled.div`
  margin: 0 0 var(--margin-lg) 0;
  h2 {
    margin-top: 0;
    margin-bottom: var(--margin-lg);
    color: var(--blue);
    font-weight: 500;
    text-transform: uppercase;
  }
  p {
    font-size: 16px;
    color: var(--dark-blue);
    max-width: 700px;
    line-height: 1.9;
  }
`;

const JourneysCarouselContainer = styled.div`
  padding-bottom: var(--padding-lg);
  display inline-flex;
  max-width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display:none;
  }
`;

const JourneysCarouselWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  margin: var(--margin-xl);
`;
interface JourneysProps {
  interest?: Interest[];
  level?: {
    min: Difficulty;
    max?: Difficulty;
  };
  location?: Destination;
  title?: string;
  disabledHeading?: boolean;
  showAll?: boolean;
  overrideJourneys?: Journey[];
  description?: string[];
  className?: string;
}

const JourneysCarousel: React.FC<JourneysProps> = ({
  interest,
  level,
  location,
  title,
  disabledHeading,
  showAll,
  overrideJourneys,
  description,
  className,
}) => {
  const related = !interest
    ? null
    : getRelatedJourneys(interest, location, level);
  return (
    <JourneysCarouselWrapper className={className}>
      {disabledHeading ? null : (
        <JourneyHeading>
          <h2>{title || "Journeys"}</h2>
          {description?.map((line) => (
            <p key={Math.random().toString(36).substring(2, 9)}>{line}</p>
          )) || (
            <p>
              Interested in something a little different? Have a look at these
              related journeys
            </p>
          )}
        </JourneyHeading>
      )}
      <JourneysCarouselContainer>
        {(overrideJourneys || (showAll || !related ? journeys : related)).map(
          (journey) => (
            <JourneyCard
              journey={journey}
              key={Math.random().toString(36).substring(2, 7)}
            />
          )
        )}
      </JourneysCarouselContainer>
    </JourneysCarouselWrapper>
  );
};

export { JourneysCarousel };
