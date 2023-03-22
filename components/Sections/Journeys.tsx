import styled from "styled-components";
import { JourneysCarousel } from "@/components/JourneysCarousel/JourneysCarousel";
import Link from "next/link";

const StyledSection = styled.section`
  padding: calc(var(--padding-lg) * 4) var(--padding-lg);
  text-align: center;
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
  > a {
    display: inline-block;
    margin-top: var(--margin-md);
    background-color: var(--blue);
    color: var(--light);
    border-radius: var(--border-radius-md);
    border: 2px solid var(--blue);
    font-size: 0.75rem;
    padding: 4px 12px;
    transition: 0.3s ease;
    &:hover {
      border-color: var(--dark-blue);
      background-color: var(--dark-blue);
      color: var(--light);
    }
  }
`;

const StyledJourneysWrapper = styled.div`
  display inline-flex;
  max-width: 100%;
`;

const StyledJourneyCarousel = styled(JourneysCarousel)`
  margin: var(--margin-lg);
`;

const JourneysSection: React.FC = () => (
  <StyledSection>
    <StyledHeading>
      <span>top journeys</span>
      <h2>Journeys</h2>
      <Link href="/journeys" title="View all of our journeys">
        See all
      </Link>
    </StyledHeading>
    <StyledJourneysWrapper>
      <StyledJourneyCarousel showAll disabledHeading />
    </StyledJourneysWrapper>
  </StyledSection>
);

export { JourneysSection };
