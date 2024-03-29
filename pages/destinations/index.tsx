import { Header } from "@/components/Header";
import { destinations } from "data/destinations";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { getRelatedJourneys } from "services/journey.service";
import Meta from "@/components/Base/Meta";

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

const DestinationsPage: React.FC = () => (
  <main role="main">
    <Meta
      title="Destinations | Ascenders"
      description="Destinations | Ascenders"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/destinations`}
      favicon="/favicon.ico"
    />
    <Header
      pageType="info"
      heading="All Destinations"
      subheading="For travellers looking to get fully immersed in the lap of the might Himalayas, our hiking expeditions offer the ultimate opportunity to get exposed to this heal-loaded self transformative voyage. The gateway to epic hikes, survival, uncertainty, fun and rest. Let's go!"
    />
    <DestinationsWrapper>
      <DestinationsGrid>
        {destinations.map((destination) => {
          const relatedArticles = getRelatedJourneys([], destination);
          return (
            <DestinationCard key={Math.random().toString(36).substring(2, 7)}>
              <Image
                src={destination.thumbnail.src}
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <Link href={`/destinations/${destination.slug}`} passHref>
                <a href={`/destinations/${destination.slug}`}>
                  <span>
                    {destination.title}
                    <span>({relatedArticles.length})</span>
                  </span>
                  <span>Click for more info</span>
                </a>
              </Link>
            </DestinationCard>
          );
        })}
      </DestinationsGrid>
    </DestinationsWrapper>
  </main>
);

export default DestinationsPage;
