import { Gallery } from "@/components/Gallery/Gallery";
import { ImageCta } from "@/components/ImageCta/ImageCta";
import { JourneyHealBlock } from "@/components/JourneyHealBlock/JourneyHealBlock";
import Head from "next/head";
import styled from "styled-components";
import { getIcon } from "utils/getIcon";
import { Header, Text } from "../components";

const HealWrapper = styled.main``;

const HealLogoWrapper = styled.div`
  margin-top: calc(var(--margin-xl) * 2);
  > span {
    margin: var(--margin-md) 0;
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    text-align: center;
    color: var(--dark-green);
  }
`;

const HealLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    max-width: 200px;
    max-height: 100px;
  }
`;

const HealJourneys: React.FC = () => {
  console.log("yo");

  return (
    <HealWrapper>
      <Head>
        <title>Ascenders | H.E.A.L | HEAL Journeys</title>
        <meta name="description" content="Ascenders | H.E.A.L" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        pageType="plp"
        type="hero"
        heading="HEAL Journeys"
        subheading="Discover our HEAL journeys"
        backgroundUrl="/assets/images/random/young-boy-laughing.jpeg"
      />
      <HealLogoWrapper>
        <HealLogo>{getIcon("heal")}</HealLogo>
        <span>Journeys</span>
      </HealLogoWrapper>
      <Text
        lines={[
          "The acronym H.E.A.L stand for Health, Earth, Adventure, Love; journeys that are based on learning to care for self-health and Earth's beauty.",
          "Ascenders' HEAL journeys cater to a wide range of interests, combining health, yoga, camping, trekking, wildlife, conservation. culture, sightseeing festivals and photography.",
          "Our highly skilled team members lead expeditions for small groups, private groups, families and solo travellers.",
        ]}
      />
      <JourneyHealBlock
        heal={{
          h: {
            title: "HEALTH",
            copy: [
              "Hatha yoga",
              "Dhanya classes",
              "Sattvic food",
              "Ayurveda lectures",
              "Enrichment programs",
            ],
          },
          e: {
            title: "EARTH",
            copy: [
              "Exploration and conservation of EArth's beauty",
              "Environmental awareness",
            ],
          },
          a: {
            title: "ADVENTURE",
            copy: [
              "Camping",
              "trekking",
              "Photography",
              "Homestay",
              "Himalayan Life",
            ],
          },
          l: {
            title: "LOVE",
            copy: [
              "A loving journey full of festivities",
              "Celebrations",
              "Togetherness",
            ],
          },
        }}
      />
      <Gallery
        images={[
          {
            src: "/assets/images/random/young-boy-laughing.jpeg",
            title: "An image",
            alt: "An alt",
            description: [
              "This is a description of this image",
              "This is a description of this image",
            ],
            interest: ["trekking", "camping"],
          },
          {
            src: "/assets/images/random/young-boy-laughing.jpeg",
            title: "An image",
            alt: "An alt",
            description: [
              "This is a description of this image",
              "This is a description of this image",
            ],
            interest: ["trekking", "camping"],
          },
        ]}
      />
      <ImageCta
        title="Life changing journeys"
        backgroundImg="/assets/images/journeys/para-glide.jpg"
        alt="People paragliding"
        cta={{
          href: "/journeys",
          label: "See Journeys",
          title: "See journeys",
        }}
      />
    </HealWrapper>
  );
};
export default HealJourneys;
