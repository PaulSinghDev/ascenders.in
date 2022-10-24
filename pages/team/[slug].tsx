import { Header } from "@/components/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import { Staff } from "types/data.types";
import Head from "next/head";
import { staff } from "data/staff";
import Image from "next/image";
import { Section } from "@/components/Base/Section";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { journeys } from "data";

interface TeamMemberPageProps extends Staff {}

const PersonCard = styled.div`
  background-color: var(--light-grey);
  padding: var(--padding-md);
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.picture`
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  width: 200px;
  height: 200px;
  border-radius: var(--border-radius-lg);
  flex-grow: 1;
  img {
    object-fit: cover;
    display: block;
  }
`;

const MetaWrapper = styled.div`
  margin: var(--margin-lg);
  flex-grow: 1;
`;

const MetaInfo = styled.div`
  display: flex;
  > span {
    display: inline-block;
  }
  > span:nth-child(odd) {
    width: 40%;
    font-weight: bold;
  }
  > span:nth-child(even) {
    width: 60%;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const TeamMemberPage: React.FC<TeamMemberPageProps> = ({
  name,
  role,
  image,
  content,
  favourites,
  interests,
}) => (
  <main role="main">
    <Head>
      <title>{`About ${name} | ${role.label} | Staff | Ascenders | Go Beyond | H.E.A.L`}</title>
      <meta
        name="description"
        content={`About ${name} | ${role} | Staff | Ascenders | Go Beyond | H.E.A.L`}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header pageType="info" heading={name} />
    <Section>
      <PersonCard>
        <ImageWrapper>
          <Image src={image.src} layout="fill" alt={`Image of ${name}`} />
        </ImageWrapper>
        <MetaWrapper>
          <MetaInfo>
            <span>Name:</span>
            <span>{`${name}`}</span>
          </MetaInfo>
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
    </Section>
    <Section>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Section>
  </main>
);

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
