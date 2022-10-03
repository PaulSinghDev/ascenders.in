import React from "react";
import { GiDeer } from "react-icons/gi";
import styled from "styled-components";
import Image from "next/image";
import { Button, Text } from "../Base";

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

const ImageWrapper = styled.div`
  width: 80%;
  max-width: 300px;
  height: 150px;
  text-align: center;
  position: relative;
  > img {
  }
`;

const WhyTravelWithUs: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) => (
  <Section {...rest}>
    <TitleWrapper>
      <div data-type="icon">
        <GiDeer size={50} />
      </div>
      <h2>Why Travel With Us</h2>
      <Text
        lines={[
          `We offer conscious and self-transformative HEAL journeys that are all
        about learning to care for Self-Health and Earth in a journey full of
        Adventure and Love. Our journeys have been designed to engage you in
        actions that help you go beyond who you already are.`,
        ]}
      />
      <h2>Why we do it</h2>
      <Text
        lines={[
          `It's a step to promote conscious travel, improve health, generate
        employment, empower women, free education, nature conservation, sattvic
        life, Ayurveda, and self-enhancement. Let's take a HEAL journey of a
        lifetime.`,
        ]}
      />
    </TitleWrapper>
    <ContentWrapper>
      <ImageWrapper>
        <Image
          src="/assets/images/logos/heal-logo.svg"
          alt="Green HEAL logo with initialisation definitions"
          layout="fill"
        />
      </ImageWrapper>
      <Button margin="xl">Learn more</Button>
    </ContentWrapper>
  </Section>
);

export { WhyTravelWithUs };
