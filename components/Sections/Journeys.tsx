import styled from "styled-components";
import { journeys } from "data/journeys";
import Image from "next/image";
import { Button } from "../Base";

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
  max-width: 100%;
  overflow: auto;
`;

const StyledJourneyCard = styled.div`
  border-radius: var(--border-radius-md);
  overflow: hidden;
  background-color: var(--light);
  max-width: 300px;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
  margin: 14px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const StyledJourneyThumb = styled.div`
  > img {
    border-radius: var(--border-radius-md);
    width: 100%;
    max-height: 250px;
    object-fot: cover;
  }
`;

const StyledJourneyContent = styled.div`
  padding: var(--padding-md);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  > button {
    margin-top: auto;
    font-size: 12px;
    padding: 8px;
    text-transform: capitalize;
    min-width: 100px;
    align-self: center;
  }
`;

const StyledJourneyTitle = styled.div`
  text-align: left;
  margin: var(--padding-md);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: var(--padding-md);

  > span:first-of-type {
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 8px;
    font-size: 10px;
    background-color: var(--blue);
    padding: 4px;
    border-radius: 4px;
    color: #fff;
  }

  > h3 {
    color: var(--orange);
    font-size: 1rem;
    margin-bottom: 8px;
  }
  > span:last-of-type {
    display: block;
    opacity: 0.6;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
`;

const StyledJourneyDetails = styled.div`
display flex;
margin: 0 var(--padding-md);
justify-content: space-between;
margin-bottom: var(--padding-md);

  > div {
    text-align: left;
    display flex;
    flex-direction: column;
    opacity: 0.6;

    &:first-of-type {
        font-weight: bold;
        font-size: 12px;
      }
      
      > span {
      font-size: 12px;
        display: block;
        margin: 4px 0; 
    }
  }
`;

const Journeys: React.FC = () => (
  <StyledSection>
    <StyledHeading>
      <span>top journeys</span>
      <h2>Journeys</h2>
      <Button margin="lg" color="blue">
        See all
      </Button>
    </StyledHeading>
    <StyledJourneysWrapper>
      {journeys.map((journey) => (
        <StyledJourneyCard key={Math.random().toString(36).substring(2, 7)}>
          <StyledJourneyThumb>
            <Image
              src={journey.thumbnail}
              width={350}
              height={250}
              alt={journey.title}
            />
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
                <span>
                  Max
                  {journey.group.max} People
                </span>
                <span>{journey.location.label}</span>
              </div>
            </StyledJourneyDetails>
            <Button margin="md" color="blue">
              View
            </Button>
          </StyledJourneyContent>
        </StyledJourneyCard>
      ))}
    </StyledJourneysWrapper>
  </StyledSection>
);

export { Journeys };
