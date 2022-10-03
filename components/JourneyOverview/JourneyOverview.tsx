import styled from "styled-components";
import { BsDownload, BsHeart, BsShare } from "react-icons/bs";
import { Button } from "../Base";
import { SectionHeading } from "../Base/SectionHeading";

interface JourneyOverviewProps {
  id?: string;
  bulletPoints: string[];
  brochureUrl: string;
}

const JourneyOverviewWrapper = styled.div`
  background-color: var(--light-grey);
  border-radius: var(--border-radius-xl);
  padding: calc(var(--padding-lg) * 1.8);
  margin: var(--margin-xl);

  > div:first-child {
    margin: 0;
  }
`;

const JourneyOverviewBullets = styled.div`
  ul {
    list-style-type: initial;
    padding-left: var(--padding-lg);
  }

  li {
    font-weight: 100;
    margin-bottom: var(--margin-lg);
  }
  li::marker {
    color: var(--dark-blue);
    margin-left: var(--padding-lg);
  }
`;
const JourneyOverviewActions = styled.div`
  margin: var(--margin-xl) 0 0;
  button {
    padding: var(--padding-sm) var(--padding-md);
    font-size: 10px;
    display: inline-flex;
    justify-content: center;
    align-item: center;
    background-color: #fff;
    color: var(--dark-blue);
    margin: 4px;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    svg {
      margin-right: 0;
    }

    span {
      display: none;
      padding-top: 1px;
    }

    @media screen and (min-width: 380px) {
      span {
        display: inline-block;
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;

const JourneyOverview: React.FC<JourneyOverviewProps> = ({
  id,
  bulletPoints,
}) => (
  <JourneyOverviewWrapper id={id}>
    <SectionHeading title="Overview" />
    <JourneyOverviewBullets>
      <ul>
        {bulletPoints.map((bullet) => (
          <li key={Math.random().toString(36).substring(2, 7)}>{bullet}</li>
        ))}
      </ul>
    </JourneyOverviewBullets>
    <JourneyOverviewActions>
      <Button margin="sm">
        <BsDownload size={15} />
        <span>Brochure</span>
      </Button>
      <Button margin="sm">
        <BsShare size={15} />
        <span>Share</span>
      </Button>
      <Button margin="sm">
        <BsHeart size={15} />
        <span>Wishlist</span>
      </Button>
    </JourneyOverviewActions>
  </JourneyOverviewWrapper>
);

export { JourneyOverview };
