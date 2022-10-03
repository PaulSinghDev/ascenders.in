import { Journey } from "types/data.types";
import { staff } from "data/staff";

const journeys: Journey[] = [
  {
    title: "Deoria Tal Chandrashila Trek",
    description: [
      "Trek through flower laden forests and over snow capped mountains while completing a trek through Deoria Tal Chandrashila.",
      "While here you will find yourself in a space which rewarding both physically and mentally.",
      "You will spend you nights in a variety of accommodations including homestays and campsites. ",
    ],
    tagline: "Soak up the spirituality",
    slug: "deoria-tal-chandrashilla-trek",
    thumbnail:
      "/assets/images/journeys/thumbnails/ascenders-journeys-deoriatal-chandrashilla-trek.jpg",
    id: Math.random().toString(36).substring(2, 7),
    level: {
      min: "easy",
      max: "medium",
    },
    duration: {
      value: 7,
      measurement: "days",
    },
    gallery: [
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/sari-village.jpg",
        title: "Sari Village",
        interest: ["trekking", "sightseeing"],
        alt: "Green fields within a mountain range",
        description: [
          "This is where the adventuresome HEAL journey begins - Sari village.",
          "Nestled at the top of the village, our base camp is beautiful.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/devariya-lake-trek.jpg",
        interest: ["trekking", "sightseeing"],
        title: "Devariya Lake Trek",
        alt: "A bustling green forest on the Devariya Lake path",
        description: [
          "We will ascend from a woodland path surrounded by rhododendrons and maple trees to the lake.",
          "It is going to be a smooth day with a sluggish climb on a well-laid rocky path.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/devariya-tal.jpg",
        interest: ["trekking", "sightseeing"],
        title: "Devariya Tal Lake",
        alt: "Teh Devariya Tal lake with a field beside it",
        description: [
          "A beautiful lake set amidst meadows and framed by Chaukhamba peaks awaits you after approximately two hours of hiking.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/devariya-tal-2.jpg",
        interest: ["trekking", "sightseeing"],
        title: "Devariya Tal Lake",
        alt: "Teh Devariya Tal lake surrounded by trees",
        description: [
          "The different vantage point of Devariya tal from the opposite side of regular entry.",
          "This particular image is of monsoon season.",
          "Take in the lush green meadow and let it soak up your senses.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/devariya-tal-3.jpg",
        interest: ["trekking", "sightseeing"],
        title: "Devariya Tal Lake",
        alt: "Teh Devariya Tal lake shot from an angle showing mountain tips in the background",
        description: [
          "Devariya Tal in winter season.",
          "In snow, the trek becomes a bit more challenging, but still enjoyable.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/rohini-bugyal.jpg",
        interest: ["trekking", "sightseeing"],
        title: "Rohini Bugyal",
        alt: "A person sat on top of a stone which is on top of the Rohini Bigyal mountain",
        description: [
          "Discover remarkable jungles and hike through alpine meadows in search of wildlife.",
          "Encounter birds and species along the way. ",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/chopta.jpg",
        interest: ["trekking", "sightseeing", "mountains"],
        title: "Chopta",
        alt: "A person walking in a deep snowy path",
        description: [
          "The experience of taking a journey in winter season is unique.",
          "Seasons offer different tastes, but the final result is a renewed sense of self.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/tungnath-winter-trek.jpg",
        interest: ["trekking", "sightseeing", "mountains", "snow"],
        title: "Tungnath Winter Trek",
        alt: "A deep snowy path in the mountains",
        description: [
          "The experience of taking a journey in winter season is unique.",
          "Seasons offer different tastes, but the final result is a renewed sense of self.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/tungnath-temple.jpg",
        interest: ["trekking", "sightseeing", "mountains", "snow", "temples"],
        title: "Tunganth Temple",
        alt: "A snow covered Tungnath temple with a person standing next to it",
        description: [
          "a very popular Shiva temple, is a featured stop on this amazing journey.",
          "This place is infused with spiritual energy, as well as lush greenery that surrounds it.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/chandrashilla-peak.jpg",
        interest: ["trekking", "sightseeing", "mountains", "snow", "sunrise"],
        title: "Chandrishila Peak",
        alt: "The sun rising over the horizon while a person looks at it over the mountain peak",
        description: [
          "Above Tungnath temple lies he peak offers 360-degree views of the snow-laden Himalayas upon reaching its summit.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/pathless-descent.jpg",
        interest: ["trekking", "sightseeing", "mountains"],
        title: "Pathless Descent",
        alt: "A person walking down a pathless trail",
        description: [
          "A leisurely downhill descent within a generous cover of forest will get your heart racing with excitement as it has no path but you will leave one behind.",
          "Silence is audible here.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/shaneshwar-temple.jpg",
        interest: ["trekking", "sightseeing", "temples"],
        title: "Shaneshwar Temple",
        alt: "A temple made with old large stones",
        description: [
          "This place is infused with spiritual energy, as well as lush greenery that surrounds it.",
          "This rock-cut temple contains ancient sculptures of gods and goddesses.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/deoria-tal-chadrishila/rishikesh-ganga.jpg",
        interest: ["trekking", "sightseeing", "rivers"],
        title: "Rishikesh Ganga",
        alt: "Large stones by the side of the river Ganga",
        description: [
          "A crowdy mountainous city can be explored at the last day of your journey.",
          "This is Rishikesh.",
        ],
      },
    ],
    interest: ["trekking", "HEAL"],
    overviewBullets: [
      "Ascend Devariya Tal set amidst elevated alpine meadows",
      "Explore the geological wonderland, Kedarnath Musk Deer Sanctuary",
      "Seek blessings from Tungnath temple which is dedicated to Shiva",
      "Experience Chandrashilla peak",
      "Behold the glory of Shaneshwar Temple",
    ],
    price: {
      from: 15990,
      value: 15990,
      currency: "₹",
      measurement: "person",
    },
    group: {
      min: 5,
      max: 12,
      measurement: "people",
    },
    location: { label: "Uttarakhand" },
    type: "Expedition",
    itinerary: {
      title: "Itinerary",
      description: [
        "Read through our in depth, day-by-day breakdown of the Deoria Tal Chandrashila trek.",
        "The following information is meant as a rough guide and we may need to vary from this due to a variety of reasons.",
      ],
      days: [
        {
          day: 1,
          title: "Day 1: Head to Sari",
          content: `### Pickup \n
We will pick you up from Rishikesh at 5:30 AM. So make sure you get a good rest the night before. \n
You'll pass through forests, fields of blooming rhododendrons, and waterfalls as you make your way up to Sari, the base camp of this journey. \n
### Welcome to Sari Village. \n
When you arrive in Saru you will get the chance to settle into our eco-lodge and relax. You’ll get a chance to mingle with other travelers and explore the local village.\n
### In the evening \n
We will have a relaxed evening and enjoy a welcome dinner together. Afterwards, we'll head out on an evening walk through the village. \n
For the rest of the evening we will relax, take a chance to unwind and spend some quality time together as a group. \n`,
          meals: ["dinner"],
        },
        {
          meals: ["breakfast", "lunch", "dinner"],
          day: 2,
          title: "Day 2: Devariya Tal",
          content: `### Wake up, early \n
Wake up early and get a refresh for the day. After Yoga and breakfast, you will embark on your guided adventure to explore the region. \n
A lovely woodland path full of rhododendron and maple trees will be our first ascend of the journey to reach a lake associated with the epic Mahabharata. \n
After approximately 2 hours of hiking, you are awarded a grand view of the pristine lake set amidst elevated meadows and framed by the Chaukhamba peaks.  \n
### This is Devariya Tal \n 
Here you will learn about the history of the place from our guides while taking momentary pauses to indulge in the magnificent views of towering, snow-clad peaks. \n
Get a closer look at the flora and fauna of the wooded area. In the afternoon, enjoy some time for yourself or relax with friends. \n
The dusk is usually spectacular, with the sun rising up over Deoriatal Lake and spilling its golden beams over the mountains. \n
This is a great spot for sunrise photography! The serene campsite offers a perfect place to unwind after a day of trekking and exploration.\n`,
        },
        {
          meals: ["breakfast", "lunch", "dinner"],
          day: 3,
          title: "Day 3: Rohini Bugyal",
          content: `### Enjoy Devariya Tal \n
Today you can do whatever your heart desires. You've got the entire day to yourself at Devariya Tal. This is a day for you to explore the surrounding area, and yourself. \n
You'll want to keep walking on this leisurely trail in a generous forest canopy. The trail will lead you to the open meadows and grasslands. \n
Discover a host of bird species, plants, and animals. The Himalayan woodpecker and Verditer Flycatcher can easily be spotted here. \n
Soak up the forest’s sheer grandeur. As the sun begins to set,turn around and begin your descent to the base camp. \n`,
        },
        {
          meals: ["breakfast", "lunch", "dinner"],
          day: 4,
          title: "Day 4: Tungnath temple, Chandrashilla, Kedarnath Sanctuary",
          content: `### Take your pick \n
Today You have two options to choose from. If you're feeling adventurous, we recommend trekking all the way to Tungnath temple through The Kedarnath Musk Deer Sanctuary. \n 
This is one of the world's richest bio-reserves, the sanctuary spans nearly 376 square miles of dense alpine forests, grasslands, plants, emerald lakes, and waterfall-laced cliffs. \n
This geological wonderland boasts lush greenery and breathtaking beauty. Wander through alpine meadows, discovering wildlife along the way. Taking in the sheer grandeur of the Sanctuary will leave you breathless. \n
The journey is both exhausting and life-enhancing. Upon reaching the top of Chandrashila (12,110 ft ), you are faced with a 360-degree view of the snow-laden Himalayan wilderness. \n
Alternatively, you can drive from Sari to a little settlement named Chopta to ascend Tungnath temple and Chandrashilla peak. The 5 km (3.1 mi) trek starts from Chopta. \n`,
        },
        {
          meals: ["breakfast", "lunch", "dinner"],
          day: 5,
          title: "Day 5: Exploring the unexplored",
          content: `### Pathless descent \n
The goal of this day is to give you a sense of what pathless descent is like.\n
 There will be no trail on this spectacular descent, but you will leave one. \n
The passage is peaceful, thrilling, wild and doable. Let this journey unfold at your own pace. Walking forward, you will encounter tall grass blades that stand throughout the terrain, enchanting cedar and maple trees, drawing your heart to beat faster and faster, making the journey electrifying. \n
The silence is audible here.\n
Eventually, you arrive in a small village nestled along the river in a valley. Pause for a moment and take in the scenery.\n
Alternatively, You can stay at the base camp.\n`,
        },
        {
          meals: ["breakfast", "lunch", "dinner"],
          day: 6,
          title: "Day 6: Shaneshwar Temple, Agastyamuni",
          content: `### Start with the temple \n
Begin your day by visiting Shanehwar Temple, dedicated to Lord Shiva. \n The temple will be toured in a guided manner. \n
Ancient sculptures of gods and goddesses decorate the rock-cut temple. Discover the intricate details and meaning of eminent statues. \n
Let yourself be swept away by the spiritual energy of this place, including the lush greenery that surrounds it. \n
Perform pooja, Yagya, and meditation. Spend the day exploring the surroundings.  Arrive at our homestay site by evening. \n`,
        },
        {
          meals: ["breakfast"],
          day: 7,
          title: "Day 7: Departure",
          content: `### Goodbye \n
We will start the day with breakfast before getting our things together and heading back down to Rishikesh where we will part ways physically. \n`,
        },
      ],
    },
    accommodation: {
      type: ["camping", "homestay"],
    },
    importantInformation: {
      title: "Information",
      description: [
        "Please be sure to read the following information before booking this trek.",
        "The below buttons will provide all the information you will need about the trek including what you will need to bring and how to reach the pickup point.",
      ],
      items: [
        {
          icon: "expect",
          content: `In line with the essence of exploration, we maintain a flexible schedule to take advantage of the unforeseen and modify our itinerary as necessary to benefit from new situations and possibilities. \n
Whether you pick a light, moderate, or a little bit of both levels of activity, your journey experience can be customized to suit your preferences. \n
Travelers must be in good physical condition, able to stand or walk for longer periods of time, and capable of entering and exiting the expedition.. \n
There are a variety of itinerary variations, from easy activities to strenuous hikes that suit.\n`,
          title: "Flexibility",
        },
        {
          icon: "fitness",
          content: `The journey is classified as *moderate difficulty*. \n
You start from an altitude of 7,600 ft at the base camp in Sari and reach the highest point of 12,110 ft at Chandrashilla.\n 
You may start by going for daily jogs and squats a few weeks before the journey. The journey is suitable for people aged 12 to 60 years old.\n`,
          title: "Fitness & Age",
        },
        {
          icon: "essentials",
          content: `*Winter*: Take a day pack, trekking shoes/comfortable walking shoes, trekking pants, a windproof jacket, light woollen clothing, a sun cap, sunglasses, sunscreen lotion, lip balm, torch/flashlight with extra batteries, a walking stick, water bottle, dry fruits and personal toiletries. \n
*Monsoon*: A backpack with a rain cover, waterproof trekking/hiking shoes, trekking pants, windproof/waterproof jacket, thick fleece, woollen clothing, waterproof gloves, thick woollen socks, walking stick, raincoat/poncho, torch/flashlight with extra batteries, and toiletries are essentials. \n`,
          title: "What to carry",
        },
        {
          icon: "map",
          content: `Rishikesh is the pickup point for travelers.\n 
You can book a flight from your place to *Jolly Grant Airport in Dehradun*, and then book a cab to Rishikesh where we will pick you up. \n
You can also take a train to Rishikesh, please download the IRCTC app to book train tickets .\n
There are also regular buses from Delhi to Rishikesh, please check the timetable at the Delhi bus station or download RedBus to book a private tourist bus. \n
Private taxis can also be hired from wherever you arrive to reach the base camp. We can also manage a car for you from either Delhi or Rishikesh.  \n`,
          title: "How to reach",
        },
        {
          icon: "safety",
          content: `For details on our health and safety procedures, including what will be expected of you and what you may anticipate from us throughout your trip, please click the "Learn More" button below. \n
Before leaving, please read through these updated procedures to ensure you are familiar with them. \n
This covers details on personal hygiene and wellness, as well as fresh policies we've implemented for things like facial coverings, washing, and more. \n`,
          title: "Health and safety",
        },
      ],
    },
    heal: {
      h: {
        title: "Health",
        copy: ["Hatha yoga", "Dhyana", "Pranayama", "Ayurveda", "Sattvic food"],
      },
      e: {
        title: "Earth",
        copy: ["Environmental awareness workshop"],
      },
      a: {
        title: "Adventure",
        copy: ["Camping", "Trekking", "Day hiking"],
      },
      l: {
        title: "Love",
        copy: ["Festivities", "Homestay"],
      },
    },
    inclusions: {
      title: "Inclusions",
      description: [
        "Use the following tabs to prepare a checklist of what you need to bring.",
        "We have provided information about what is included with your booking and what is not.",
      ],
      items: [
        {
          title: "Included",
          content: `Transportation upon arrival and departure(Rishikesh) for visitors who have reservations on a specified mode of transportation \n
Accommodations as described in the itinerary \n
Meals as described in the itinerary \n
Daily routine and outings as described in the itinerary \n
Personal Guide \n 
Photography \n`,
        },
        {
          title: "Not Included",
          content: `Anything not mentioned under ‘Package Inclusions’ \n
Airfare to and from the destination\n
Trip cancellation insurance or any other travel insurance \n
Visas \n
All personal expenses, optional tours and extra meals. \n
Any kind of entry fees anywhere if not mentioned \n`,
        },
      ],
    },
    staff,
  },
  {
    staff,
    accommodation: {
      type: ["camping", "homestay"],
    },
    title: "Ali Bedni Bugyal",
    overviewBullets: [
      "Ascend Devariya Tal set amidst elevated alpine meadows",
      "Explore the geological wonderland, Kedarnath Musk Deer Sanctuary",
      "Seek blessings from Tungnath temple which is dedicated to Shiva",
      "Experience Chandrashilla peak",
      "Behold the glory of Shaneshwar Temple",
    ],
    tagline: "This is a tagline space",
    heal: {
      h: {
        title: "Health",
        copy: ["Hatha yoga, Dhyana classes, Sattvic food"],
      },
      e: {
        title: "Earth",
        copy: ["Hatha yoga, Dhyana classes, Sattvic food"],
      },
      a: {
        title: "Adventure",
        copy: ["Hatha yoga, Dhyana classes, Sattvic food"],
      },
      l: {
        title: "Love",
        copy: ["Hatha yoga, Dhyana classes, Sattvic food"],
      },
    },
    gallery: [
      {
        src: "/assets/images/journeys/thumbnails/ascenders-journeys-ali-bugyal-trek.jpg",
        title: "Gallery Image 1",
        interest: ["trekking", "soghtseeing"],
        alt: "The alt for the image",
        description: ["This is line one", "This is line two"],
      },
      {
        src: "/assets/images/journeys/thumbnails/ascenders-journeys-deoriatal-chandrashilla-trek.jpg",
        title: "Gallery Image2",
        interest: ["trekking", "soghtseeing"],
        alt: "The alt for the image",
        description: ["This is line one", "This is line two"],
      },
    ],
    slug: "ali-bedni-bugyal",
    description: ["some words"],
    thumbnail:
      "/assets/images/journeys/thumbnails/ascenders-journeys-ali-bugyal-trek.jpg",
    id: Math.random().toString(36).substring(2, 7),
    level: {
      min: "easy",
      max: "medium",
    },
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
      measurement: "person",
    },
    group: {
      min: 2,
      max: 7,
      measurement: "people",
    },
    location: { label: "Uttarakhand" },
    itinerary: {
      title: "This is the Journey",
      description: [
        "This is the first line of the description for this itinerary.",
        "This is the second line of the itinerary description.",
      ],
      days: [
        {
          meals: [],
          day: 1,
          title: "Day 1: This is day 1",
          content:
            "# heading \n Some words \n ![image](/assets/images/journeys/goa-sunset.jpeg)",
        },
        {
          meals: [],
          day: 2,
          title: "Day 2: This is day 2",
          content:
            "# heading 2 \n Some words 2 \n ![image](/assets/images/journeys/goa-sunset.jpeg)",
        },
        {
          meals: [],
          day: 3,
          title: "Day 3: This is day 3",
          content:
            "# heading 3 \n Some words 3 \n ![image](/assets/images/journeys/goa-sunset.jpeg)",
        },
      ],
    },
    importantInformation: {
      title: "Information",
      description: [
        "This is some information about this section",
        "This is more information about this section",
      ],
      items: [
        {
          icon: "expect",
          content: "## This is some content \n these are some *bold* words",
          title: "What to expect",
        },
        {
          icon: "essentials",
          content: "## This is some content 2 \n these are some *bold* words",
          title: "Essentials to bring",
        },
        {
          icon: "fitness",
          content: "## This is some content 3 \n these are some *bold* words",
          title: "Fitness",
        },
        {
          icon: "temperature",
          content: "## This is some content 3 \n these are some *bold* words",
          title: "Temperature",
        },
        {
          icon: "map",
          content: "## This is some content 3 \n these are some *bold* words",
          title: "How to reach",
        },
        {
          icon: "safety",
          content: "## This is some content 3 \n these are some *bold* words",
          title: "Health and safety",
        },
      ],
    },
    inclusions: {
      title: "Inclusions",
      description: [
        "Use the following tabs to prepare a checklist of what you need to bring.",
        "We have provided information about what is included with your booking and what is not.",
      ],
      items: [
        {
          title: "Included",
          content: "### This is included \n Yaay",
        },
        {
          title: "Not Included",
          content: "### This is Nno included \n Boo",
        },
      ],
    },
  },
  {
    inclusions: {
      title: "Inclusions",
      description: [
        "Use the following tabs to prepare a checklist of what you need to bring.",
        "We have provided information about what is included with your booking and what is not.",
      ],
      items: [
        {
          title: "Included",
          content: "### This is included \n Yaay",
        },
        {
          title: "Not Included",
          content: "### This is Nno included \n Boo",
        },
      ],
    },
    staff,
    accommodation: {
      type: ["camping", "homestay"],
    },
    title: "Kedarnath Yatra",
    overviewBullets: [
      "some words abotu this place.",
      "some words abotu this place.",
      "some words abotu this place.",
      "some words abotu this place.",
    ],
    tagline: "This is a tagline space",
    slug: "kedarnath-yatra",
    gallery: [
      {
        src: "/assets/images/journeys/thumbnails/ascenders-journeys-ali-bugyal-trek.jpg",
        title: "Gallery Image 1",
        alt: "The alt for the image",
        interest: ["trekking", "soghtseeing"],
        description: ["This is line one", "This is line two"],
      },
      {
        src: "/assets/images/journeys/thumbnails/ascenders-journeys-deoriatal-chandrashilla-trek.jpg",
        title: "Gallery Image2",
        alt: "The alt for the image",
        interest: ["trekking", "soghtseeing"],
        description: ["This is line one", "This is line two"],
      },
    ],
    description: ["some words"],
    thumbnail:
      "/assets/images/journeys/thumbnails/ascenders-journeys-kedarnath-yatra.jpg",
    id: Math.random().toString(36).substring(2, 7),
    level: {
      min: "very easy",
    },
    duration: {
      value: 5,
      measurement: "days",
    },
    interest: ["trekking", "camping"],
    price: {
      from: 14990,
      value: 14990,
      currency: "₹",
      measurement: "person",
    },
    group: {
      min: 2,
      max: 7,
      measurement: "people",
    },
    location: { label: "Uttarakhand" },
    type: "Spiritual",
    itinerary: {
      title: "This is the Journey",
      description: [
        "This is the first line of the description for this itinerary.",
        "This is the second line of the itinerary description.",
      ],
      days: [
        {
          meals: [],
          day: 1,
          title: "Day 1: This is day 1",
          content:
            "## heading \n Some words \n ![image](/assets/images/journeys/goa-sunset.jpeg)",
        },
        {
          meals: [],
          day: 2,
          title: "Day 2: This is day 2",
          content:
            "## heading 2 \n Some words 2 \n ![image](/assets/images/journeys/goa-sunset.jpeg)",
        },
        {
          meals: [],
          day: 3,
          title: "Day 3: This is day 3",
          content:
            "## heading 3 \n Some words 3 \n ![image](/assets/images/journeys/goa-sunset.jpeg)",
        },
      ],
    },
    heal: {
      h: {
        title: "Health",
        copy: ["Hatha yoga, Dhyana classes, Sattvic food"],
      },
      e: {
        title: "Earth",
        copy: ["Hatha yoga, Dhyana classes, Sattvic food"],
      },
      a: {
        title: "Adventure",
        copy: ["Hatha yoga, Dhyana classes, Sattvic food"],
      },
      l: {
        title: "Love",
        copy: ["Hatha yoga, Dhyana classes, Sattvic food"],
      },
    },
    importantInformation: {
      title: "Information",
      description: [
        "This is some information about this section",
        "This is more information about this section",
      ],
      items: [
        {
          icon: "expect",
          content: "## This is some content \n these are some *bold* words",
          title: "What to expect",
        },
        {
          icon: "essentials",
          content: "## This is some content 2 \n these are some *bold* words",
          title: "Essentials to bring",
        },
        {
          icon: "fitness",
          content: "## This is some content 3 \n these are some *bold* words",
          title: "Fitness",
        },
        {
          icon: "temperature",
          content: "## This is some content 3 \n these are some *bold* words",
          title: "Temperature",
        },
        {
          icon: "map",
          content: "## This is some content 3 \n these are some *bold* words",
          title: "How to reach",
        },
        {
          icon: "safety",
          content: "## This is some content 3 \n these are some *bold* words",
          title: "Health and safety",
        },
      ],
    },
  },
];
export { journeys };
