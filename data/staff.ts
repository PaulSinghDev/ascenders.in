import { Staff } from "types";
import { destinations } from "./destinations";
import { interests } from "./interests";
import { staffRoles } from "./staffRoles";

const staff: Staff[] = [
  {
    name: "Shantanu Chaudhary",
    alias: "Sean",
    slug: "shantanu-chaudhary",
    role: staffRoles.find((role) => /founder/.test(role.id)) || staffRoles[0],
    interests: [interests[0]],
    favourites: {
      destination: destinations[0],
      journey: "kedarnath-yatra",
    },
    image: {
      src: "/assets/images/staff/shantanu-chaudhary.jpg",
      alt: "Some bloke",
    },
    content: `Back in 2011, a breathtaking and close encounter with nature in the terrifying Himalayan wilderness captivated him both deeply and primitively. At the same time, the issues regarding environmental health, wildlife extinction, and irresponsible tourism disheartened him.\n\n
After quitting college, he began concentrating on such topics. He continued to travel and develop the HEAL concept.\n\n
Through HEAL journeys, he aims to introduce health-conscious, Earth-conscious, Adventurous and loving journeys for travelers. He aims to advance, strengthen, and enhance community livelihoods through environmentally sound methods.\n\n
In rural villages in Uttarakhand, he has started to deliver HEAL journeys. His eventual objective is to promote conscious living. He will share the insights he's acquired from years of exploring and learning about India. His counsel on travelling mindfully is insightful.`,
  },
  {
    name: "Aditya Siwach",
    alias: "aditya",
    slug: "aditya-siwach",
    interests: [interests[0]],
    favourites: {
      destination: destinations[0],
      journey: "kedarnath-yatra",
    },
    role: staffRoles.find((role) => /founder/.test(role.id)) || staffRoles[0],
    image: {
      src: "/assets/images/staff/shantanu-chaudhary.jpg",
      alt: "Some bloke",
    },
    content: `He is a keen naturalist and conservationist. He always had a passion for animals and had every intention of becoming a traveller/naturalist as a child, but that never transpired. Instead, he spent 8 years working in the HRD ministry before leaving. Took a pause and ventured into the mountains with his younger brother, Shantanu.\n\n
A conversation on the top of a high-altitude mountain peak opened a pathway for a dream that is today Ascenders.\n\n
He feels strongly about issues related to the preservation and protection of endangered species. specifically Indian species like lion-tailed macaques, snow leopards, and flying foxes. His time spent in the Himalayas drove him to develop ascenders and provide travelers with interesting travel experiences.`,
  },
  {
    name: "Shivam Summiter",
    slug: "shivam-summiter",
    interests: [interests[0]],
    favourites: {
      destination: destinations[0],
      journey: "kedarnath-yatra",
    },
    role:
      staffRoles.find((role) => /journey-guide/.test(role.id)) || staffRoles[0],
    image: {
      src: "/assets/images/staff/shivam-summiter.jpg",
      alt: "Some bloke",
    },
    content: ``,
  },
  {
    name: "Nirvana Ashish",
    slug: "nirvana-ashish",
    interests: [interests[0]],
    favourites: {
      destination: destinations[0],
      journey: "kedarnath-yatra",
    },
    role:
      staffRoles.find((role) => /journey-guide/.test(role.id)) || staffRoles[0],
    image: {
      src: "/assets/images/staff/nirvana-ashish.jpg",
      alt: "Some bloke",
    },
    content: ``,
  },
  {
    name: "Saurav Yadav",
    slug: "saurav-yadav",
    interests: [interests[0]],
    favourites: {
      destination: destinations[0],
      journey: "kedarnath-yatra",
    },
    role:
      staffRoles.find((role) => /photographer/.test(role.id)) || staffRoles[0],
    image: {
      src: "/assets/images/staff/saurav-yadav.jpg",
      alt: "Some bloke",
    },
    content: ``,
  },
];

export { staff };
