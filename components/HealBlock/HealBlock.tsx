import { HealOverview } from "types/data.types";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const HealCard = styled.div`
  margin: var(--margin-xl);
  padding: var(--padding-lg);
  max-width: 600px;
  @media screen and (min-width: 800px) {
    margin-right: 0;
  }
`;

const HealHeading = styled.div`
  margin: var(--margin-lg) 0 calc(var(--margin-lg) * 3) 0;
  padding: 0 calc(var(--padding-lg) * 2);

  @media screen and (min-width: 800px) {
    display: none;
  }

  h2 {
    color: var(--dark-green);
    margin-bottom: var(--margin-sm);
    font-size: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.3;
    color: var(--dark);
    font-weight: 100;
  }
`;

const HealCardImageWrapper = styled.div``;

const HealLetters = styled.div``;

const HealLetterWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  &:last-child {
    border-bottom: none;
  }
`;

const HealLetter = styled.div`
  width: 30%;
  justify-content: center;
  text-align: center;
  font-size: 64px;
  font-weight: bold;
  color: var(--dark-green);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HealContent = styled.div`
  width: 70%;
  h3 {
    font-size: 14px;
    color: var(--dark-green);
    text-transform: uppercase;
    letter-spacing: 1pt;
  }

  p {
    font-size: 12px;
    letter-spacing: 0.5pt;
    font-weight: 100;
  }
`;

const HealSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--light-grey);
  border-radius: var(--border-radius-lg);
  padding: var(--padding-lg);
  margin: var(--margin-xl) calc(var(--margin-lg) * 2);
`;

const HealDescription = styled.div`
  max-width: 500px;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  display: none;
  padding: var(--padding-lg);
  align-items: flex-start;

  @media screen and (min-width: 800px) {
    display: flex;
  }

  h2 {
    color: var(--dark-green);
    margin-bottom: var(--margin-sm);
    font-size: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.3;
    color: var(--dark);
    font-weight: 100;
  }

  a {
    margin-left: 0;
    margin-top: var(--margin-lg);
    padding: var(--padding-lg);
    border-radius: var(--border-radius-lg);
    background-color: var(--blue);
    color: var(--light);
    display: inline-block;
    transition: 0.3s ease;
    &:hover {
      background-color: var(--teal);
    }
  }
`;

const HealBlock: React.FC<{
  title?: string;
  subtitle?: string;
  description?: string[];
  heal: HealOverview;
  id?: string;
}> = ({ heal: { h, e, a, l }, id, title, subtitle, description }) => (
  <HealSection>
    <HealDescription>
      <Image
        src="/assets/images/logos/heal-logo.svg"
        width="250px"
        height="150px"
        alt="The letter h from the heal logo"
      />
      <h2>{title || "Activities of this journey"}</h2>
      <p>
        {subtitle ||
          "This heal journey offers activities based on your preferences and can be tailored to suit your needs."}
      </p>
      {description?.map((p) => (
        <p key={Math.random().toString(36).substring(2, 9)}>{p}</p>
      ))}
      <Link href="/about/heal" title="Read more about our HEAL philosophy">
        More Information
      </Link>
    </HealDescription>
    <HealCard id={id}>
      <HealHeading>
        <HealCardImageWrapper>
          <Image
            src="/assets/images/logos/heal-logo.svg"
            width="150px"
            height="100px"
            alt="The letter h from the heal logo"
          />
        </HealCardImageWrapper>
        <h2>{title || "Activities of this journey"}</h2>
        <p>
          {subtitle ||
            "This heal journey offers activities based on your preferences and can be tailored to suit your needs."}
        </p>
      </HealHeading>
      <HealLetters>
        <HealLetterWrapper>
          <HealLetter>H</HealLetter>
          <HealContent>
            <h3>{h.title}</h3>
            <p>{h.copy.join(", ")}</p>
          </HealContent>
        </HealLetterWrapper>
        <HealLetterWrapper>
          <HealLetter>E</HealLetter>
          <HealContent>
            <h3>{e.title}</h3>
            <p>{e.copy.join(", ")}</p>
          </HealContent>
        </HealLetterWrapper>
        <HealLetterWrapper>
          <HealLetter>A</HealLetter>
          <HealContent>
            <h3>{a.title}</h3>
            <p>{a.copy.join(", ")}</p>
          </HealContent>
        </HealLetterWrapper>
        <HealLetterWrapper>
          <HealLetter>L</HealLetter>
          <HealContent>
            <h3>{l.title}</h3>
            <p>{l.copy.join(", ")}</p>
          </HealContent>
        </HealLetterWrapper>
      </HealLetters>
    </HealCard>
  </HealSection>
);

export { HealBlock };
