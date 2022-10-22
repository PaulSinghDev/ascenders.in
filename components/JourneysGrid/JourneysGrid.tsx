import { journeys as allJourneys } from "data/journeys";
import styled from "styled-components";
import { Journey } from "@/types/data.types";
import { JourneyCard } from "../JourneyCard/JourneyCard";

const JourneysGridWrapper = styled.div`
  display flex;
  max-width: 100%;
  overflow: auto;
`;

const JourneysGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const JourneysGrid: React.FC<{ journeys?: Journey[] }> = ({ journeys }) => {
  journeys?.map((journey) => journey.interest.map((i) => console.log(i)));
  return (
    <JourneysGridWrapper>
      <JourneysGridContainer>
        {(journeys || allJourneys).map((journey) => (
          <JourneyCard
            journey={journey}
            key={Math.random().toString(36).substring(2, 7)}
          />
        ))}
      </JourneysGridContainer>
    </JourneysGridWrapper>
  );
};

export default JourneysGrid;
