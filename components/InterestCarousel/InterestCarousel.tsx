import { interests } from "data";
import Link from "next/link";
import { getInterests } from "services/interest.service";
import styled from "styled-components";
import Image from "next/image";

const JourneyHeading = styled.div`
  margin: var(--margin-xl);
  h2 {
    margin-top: 0;
    margin-bottom: var(--margin-lg);
    color: var(--blue);
    font-weight: 500;
    text-transform: uppercase;
  }
  p {
    font-size: 14px;
    color: var(--dark-blue);
  }
`;

const InterestCarouselContainer = styled.div`
  padding: var(--padding-lg);
  display inline-flex;
  max-width: calc(100% - calc(var(--padding-lg) * 2));
  overflow: auto;
`;

const InterestCarouselWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

const InterestCard = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  margin: 1rem;
  position: relative;
  width: 300px;
  height: 200px;

  a {
    appearance: none;
    border: none;
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    position: relative;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 95vw;
    display: block;

    &::before {
      height: 80%;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      content: "";
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.6) 90%);
      z-index: 1;
      border-radius: 24px;
    }

    img {
      display: block;
      height: 100%;
      object-fit: cover;
      border-radius: 24px;
    }
  }
`;

const InterestCardTitle = styled.span`
  position: absolute;
  bottom: 14px;
  left: 14px;
  text-align: left;
  color: #fff;
  font-weight: bold;
  font-size: 1.4rem;
  z-index: 2;
`;

interface InterestProps {
  interestsToShow?: string[];
  title?: string;
  disabledHeading?: boolean;
  showAll?: boolean;
}

const InterestCarousel: React.FC<InterestProps> = ({
  interestsToShow,
  disabledHeading,
  showAll,
  title,
}) => {
  const related = !interestsToShow ? null : getInterests(interestsToShow);
  return (
    <InterestCarouselWrapper>
      {disabledHeading ? null : (
        <JourneyHeading>
          <h2>{title || "Interest"}</h2>
          <p>
            Interested in something a little different? Have a look at these
            related interests
          </p>
        </JourneyHeading>
      )}
      <InterestCarouselContainer>
        {(showAll || !related ? interests : related).map((interest) => (
          <InterestCard key={Math.random().toString(36).substring(2, 7)}>
            <Link href={`/interests/${interest.slug}`} passHref>
              <a
                href="replace"
                title={`View journeys related to ${interest.title}`}
              >
                <Image
                  src={interest.thumbnail}
                  alt={interest.title}
                  layout="fill"
                />
                <InterestCardTitle>{interest.title}</InterestCardTitle>
              </a>
            </Link>
          </InterestCard>
        ))}
      </InterestCarouselContainer>
    </InterestCarouselWrapper>
  );
};

export { InterestCarousel };
