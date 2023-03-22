import React from "react";
import { GiDeer } from "react-icons/gi";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../Base";

const Section = styled.section`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  padding: calc(var(--padding-lg) * 4) calc(var(--padding-lg) * 2);
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
  margin: var(--margin-xl) 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > a {
    border-radius: var(--border-radius-lg);
    margin-top: calc(var(--margin-xl) * 2);
    display: inline-block;
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
          `We offer a conscious travel experience called "H.E.A.L" which stands for Health-conscious, Earth-conscious, Adventurous, and Loving; journeys incorporating the spirit of yoga, camping, nature conservation, exploration, culture, art, and festivals in serene locations amidst forests, mountains, and oceans. Ascenders is the way to GO BEYOND for anyone seeking a change and visiting the new you.`,
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
      <Link href="/about/heal" title="Read about our HEAL philosophy">
        Learn more
      </Link>
    </ContentWrapper>
  </Section>
);

export { WhyTravelWithUs };
