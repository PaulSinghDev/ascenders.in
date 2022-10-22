import { Interest } from "types/data.types";

const interests: Interest[] = [
  {
    slug: "trekking",
    id: Math.random().toString(36).substring(2, 7),
    title: "Trekking",
    description: [
      "The following journeys are for the long distance walkers out there.",
      "If you enjoy packing up a bag and just setting off into the unknown these journeys are for you.",
    ],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-trekking.jpeg",
  },
  {
    slug: "heal",
    id: Math.random().toString(36).substring(2, 7),
    title: "HEAL",
    description: [
      "The following journeys embody Ascenders' HEAL philosophy.",
      "These journeys will teach you how to HEAL yourself and the earth by providing you with workshops ranging from inner engineering to environmental awareness.",
    ],
    target: ["heal-conscious", "nature-aware"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-village-stay.jpeg",
  },
  {
    slug: "spirituality",
    id: Math.random().toString(36).substring(2, 7),
    title: "Spirituality",
    description: [
      "The following journeys are carefully selected for people whom are seeking a spiritual awakening.",
      "If you are seeking a close, more intimate, connection between your spiritual self and Mother Nature these are for you.",
    ],
    target: ["spiritual", "peaceful"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-wildlife.jpeg",
  },
  {
    slug: "adventure",
    id: Math.random().toString(36).substring(2, 7),
    title: "Adventure",
    description: [
      "The following journeys are hand picked for those people whom seek adventure at every turn.",
      "These journeys will seek to provide you with a taste of freedom like you have never experienced before.",
    ],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-yoga.jpeg",
  },
];
export { interests };
