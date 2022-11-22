import { Section } from "@/components/Base/Section";
import { Gallery } from "@/components/Gallery/Gallery";
import { ImageCta } from "@/components/ImageCta/ImageCta";
import { HealBlock } from "@/components/HealBlock/HealBlock";
import styled from "styled-components";
import Meta from "@/components/Base/Meta";
import { GalleryImage } from "@/types/data.types";
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

const gallery: GalleryImage[] = [
  {
    title: "Self-Enhancement",
    src: "/assets/images/galleries/heal-page/yoga.jpg",
    tags: ["spirituality", "meditation"],
    alt: "A person sat in a meditative pose",
    description: [
      "Most of us have lost the flexibility of our muscles and minds that once existed. Fear, anger, and hatred have become normal experiences that prevent us from finding bliss. A HEAL journey consists of yoga and self-enhancement programs that facilitate the process of reshaping one's existence.",
    ],
  },
  {
    title: "Involvement",
    src: "/assets/images/galleries/heal-page/girl-in-nature.jpg",
    tags: ["spirituality", "meditation"],
    alt: "A lady standing next to a tree",
    description: [
      "All of us are born of Earth/Mitti, the common mother. Half of our life is hung on trees that provide oxygen. Today, Both Self-health and environmental health are at stake. Artificial gaps between the soil and us have exacerbated the situation even further. In HEAL journeys get you involved with the soil again.",
    ],
  },
  {
    title: "Consumption",
    src: "/assets/images/galleries/heal-page/orange-tree.jpg",
    tags: ["spirituality", "meditation"],
    alt: "A lady smelling a growing mango",
    description: [
      "Food affects your mind and body in a similar manner to how thought does. In other words, it is a fuel that powers both the body and the mind and determines how we function. The sattvic food offered in HEAL journeys calms the mind, energizes the body, and provides an intense feeling of well-being.",
    ],
  },
  {
    title: "Boundlessness",
    src: "/assets/images/galleries/heal-page/mountain-ridge.jpg",
    tags: ["spirituality", "meditation"],
    alt: "A person hanging from a natural ledge",
    description: [
      "Your house is merely a limited space that is fixed in a particular place in a vast universe. Houses are necessary, but existence demands growth every day and requires the breaking of narrow spaces. When you live with the sky as your roof, the lap of the Himalayas as your bed and the forest's frightening silence as your song, the expansion of life is immediately felt.",
    ],
  },
  {
    title: "Uncertainty",
    src: "/assets/images/galleries/heal-page/jungle-trekking.jpg",
    tags: ["spirituality", "meditation"],
    alt: "A person hiking in a field",
    description: [
      "A predictable life is boring, which adds to the stress and permanent dullness. On the other hand, uncertainty creates equations of thrill that keep life interesting. There is a pathless wilderness in the vastness of the Himalayas to start the thriller and overcome a boring, and fearful life. ",
    ],
  },
  {
    title: "Togetherness",
    src: "/assets/images/galleries/heal-page/togetherness.jpg",
    tags: ["spirituality", "meditation"],
    alt: "Two people sat on a ledge",
    description: [
      "A rope is stronger than a single thread. Unity makes life stronger and more spectacular. Our journeys offer you a chance to open your life up to new experiences that broaden your horizons.",
    ],
  },
  {
    title: "Festivity",
    src: "/assets/images/galleries/heal-page/natural-hut.jpg",
    tags: ["spirituality", "meditation"],
    alt: "A lady next to a traditional hut",
    description: [
      "Our HEAL journeys are rooted in traditions, history, culture, food, and festivals of India, such as Diwali, Holi, Shivratri, and Navratra. One feels inspired while discovering the ancient wisdom and meaningful traditions passed down from generation to generation.",
    ],
  },
];

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
    <Gallery images={gallery} />
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
