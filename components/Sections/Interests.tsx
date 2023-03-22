import styled from "styled-components";
import Link from "next/link";
import { InterestCarousel } from "../InterestCarousel/InterestCarousel";

const StyledInterestsSection = styled.section`
  padding-top: 80px;

  .interests-wrapper {
    overflow: hidden;

    .interests-list {
      display: flex;
      overflow: scroll;

      .interest-item {
        flex-grow: 1;
        flex-shrink: 0;
        margin: 1rem;
        position: relative;

        button {
          appearance: none;
          border: none;
          box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
          border-radius: 24px;
          position: relative;
          padding: 0;
          overflow: hidden;
          width: 300px;
          height: 200px;
          max-width: 95vw;

          &::before {
            height: 80%;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            content: "";
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.6) 90%);
            z-index: 1;
          }

          img {
            display: block;
            height: 100%;
            object-fit: cover;
            border-radius: 24px;
            max-width: 300px;
            width: 100%;
            height: 100%;
          }

          p {
            position: absolute;
            bottom: 14px;
            left: 14px;
            text-align: left;
            color: #fff;
            font-weight: bold;
            font-size: 1.4rem;
            z-index: 2;

            span {
              margin-top: 8px;
              font-size: 1rem;
              font-weight: normal;
              display: block;
            }
          }
        }
      }
    }
  }
`;

const StyledHeading = styled.div`
  color: var(--grey);
  justify-content: center;
  text-align: center;
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

const Interests: React.FC = () => (
  <StyledInterestsSection>
    <StyledHeading>
      <span>what to do</span>
      <h2>Interests</h2>
      <Link href="/interests" title="View all interests">
        See all
      </Link>
    </StyledHeading>
    <div className="interests-wrapper">
      <div className="interests-list">
        <InterestCarousel showAll disabledHeading />
      </div>
    </div>
  </StyledInterestsSection>
);
export { Interests };
