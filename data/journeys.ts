type Journey = {
  title: string;
  interest: string[];
  duration: {
    value: number;
    measurement: "days" | "weeks";
  };
  type: string;
  description: string[];
  thumbnail: string;
  gallery?: string[];
  level:
    | "very easy"
    | "easy"
    | "easy to medium"
    | "medium"
    | "hard"
    | "very hard";
  id: string;
  group: {
    min: number;
    max: number;
  };
  location: {
    label: string;
  };
  price: {
    value: number;
    currency: "₹" | "$" | "£";
    from: number;
  };
};

const journeys: Journey[] = [
  {
    title: "Deoriatal Chandrashilla Trek",
    description: ["some words"],
    thumbnail:
      "/assets/images/journeys/thumbnails/ascenders-journeys-deoriatal-chandrashilla-trek.jpg",
    id: Math.random().toString(36).substring(2, 7),
    level: "easy to medium",
    duration: {
      value: 7,
      measurement: "days",
    },
    interest: ["trekking", "camping"],
    price: {
      from: 14990,
      value: 14990,
      currency: "₹",
    },
    group: {
      min: 2,
      max: 7,
    },
    location: { label: "Uttarakhand" },
    type: "Expedition",
  },
  {
    title: "Ali Bedni Bugyal",
    description: ["some words"],
    thumbnail:
      "/assets/images/journeys/thumbnails/ascenders-journeys-ali-bugyal-trek.jpg",
    id: Math.random().toString(36).substring(2, 7),
    level: "easy to medium",
    duration: {
      value: 7,
      measurement: "days",
    },
    type: "Expedition",
    interest: ["trekking", "camping"],
    price: {
      from: 16990,
      value: 16990,
      currency: "₹",
    },
    group: {
      min: 2,
      max: 7,
    },
    location: { label: "Uttarakhand" },
  },
  {
    title: "Kedarnath Yatra",
    description: ["some words"],
    thumbnail:
      "/assets/images/journeys/thumbnails/ascenders-journeys-kedarnath-yatra.jpg",
    id: Math.random().toString(36).substring(2, 7),
    level: "very easy",
    duration: {
      value: 5,
      measurement: "days",
    },
    interest: ["trekking", "camping"],
    price: {
      from: 14990,
      value: 14990,
      currency: "₹",
    },
    group: {
      min: 2,
      max: 7,
    },
    location: { label: "Uttarakhand" },
    type: "Spiritual",
  },
];
export { journeys };
