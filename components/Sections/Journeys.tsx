import styled from "styled-components";
import { Button } from "../Base";
import { journeys } from "data/journeys";

const Journeys: React.FC = () => {
  return (
    <StyledSection>
      <StyledHeading>
        <span>top journeys</span>
        <h2>Journeys</h2>
        <Button margin="lg" color="blue">
          See all
        </Button>
      </StyledHeading>
      <StyledJourneysWrapper>
        {journeys.map((journey) => {
          return (
            <StyledJourneyCard>
              <StyledJourneyThumb>
                <img src={journey.thumbnail} width="300" />
              </StyledJourneyThumb>
              <StyledJourneyContent>
                <StyledJourneyTitle>
                  <span>Expedition</span>
                  <h3>{journey.title}</h3>
                  <span>{`${journey.duration.value} ${journey.duration.measurement} from ${journey.price.currency}${journey.price.from}`}</span>
                </StyledJourneyTitle>
                <StyledJourneyDetails>
                  <div>
                    <span>Activity level:</span>
                    <span>Group Size:</span>
                    <span>Location</span>
                  </div>
                  <div>
                    <span>{journey.level}</span>
                    <span>Max {journey.group.max} People</span>
                    <span>{journey.location.label}</span>
                  </div>
                </StyledJourneyDetails>
                <Button margin="md" color="blue">
                  View
                </Button>
              </StyledJourneyContent>
            </StyledJourneyCard>
          );
        })}
      </StyledJourneysWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: calc(var(--padding-lg) * 8) calc(var(--padding-lg) * 2);
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const StyledHeading = styled.div`
  color: var(--grey);
  > span {
    display: block;
    margin-bottom: 8px;
    font-size: 0.75rem;
    opacity: 0.8;
  }
  > h2 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2rem;
  }
  > button {
    background-color: transparent;
    color: var(--blue);
    border: 2px solid var(--blue);
    font-size: 0.75rem;
    padding: var(--padding-sm);

    &:hover {
      background-color: var(--blue);
      color: var(--light);
    }
  }
`;

const StyledJourneysWrapper = styled.div`
  padding: var(--padding-lg);
  display inline-flex;

  overflow: auto;
`;

const StyledJourneyCard = styled.div`
  border-radius: var(--border-radius-md);
  background-color: var(--light);
  max-width: 350px;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
  margin: 14px;
  flex-shrink: 0;
`;

const StyledJourneyThumb = styled.div`
  > img {
    border-radius: var(--border-radius-md);
    width: 100%;
  }
`;

const StyledJourneyContent = styled.div`
  padding: var(--padding-md);
  > button {
    font-size: 1rem;
    padding: var(--padding-md);
    text-transform: capitalize;
    min-width: 150px;
  }
`;

const StyledJourneyTitle = styled.div`
  text-align: left;
  margin: var(--padding-md);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 24px;
  > span:first-of-type {
    text-transform: uppercase;
    display: block;
    margin-bottom: 12px;
  }
  > h3 {
    color: var(--orange);
    font-size: 1.5rem;
  }
  > span:last-of-type {
    display: block;
    margin-top: 12px;
    opacity: 0.6;
    text-transform: uppercase;
  }
`;

const StyledJourneyDetails = styled.div`
display flex;
margin: var(--padding-md);
justify-content: space-between;
> div {
    text-align: left;
    display flex;
    flex-direction: column;
    opacity: 0.6;

    &:first-of-type {
        font-weight: bold;
    }

    > span {
        display: block;
        margin: 4px 0; 
    }
  }
`;

export { Journeys };
