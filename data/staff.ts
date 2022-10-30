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
      src: "/assets/images/staff/aditya-siwach.jpeg",
      alt: "Aditya in front of a mountainous backdrop",
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
      alt: "Shivam Summiter looking at the sky",
    },
    content: `Shivam specializes in spreading awareness of how people might affect the fragile ecology of the Himalayas through their irresponsible tourism.\n\n
He routinely visits Uttarkhand where he collaborates with local communities to raise awareness for sustainable tourism.\n\n
His prior studies included the extinction of various birds and animals due to various human acts.  He is on board with ascenders to join project HEAL.\n\n
Shivam credits his interest in wildlife and conservation to the nature television programmes he saw. He has also volunteered for various organizations such as WWF and savior. He has experience in subjects related to wildlife conservation.`,
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
      alt: "Portrait style photo of Nirvana",
    },
    content: `Nirvana has been hiking in the Himalayas since he was in high school. He has always sought the peace and tranquility of the natural landscape.\n\n
Nirvana began his career as a trek leader here at Ascenders. He loves the outdoors because of his love of both people and the environment.\n\n
Nirvana has completed a number of tours throughout multiple states including Himachal Pradesh, as well as completing tours in the Garhwal Himalayas.\n\n
He has a strong connection to Ascenders’ vision. He loves taking people on expeditions. He also enjoys spending time with his pets, reading, and watching funny shows besides mountaineering.\n\n`,
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
      alt: "Saurav Yadav with a cat on his shoulder",
    },
    content: `Saurav Yadav is a photographer, and designer. He also highlights the importance of protecting endangered animals and habitats in India.He holds a degree in Photography from AAFT, Noida.\n\n
His visits to the Himalayas changed the way he looked at the world. He holds many certificates for capturing great wildlife and nature photographs.\n\n
You may encounter him during your Himalayan journeys. He is passionate about teaching Photography to travelers. He wants to make an impact through meaningful photography.\n\n
If you are lucky enough to be on a journey with Saurav be sure to ask him for some photography tips. He is always happy to help people where he can.`,
  },
  {
    name: "Priyanshu Ruhela",
    slug: "priyanshu-ruhela",
    interests: [interests[0]],
    favourites: {
      destination: destinations[0],
      journey: "kedarnath-yatra",
    },
    role:
      staffRoles.find((role) => /nursing-assistant/.test(role.id)) ||
      staffRoles[0],
    image: {
      src: "/assets/images/staff/priyanshu-ruhela.jpg",
      alt: "Priyanshu sat on a mountain side",
    },
    content: `He is a native of Uttar Pradesh and has taken over 100 mountain journeys both by cycle and on foot.\n\n
When he first began climbing mountains, he quickly realised how much of an influence nature had on him.\n\n
His mind and soul were at rest when he found himself in nature. He became more essential than ever with each mountain he climbed.\n\n
He has felt a responsibility to preserve and defend nature ever since. He has joined Ascenders as a result of this emotion.
\n\n
He holds a certificate in nursing assistance and accompanies high-altitude Himalayan journeys.\n\n`,
  },
  {
    name: "Gaurav Chaudhary",
    slug: "gaurav-chaudhary",
    interests: [interests[0]],
    favourites: {
      destination: destinations[0],
      journey: "kedarnath-yatra",
    },
    role:
      staffRoles.find((role) => /journey-guide/.test(role.id)) || staffRoles[0],
    image: {
      src: "/assets/images/staff/gaurav-chaudhary.jpg",
      alt: "Gaurav sat with his arms crossed",
    },
    content: `He is young, vibrant, and full of life.\n\n
His journey to a high-altitude lake in Uttarakhand in 2019 pulled him into the heart of the Himalayas.\n\n
Throughout those years, he has been trekking in the Garhwal region of Uttarkhand and has been fascinated by its traditions and way of life.\n\n
He is currently pursuing a master's degree in Mathematics and has a deep understanding of how education makes a difference in an individual's life.\n\n
It is a shared goal between ascenders and Gaurav to provide free education to underprivileged children, something he will be working towards in the future. `,
  },
  {
    name: "Gunjan Mahalwal",
    slug: "gunjan-mahalwal",
    interests: [interests[0]],
    favourites: {
      destination: destinations[0],
      journey: "kedarnath-yatra",
    },
    role:
      staffRoles.find((role) => /social-media-manager/.test(role.id)) ||
      staffRoles[0],
    image: {
      src: "/assets/images/staff/gunjan-mahalwal.jpg",
      alt: "Gunjan sat in a meditative pose",
    },
    content: `Gunjan got attracted recently to spiritual life and a mind-body connection.\n\n
She developed a fascination for Yoga throughout her time in college and, after graduating, made the decision to pursue certification as a yoga instructor.\n\n
It took her a few years before he began practicing Hatha Yoga and she fell in love with its flexibility, elegance, and contemplative elements.\n\n
She had no desire to instruct yoga classes. She desired to fully commit to training in order to develop her skill. She had no idea that the cosmos had different ideas.\n\n
She has been studying with many well-known teachers, and she is always acquiring new knowledge and deepening her comprehension of this lifelong practice by taking classes from some of her most respected and important instructors in New Delhi.\n\n`,
  },
  {
    name: "Sikha Sharma",
    slug: "sikha-sharma",
    interests: [interests[0]],
    favourites: {
      destination: destinations[0],
      journey: "kedarnath-yatra",
    },
    role:
      staffRoles.find((role) => /social-media-manager/.test(role.id)) ||
      staffRoles[0],
    image: {
      src: "/assets/images/staff/sikha-sharma.jpeg",
      alt: "Sikha standing in front of some flowers",
    },
    content: `At Ascenders, Sikha manages social media accounts.Her responsibilities include creating creative media content.\n\n
Mumbai is her hometown. A bachelor's degree in dental Surgeon is on the horizon for her. A connection was immediately formed between her and Ascenders after she discovered us online.\n\n
Sikha has been exploring western ghats since the age of 15. Kedarnath yatra was her first venture into the Himalayas.\n\n
Having a great love for the mountains, Sikha has joined Ascenders with the shared mission of spreading consciousness.\n\n
The spiritual experiences she has had in the Himalaya have left a lasting impression on her, and she hopes to transform the lives of many people through her work.\n\n`,
  },
];

export { staff };
