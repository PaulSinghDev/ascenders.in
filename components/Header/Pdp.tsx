import styled from "styled-components";
import { BsSpeedometer2, BsPeople } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaMountain } from "react-icons/fa";
import { Difficulty, Interest } from "@/types/data.types";

const StyledHeader = styled.header<{ type?: string; backgroundImg?: string }>`
  ${(props) => {
    const { type, backgroundImg } = props;
    return `
        margin: var(--margin-xl) var(--margin-lg);
        min-height: ${type === "hero" ? "calc(var(--vh) * 100)" : "600px"};
        background-color: var(--light-teal);
        display: flex;
        flex-direction: column;
        background-image: url("${
          backgroundImg ||
          "/assets/images/journeys/thumbnails/ascenders-journeys-ali-bugyal-trek.jpg"
        }");
        background-size: cover;
        background-position: center;
        position: relative;
        z-index: 0;
        border-radius: 40px;
        overflow: hidden;
        `;
  }}
`;

const PdpHeaderWrapper = styled.div`
  padding: calc(var(--padding-lg) * 2);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    z-index: -1;
    background-image: linear-gradient(
      180deg,
      transparent 35%,
      rgba(0, 0, 0, 0.9) 70%
    );
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-top: auto;
  h1 {
    color: var(--light);
    font-weight: 700;
    font-size: 1.7rem;
    letter-spacing: 1px;
    position: relative;
    text-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.4);
  }
  > span {
    padding-top: var(--padding-sm);
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 8px;
    text-decoration-color: var(--blue);
    text-decoration-thickness: 4px;
  }
`;

const IconsWrapper = styled.div`
  position: relative;
  color: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: calc(var(--margin-xl) * 2);
`;

const HeaderIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 var(--margin-lg);
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  svg {
    width: 30px;
  }
  span {
    max-width: 60px;
    font-size: 8px;
    text-transform: capitalize;
    margin-top: var(--margin-sm);

    &:first-of-type {
      text-transform: uppercase;
    }
  }
`;

export interface PdpHeaderProps {
  heading?: string;
  description?: string;
  interests?: Interest[];
  groupSize?: {
    min: number;
    max: number;
    measurement: "people" | "couples";
  };
  level?: {
    min: Difficulty;
    max?: Difficulty;
  };
  location?: string;
  backgroundImg?: string;
}

const PdpHeader: React.FC<PdpHeaderProps> = ({
  heading,
  description,
  level,
  backgroundImg,
  groupSize,
  location,
  interests,
}) => (
  <StyledHeader backgroundImg={backgroundImg}>
    <PdpHeaderWrapper>
      <TitleWrapper>
        <h1>{heading || "This Journey"}</h1>
        <span>{description || "Visit the new you"}</span>
      </TitleWrapper>
      <IconsWrapper>
        <HeaderIcon>
          <BsSpeedometer2 size={30} />
          <span>Difficulty</span>
          <span>
            {level?.max ? `${level.min} to ${level.max}` : level?.min}
          </span>
        </HeaderIcon>
        <HeaderIcon>
          <BsPeople size={30} />
          <span>Group Size</span>
          <span>
            {groupSize?.min} to {groupSize?.max} {groupSize?.measurement}
          </span>
        </HeaderIcon>
        <HeaderIcon>
          <GoLocation size={30} />
          <span>Location</span>
          <span>{location}</span>
        </HeaderIcon>
        {!!interests && interests.length > 0 ? (
          <HeaderIcon>
            <FaMountain size={30} />
            <span>Interests</span>
            <span>{interests.map((i) => i.slug)?.join(", ")}</span>
          </HeaderIcon>
        ) : null}
      </IconsWrapper>
    </PdpHeaderWrapper>
  </StyledHeader>
);

export { PdpHeader };
