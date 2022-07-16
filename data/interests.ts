type Interest = {
  title: string;
  description: string[];
  target: string[];
  thumbnail: string;
  gallery?: string[];
  level: "small" | "medium" | "large";
  id: string;
};

const interests: Interest[] = [
  {
    title: "Expeditions",
    description: ["some words"],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-expeditions.jpeg",
    level: "medium",
    id: Math.random().toString(36).substring(2, 7),
  },
  {
    title: "Festivals",
    description: ["some words"],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-festivals.jpeg",
    level: "large",
    id: Math.random().toString(36).substring(2, 7),
  },
  {
    title: "History & Archaeology",
    description: ["some words"],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-history-archaeology.jpeg",
    level: "small",
    id: Math.random().toString(36).substring(2, 7),
  },
  {
    title: "Photography",
    id: Math.random().toString(36).substring(2, 7),
    description: ["some words"],
    level: "small",
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-photography.jpeg",
  },
  {
    title: "Relaxation",
    id: Math.random().toString(36).substring(2, 7),
    level: "medium",
    description: ["some words"],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-relaxation.jpeg",
  },
  {
    title: "Sightseeing",
    id: Math.random().toString(36).substring(2, 7),
    level: "large",
    description: ["some words"],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-sightseeing.jpeg",
  },
  {
    level: "small",
    id: Math.random().toString(36).substring(2, 7),
    title: "Surfing",
    description: ["some words"],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-surfing.jpeg",
  },
  {
    level: "medium",
    id: Math.random().toString(36).substring(2, 7),
    title: "Trekking",
    description: ["some words"],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-trekking.jpeg",
  },
  {
    level: "medium",
    id: Math.random().toString(36).substring(2, 7),
    title: "Village Stay",
    description: ["some words"],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-village-stay.jpeg",
  },
  {
    level: "medium",
    id: Math.random().toString(36).substring(2, 7),
    title: "Wildlife",
    description: ["some words"],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-wildlife.jpeg",
  },
  {
    level: "large",
    id: Math.random().toString(36).substring(2, 7),
    title: "Yoga",
    description: ["some words"],
    target: ["fit", "adventurous"],
    thumbnail:
      "/assets/images/interests/thumbnails/ascenders-interests-yoga.jpeg",
  },
];
export { interests };
