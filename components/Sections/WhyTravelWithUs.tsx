import React from "react";
import { GiDeer } from "react-icons/gi";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "../Base";
const WhyTravelWithUs: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) => {
  return (
    <Section {...rest}>
      <TitleWrapper>
        <div data-type="icon">
          <GiDeer size={50}></GiDeer>
        </div>
        <h2>Why Travel With Us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          aliquam dignissimos eveniet maiores doloribus cum id amet natus
          perspiciatis atque aspernatur nihil facere rem est, aperiam
          repellendus nam doloremque beatae?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          totam praesentium, voluptatem vero ea dolorem sapiente. Ad quibusdam
          perspiciatis saepe, error cum provident qui harum sint voluptatibus
          pariatur aut consequatur.
        </p>
      </TitleWrapper>
      <ContentWrapper>
        <img src="/assets/images/logos/heal.png" />
        <Button margin="xl">Learn more</Button>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled.section`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  padding: calc(var(--padding-lg) * 8) calc(var(--padding-lg) * 2);
  justify-content: space-evenly;
  max-width: 800px;
  margin: auto;
`;

const TitleWrapper = styled.div`
  text-align: center;

  > h2 {
    text-transform: uppercase;
    color: var(--orange);
    font-weight: 400;
    font-size: 2rem;
  }

  > [data-type="icon"] {
    margin-bottom: var(--margin-md);
    > svg {
      width: 75px;
      height: 75px;
    }
  }

  > p {
    margin: var(--margin-lg) 0;
    font-size: 1.25rem;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  margin: calc(var(--margin-xl) * 2) 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 80%;
    max-width: 400px;
  }
  > button {
    background-color: transparent;
    color: var(--green);
    border: 2px solid var(--green);
    font-size: 1rem;
    padding: var(--padding-md);

    &:hover {
      background-color: var(--green);
      color: var(--light);
    }
  }
`;

export { WhyTravelWithUs };
