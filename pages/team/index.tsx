import { Header } from "components/Header";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { staff } from "data/staff";

const DestinationsWrapper = styled.div`
  padding: var(--padding-lg);
  display flex;
  max-width: 100%;
  overflow: auto;

`;

const DestinationCard = styled.div`
  border-radius: var(--border-radius-md);
  overflow: hidden;
  background-color: var(--light);
  max-width: 90%;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
  margin: 14px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  display: block;
  position: relative;
  width: 90%;
  max-width: 500px;
  min-width: 180px;
  height: 300px;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    color: var(--light);
    font-weight: bold;
    font-size: 24px;

    &:hover {
      > span:first-of-type {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      > span:last-of-type {
        opacity: 1;
        transition-delay: 0.3s;
      }
      &::before {
        opacity: 1;
      }
    }

    > span {
      font-size: 16px;
      position: absolute;
      z-index: 2;
      transition: 0.3s ease;
      text-align: center;
      white-space: nowrap;

      &:first-of-type {
        display: inline-flex;
        align-items: center;
        top: calc(100% - 3rem);
        left: 1rem;
        background-color: var(--blue);
        padding: 0 var(--padding-sm);
        border-radius: 5px;

        > span {
          font-weight: normal;
          margin-left: 8px;
        }
      }

      &:last-of-type {
        transition-delay: 0s;
        top: calc(50% + 36px);
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: normal;
        opacity: 0;
      }
    }

    &::before {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.8);
      content: "";
      position: absolute;
      opacity: 0;
      transition: 0.3s ease;
    }
  }
`;

const DestinationsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
`;

const OurTeam: React.FC<{}> = () => (
  <main role="main">
    <Head>
      <title>Our Team | Ascenders</title>
      <meta name="description" content="Our Team | Ascenders" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header
      pageType="info"
      heading="Our Team"
      subheading="Please carefully read the following information which relates to our privacy policy."
    />
    <DestinationsWrapper>
      <DestinationsGrid>
        {staff.map((person) => (
          <DestinationCard key={Math.random().toString(36).substring(2, 7)}>
            <Image
              src={person.image.src}
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <Link href={`/team/${person.slug}`} passHref>
              <a href={`/team/${person.slug}`}>
                <span>{person.name}</span>
                <span>Click for more info</span>
              </a>
            </Link>
          </DestinationCard>
        ))}
      </DestinationsGrid>
    </DestinationsWrapper>
  </main>
);

export default OurTeam;
