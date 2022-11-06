import { Destination } from "../types";

export const destinations: Destination[] = [
  {
    title: "Uttarakhand",
    slug: "uttarakhand",
    description: [
      "Uttarakhand is a state in Northern India. It is where the Himalayan mountain range starts and is also a state in which the Ganga flows.",
    ],
    thumbnail: {
      src: "/assets/images/galleries/uttarakhand/snow-fields-mountain-top.jpg",
      alt: "Trail of footsteps in a snow field on a mountain top",
    },
    mapData: {
      tooltip: "Meet us at Rishikesh Bus Stand",
      lng: 30.11266,
      lat: 78.2943,
      zoom: 17,
    },
  },
];
