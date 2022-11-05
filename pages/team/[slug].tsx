import { Header } from "@/components/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import { Staff } from "types/data.types";
import { staff } from "data/staff";
import Image from "next/image";
import { Section } from "@/components/Base/Section";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { journeys } from "data";
import { JourneysCarousel } from "@/components/JourneysCarousel/JourneysCarousel";
import Meta from "@/components/Base/Meta";

interface TeamMemberPageProps extends Staff {}

const PersonCard = styled.div`
  background-color: var(--light-grey);
  padding: var(--padding-md);
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-wrap: wrap;
  margin: var(--margin-xl);
  align-self: flex-start;
  flex-grow: 1;
  max-width: 600px;
  margin-top: 0;

  @media screen and (min-width: 1256px) {
    position: sticky;
    top: 70px;
    margin-top: calc(var(--margin-xl) * 2);
  }
`;

const ImageWrapper = styled.picture`
  display: block;
  overflow: hidden;
  position: relative;
  width: 50%;
  height: 200px;
  border-radius: var(--border-radius-lg);
  flex-grow: 1;
  flex-basis: 200px;
  img {
    object-fit: cover;
    display: block;
  }
`;

const MetaWrapper = styled.div`
  margin: var(--margin-lg);
  width: 40%;
  flex-grow: 1;
  flex-basis: 200px;
`;

const MetaInfo = styled.div`
  display: flex;
  > span {
    display: inline-block;
  }
  > span:nth-child(odd) {
    width: 40%;
    font-weight: bold;
    margin-right: 8px;
  }
  > span:nth-child(even) {
    width: 60%;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: var(--blue);
    text-decoration-thickness: 3px;
    transition: 0.3s ease;
    &:hover {
      background-color: var(--blue);
      color: var(--light);
    }
  }
`;

const TeamMemberSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > header {
    width: 100%;
    flex-basis: 100%;
    max-width: 100%;
    display: block;
    @media screen and (min-width: 1258px) {
      display: none;
    }
  }
  @media screen and (min-width: 800px) {
    margin: calc(var(--margin-xl) * 4) var(--margin-xl);
  }
`;

const JourneySection = styled(Section)`
  display: inline-flex;
  margin: auto;
  max-width: 100%;
  @media screen and (min-width: 800px) {
    margin: auto var(--margin-xl);
  }
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  margin: var(--margin-xl);
  flex-shrink: 1;
  > header {
    width: 100%;
    flex-basis: 100%;
    display: none;
    @media screen and (min-width: 1258px) {
      display: block;
    }
  }

  > p {
    font-size: 16px;
    color: var(--dark-blue);
    line-height: 1.9;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const TeamMemberPage: React.FC<TeamMemberPageProps> = ({
  name,
  role,
  image,
  content,
  favourites,
  interests,
  slug,
}) => {
  const memberJourneys = journeys.filter((journey) =>
    journey.staff.find((member) => member.slug === slug)
  );

  return (
    <Main role="main">
      <Meta
        title={`About ${name} | ${role.label} | Staff | Ascenders | Go Beyond | H.E.A.L`}
        description={`About ${name} | ${role.label} | Staff | Ascenders | Go Beyond | H.E.A.L`}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/team/${slug}`}
        favicon="/favicon.ico"
      />
      <TeamMemberSection>
        <Header pageType="info" heading={name} />
        <PersonCard>
          <ImageWrapper>
            <Image src={image.src} layout="fill" alt={`Image of ${name}`} />
          </ImageWrapper>
          <MetaWrapper>
            <MetaInfo>
              <span>Top Place:</span>
              <span>
                <Link
                  href={`/destinations/${favourites.destination.slug}`}
                  title={`Read about ${favourites.destination.title}`}
                >
                  {`${favourites.destination.title}`}
                </Link>
              </span>
            </MetaInfo>
            <MetaInfo>
              <span>Top Trip:</span>
              <span>
                <Link
                  href={`/journeys/${favourites.journey}`}
                  title={`Read about ${
                    journeys.find(
                      (journey) => journey.slug === favourites.journey
                    )?.title
                  }`}
                >
                  {`${
                    journeys.find(
                      (journey) => journey.slug === favourites.journey
                    )?.title
                  }`}
                </Link>
              </span>
            </MetaInfo>
            <MetaInfo>
              <span>Interests:</span>
              <span>
                {interests.map((i) => (
                  <Link
                    key={Math.random().toString(36).substring(2, 9)}
                    href={`/interests/${i.slug}`}
                    title={`View journeys related to ${i.title}`}
                  >
                    {i.title}
                  </Link>
                ))}
              </span>
            </MetaInfo>
          </MetaWrapper>
        </PersonCard>
        <ContentWrapper>
          <Header pageType="info" heading={name} />
          <ReactMarkdown>{content}</ReactMarkdown>
        </ContentWrapper>
      </TeamMemberSection>
      <JourneySection>
        {memberJourneys.length > 0 ? (
          <JourneysCarousel
            title={`Journeys with ${name}`}
            overrideJourneys={memberJourneys}
            description={[
              `The following journeys have ${name} listed as a member of the team which is travelling on it.`,
              "While we aim to stick to the listed guides please note that the team members on any trip may change.",
            ]}
          />
        ) : (
          <JourneysCarousel
            description={[
              "Have a browse of our available journeys. All of our journeys are staffed with highly trained trek leaders.",
            ]}
          />
        )}
      </JourneySection>
    </Main>
  );
};

export default TeamMemberPage;

// Generate all our static paths using our destinations and their slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const output = {
    paths: staff.map((person) => ({
      params: { slug: person.slug },
    })),
    fallback: false,
  };
  return output;
};

// Generate the static props to pass to the page component
export const getStaticProps: GetStaticProps = async (context) => {
  const staffObject = staff.find(
    (person) => person.slug === context?.params?.slug
  );

  // No object so we don't need props for now
  if (!staffObject) {
    return {
      props: {},
    };
  }
  // Got object so pass it down as a prop
  return {
    props: {
      ...staffObject,
    },
  };
};
