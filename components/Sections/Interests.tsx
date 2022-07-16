import { useState, HTMLAttributes, useEffect } from "react";
import styled from "styled-components";
import { Button, Modal } from "../";
import { interests } from "data";

interface InterestModalContentProps extends HTMLAttributes<HTMLDivElement> {
  type: string;
}

const InterestModalContent: React.FC<InterestModalContentProps> = ({
  type,
  ...rest
}) => {
  return (
    <StyledModalContent>
      <h3>The interest</h3>
    </StyledModalContent>
  );
};

const StyledModalContent = styled.div``;

const Interests: React.FC = () => {
  return (
    <StyledInterestsSection>
      <StyledHeading>
        <span>what to do</span>
        <h2>Interests</h2>
        <Button margin="lg" color="blue">
          See all
        </Button>
      </StyledHeading>
      <div className="interests-wrapper">
        <ul className="interests-list">
          {interests.map((interest) => {
            return (
              <li
                className="interest-item"
                key={Math.random().toString(36).substring(2, 7)}
              >
                <button data-id={interest.id}>
                  <img src={interest.thumbnail} />
                  <p>
                    {interest.title}
                    <span>{interest.level} level</span>
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledInterestsSection>
  );
};

const StyledInterestsSection = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  .interests-wrapper {
    overflow: hidden;
    .interests-list {
      display: flex;
      overflow: scroll;
      .interest-item {
        flex-grow: 1;
        flex-shrink: 0;
        margin: 1rem;

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

export { Interests };
