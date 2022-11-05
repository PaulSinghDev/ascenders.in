import { Section } from "@/components/Base/Section";
import { Gallery } from "@/components/Gallery/Gallery";
import { ImageCta } from "@/components/ImageCta/ImageCta";
import { HealBlock } from "@/components/HealBlock/HealBlock";
import styled from "styled-components";
import Meta from "@/components/Base/Meta";
import { Header, Text } from "../../components";

const HealWrapper = styled.main`
  header {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const HealSection = styled(Section)`
  margin-top: 0;
  margin-left: var(--margin-xl);
  margin-right: var(--margin-xl);
  @media screen and (min-width: 800px) {
    margin-left: calc(var(--margin-xl) * 2);
    margin-right: calc(var(--margin-xl) * 2);
  }
`;

const AboutHeal: React.FC = () => (
  <HealWrapper>
    <Meta
      title="About HEAL | Ascenders"
      description="About HEAL | Ascenders"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/about/heal`}
      favicon="/favicon.ico"
    />
    <Header pageType="info" heading="About HEAL" />
    <HealSection>
      <Text
        lines={[
          "The acronym H.E.A.L stand for Health, Earth, Adventure, Love; journeys that are based on learning to care for self-health and Earth's beauty.",
          "Ascenders' HEAL journeys cater to a wide range of interests, combining health, yoga, camping, trekking, wildlife, conservation. culture, sightseeing festivals and photography.",
          "Our highly skilled team members lead expeditions for small groups, private groups, families and solo travellers.",
        ]}
      />
    </HealSection>
    <Section>
      <HealBlock
        title="What is HEAL?"
        subtitle="The following are basic principles of the HEAL philosophy"
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
    </Section>
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
          tags: ["trekking", "camping"],
        },
        {
          src: "/assets/images/random/young-boy-laughing.jpeg",
          title: "An image",
          alt: "An alt",
          description: [
            "This is a description of this image",
            "This is a description of this image",
          ],
          tags: ["trekking", "camping"],
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
export default AboutHeal;
