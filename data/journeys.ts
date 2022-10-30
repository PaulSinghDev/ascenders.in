import { Destination, Journey } from "types/data.types";
import { staff } from "data/staff";
import { interests } from "./interests";
import { destinations } from "./destinations";

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
    interest: [
      ...interests.filter((interest) =>
        /(?:trekking|heal)/.test(interest.slug)
      ),
    ],
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
    location: destinations.find((destination) =>
      /uttarakhand/gi.test(destination.slug)
    ) as Destination,
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
    staff: staff.filter((member) => /shivam|shantanu|saurav/.test(member.slug)),
  },
  {
    staff: staff.filter((person) => /shivam|saurav/gi.test(person.slug)),
    accommodation: {
      type: ["camping", "homestay"],
    },
    title: "Ali Bedni Bugyal",
    overviewBullets: [
      "Embrace the feel of green-blanketed meadow Ali Bugyal under your feet",
      "Take a whiff of the wild mountain air and breathe in the scent of birch, and oak forests",
      "Capture spectacular dusk and dawn, shooting alongside an Ascenders photographer",
      "Enjoy the presence of Mt. Trishul that towers over you with unrelenting grace",
    ],
    tagline: "Encounter the vast grasslands",
    heal: {
      h: {
        title: "Health",
        copy: [
          "Yoga",
          "Asana",
          "Dhyana",
          "Pranayama",
          "Ayurveda",
          "Sattvic food",
        ],
      },
      e: {
        title: "Earth",
        copy: ["Environmental Awareness Workshop"],
      },
      a: {
        title: "Adventure",
        copy: ["Camping", "Trekking", "Day-hiking"],
      },
      l: {
        title: "Love",
        copy: ["Homestay", "Sightseeing", "Guide"],
      },
    },
    gallery: [
      {
        src: "/assets/images/journeys/galleries/ali-bedni-bugyal/ali-bugyal.jpg",
        title: "Ali Bugyal",
        interest: ["trekking", "sightseeing", "mountains"],
        alt: "Three people standing on the top of a mountain",
        description: [
          "At 3500 meters, India's most beautiful meadow lies beneath the icy summits of the world's highest mountains.",
          "Feel the soft grass of Ali Bugyal's meadow beneath your feet",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/ali-bedni-bugyal/ali-bugyal-morning.jpg",
        title: "Sunrise",
        interest: ["trekking", "sightseeing", "mountains"],
        alt: "Golden sunlight shining on snowcapped mountains",
        description: [
          "Golden rays of dawn pierce the crowns of snow-covered peaks in the early morning hours.",
          "It's moments like these that lift the spirit and instil positivity.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/ali-bedni-bugyal/ali-bugyal-sunset.jpg",
        title: "Sunset",
        interest: ["trekking", "sightseeing", "mountains"],
        alt: "Orange sunlight crowning distant mountains",
        description: [
          "Seeing the sun paint the tops of the peaks pink and orange in the evening is a magical experience for nature lovers.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/ali-bedni-bugyal/ali-bugyal-ridgelines.jpg",
        title: "Ridgelines",
        interest: ["trekking", "sightseeing", "mountains"],
        alt: "Long shot from the top of a snowy mountain",
        description: [
          "The sheer grandeur of this vast grassland surrounded by stunning ridgelines creates a serene Himalayan landscape. Although no camera can capture the full magnitude and sublimity of the great Himalayas.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/ali-bedni-bugyal/ali-bugyal-top.jpg",
        title: "Mt. Trishul",
        interest: ["trekking", "sightseeing", "mountains"],
        alt: "Dirt path leading to the top of Mt. Trishul",
        description: [
          "This is the beauty point of the meadow that offers an incredible landscape of the region.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/ali-bedni-bugyal/chaukhamba.jpg",
        title: "Icy Summits",
        interest: ["trekking", "sightseeing", "mountains"],
        alt: "Snow capped mountains at sunset",
        description: [
          "This meadow offers views of icy, towering mountains.",
          "You are flanked by the unrelenting grace of Mt. Trishul, Mt. Nanda Ghunti, and Mt. Chaukhamba.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/ali-bedni-bugyal/roopkund-lake.jpg",
        title: "Snow Blanketed",
        interest: ["trekking", "sightseeing", "mountains"],
        alt: "Bright sunlight, clear blue sky and mountain tops",
        description: [
          "The snow blankets the green grassland during the winter months between October and March, burying the paths under snow and making the trek more difficult.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/ali-bedni-bugyal/icy-desert.jpg",
        title: "Icy Desert",
        interest: ["trekking", "sightseeing", "mountains"],
        alt: "Footprints in the snow with a clouded sun",
        description: [
          "One's heart pumps out of thrill when regular paths of the meadow are buried by snowfall and there is no certainty to reach the destination but that's what adds thrills to the journey.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/ali-bedni-bugyal/ali-bugyal-campsite.jpg",
        title: "Boundless Accommodation",
        interest: ["trekking", "sightseeing", "mountains"],
        alt: "Autumnal grass on a mountain top",
        description: [
          "No other place can compare to the feeling of a campsite in the middle of the wilderness.",
          "Camp, stay alive, come to your senses, and take it easy.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/ali-bedni-bugyal/forest.jpg",
        title: "The Scent and Stillness",
        interest: ["trekking", "sightseeing", "mountains", "forests"],
        alt: "Two people hiking in a snowy forest",
        description: [
          "In this jungle, your senses are completely seized by the sublime taste of stillness and the smell of the soothing aroma. Sunlight beams cutting through the trees create a dramatic scene of highlights and shadows.",
        ],
      },
    ],
    slug: "ali-bedni-bugyal",
    description: [
      "Embark on a journey into the heart of the Himalayas to discover vast grasslands and diverse wildlife.",
      "Discover the mesmerizing beauty of the densest jungles, icy peaks, and gushing streams on guided excursions.",
    ],
    thumbnail:
      "/assets/images/journeys/galleries/ali-bedni-bugyal/ali-bugyal.jpg",
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
    interest: [
      ...interests.filter((interest) =>
        /(?:trekking|heal)/.test(interest.slug)
      ),
    ],
    price: {
      from: 17990,
      value: 17990,
      currency: "₹",
      measurement: "person",
    },
    group: {
      min: 5,
      max: 12,
      measurement: "people",
    },
    location: destinations.find((destination) =>
      /uttarakhand/gi.test(destination.slug)
    ) as Destination,
    itinerary: {
      title: "Detailed Itinerary",
      description: [
        "See our detailed day-by-day itinerary for the Kedarnath HEAL journey.",
        "This itinerary may change due to circumstances outside our control and to take advantage of new opportunities.",
      ],
      days: [
        {
          meals: [],
          day: 1,
          title: "Day 1: Lohajung",
          content:
            "### Pickup: Rishikesh \nYou will be picked up early in the morning from Rishikesh. Please make sure that you get there a day before the journey.  Arrive at Lohajung, and settle into your camps. Later, hear tales of the Roopkund Trek from our experts. Gather for a welcome reception at dinner in the evening. The next day awaits taking in the stillness of dense forests.  \n",
        },
        {
          meals: [],
          day: 2,
          title: "Day 2: Didina Village",
          content:
            "### Forest Walk\nTake a deep breath and begin your first step of the journey towards India's most beautiful grassland nestled at an altitude of 3500 meters. It is surrounded by Almora, Nainital, Gwaldam, and Kausani hill stations. As we initially head downhill, birds, forests, and wildlife provide soothing sounds. We stop for lunch on a beautiful river before starting our ascent to the village. Located near a stream, Didina village is the perfect location to get to know the welcoming residents, spend quality time with them, and learn about their way of life.\n",
        },
        {
          meals: [],
          day: 3,
          title: "Days 3: Ali Bugyal (Day 1)",
          content:
            "### The Second Ascent\nEnjoy breakfast in Didina before a visit to another thrilling day. In this dark forest adorned with oaks, birch and rhododendrons, we set off to explore the beautiful meadow while hiking on a brown carpet of leaves. \n",
        },
        {
          meals: [],
          day: 4,
          title: "Days 4: Ali Bugyal (Day 2)",
          content:
            "### The Descent \nEnjoy the hike down to Didina village. Take stunning photos of the meadows and the snow-clad peaks in the distance as you walk on the top of the Grassland. Return to Didina mid-afternoon and grab a delicious sattvic lunch. \n",
        },
        {
          meals: [],
          day: 5,
          title: "Days 5: Back to Didina",
          content:
            "### The vast meadow \nFollowing the trail for a few hours, you are suddenly greeted by the vast meadows of Ali Bugyal, icy Mt. Trishul, and endless ridgelines. Allow yourself to experience the grassland on your toes by taking off your shoes. The green meadow stretches out in every direction from the mountaintop, engulfing you in miles of vastness. Mother Nature creates bright, hazy strokes to depict the towering mountain peaks. After a day of hiking and exploration, the peaceful campsite near a forest is the perfect place for unwinding.\n",
        },
        {
          meals: [],
          day: 6,
          title: "Day 6: Descent to Lohanjung",
          content:
            "### Descent \nThis is the 6th day, and we have let ourselves be filled with the wilderness of spectacular Himalayan Grassland. Our day will begin with a robust breakfast, followed by a descent to Lohajung. Check in to the lodge, have some dinner, and enjoy the evening with the group after completing the journey.\n",
        },
        {
          meals: [],
          day: 7,
          title: "Day 7: Rishikesh",
          content:
            "### Catch you later \nWe will have breakfast to start the day. After gathering our belongings, we will return to Rishikesh to connect with your flight/cab home. \n ",
        },
      ],
    },
    importantInformation: {
      title: "Information",
      description: [
        "The following tabs contain information regarding your transportation, accommodations, other services you will receive, and important items to bring and things to prepare in advance for your journey.",
      ],
      items: [
        {
          content:
            "**Accommodations:** The majority of our nights will be spent in comfortable camps based on double or single or group occupancy. The accommodations on this journey offer the best location to explore the incredible natural wonders of the area.\n**Guides:** Experienced experts will travel with you the entire journey, and share their insights.\n",
          title: "Accommodations",
        },
        {
          content:
            "**Pick-up & Drop-off: Rishikesh:** In accordance with your travel itinerary, we have arranged for all of your transportation requirements from Rishikesh to Lohanjung including drop-off.  Our trip may be affected by poor road conditions and travel delays, and some days will require long transfers by road, rail, or air. \n  **How to reach:** You can book a flight to Jolly Grant Airport in Dehradun, which is around 239 kilometers from Delhi  Airport. From the Dehradun airport to Rishikesh, taxis are available. Visitors can board regular buses, trains, or cabs from Delhi to Rishikesh. \n",
          title: "Transportation",
        },
        {
          content:
            "**Difficulty Level:** The activity level for this journey is light to medium, thus fit travellers are recommended. This Journey may require walking on paths with steep ascents and descents, traversing uneven terrain, and ascending hills without handrails.\n  **Fitness:** You may start by going for daily jogs, performing Surya namaskara, and squats a few weeks before the journey. The journey is suitable for people aged 18 to 60 years old.\n**Height:** You start from an altitude of 340 meters in Rishikesh and reach the highest point of 3,355 meters at Ali Bugyal.\n",
          title: "Activity Level & Fitnes",
        },
        {
          content:
            "**Winter:** Rucksack bag, trekking shoes/walking shoes, track pants, a windproof jacket, light woolen clothing, a sun cap, sunglasses, sunscreen lotion, lip balm, torch/flashlight, a walking stick, water bottle, dry fruits, and personal toiletries. \n**Monsoon:** A backpack with a rain cover, waterproof trekking/hiking shoes, trekking pants, windproof/waterproof jacket, thick fleece, woolen clothing, waterproof gloves, woolen socks, walking stick, raincoat/poncho, torch/flashlight, toiletries \n**General Items:** Mobile phone, camera, diary, books, cash, debit card, emergency numbers, personal medicine, etc. \n",
          title: "What to carry",
        },
        {
          content:
            'For details on our health and safety procedures, including what will be expected of you and what you may anticipate from us throughout your trip, please click the "Learn More" button below. \nBefore leaving, please read through these updated procedures to ensure you are familiar with them. \nThis covers details on personal hygiene and wellness, as well as fresh policies we\'ve implemented for things like facial coverings, washing, and more. \n ',
          title: "Health and Safety",
        },
      ],
    },
    inclusions: {
      title: "Inclusions/Exclusions",
      description: [
        "Use the following tabs to prepare a checklist of what you need to bring.",
        "We have provided information about what is included with your booking and what is not.",
      ],
      items: [
        {
          title: "Included",
          content:
            "- Accommodation as per package\n- Meals as indicated in the Itinerary\n- Transfers upon arrival and departure \n- Transportation provided on-trip\n- Personal Guide\n- Photography\n",
        },
        {
          title: "Not Included",
          content:
            "- All toll tax, parking, fuel, and driver allowances\n- Anything not mentioned under 'Package Inclusions\n- All personal expenses, optional tours, and extra meals\n- Any kind of entry fees anywhere if not mentioned\n- Tips, travel insurance, medical insurance, laundry charges, liquors, mineral water, telephone charges\n- Porter, pony, horse, cable car, boat, train tickets, air tickets charges\n",
        },
      ],
    },
  },
  {
    inclusions: {
      title: "Inclusions/Exclusions",
      description: [
        "Use the following tabs to prepare a checklist of what you need to bring.",
        "We have provided information about what is included with your booking and what is not.",
      ],
      items: [
        {
          title: "Included",
          content:
            "- Accommodation as per package\n- Meals as indicated in the Itinerary\n- Transfers upon arrival and departure \n- Transportation provided on-trip\n- All toll tax, parking, fuel and driver allowances\n- Personal Guide\n- Photography",
        },
        {
          title: "Not Included",
          content:
            "- Horse / Paalki / Helicopter for Trekking at Kedarnath\n- Anything not mentioned under 'Package Inclusions\n- All personal expenses, optional tours, and extra meals\n-   Any kind of entry fees anywhere if not mentioned\n-   Tips, travel insurance, medical insurance, laundry charges, liquors, mineral water, telephone charges\n- Porter, pony, horse, cable car, boat, train tickets, air tickets charges",
        },
      ],
    },
    staff: staff.filter((person) => /shivam|saurav/gi.test(person.slug)),
    accommodation: {
      type: ["camping", "homestay"],
    },
    title: "Kedarnath Yatra: Shiva's Home",
    overviewBullets: [
      "A journey to the holy abode of Lord Shiva - Kedarnath Temple",
      "One of the four major sites in India's Chota Char Dham pilgrimage",
      "Venture to the Vasuki Lake flanked by snow-clad mountain peaks",
      "Sleep under the shadow of mighty Himalayan peaks ",
      "Pray at Gaurikund Temple on your way to Kedarnath",
    ],
    tagline: "The Best Dose of Spirituality",
    slug: "kedarnath-yatra",
    gallery: [
      {
        src: "/assets/images/journeys/galleries/kedarnath-yatra/brahma-kamal.jpg",
        title: "Brahma Flower",
        alt: "Close up picture of a brahma flower",
        interest: ["trekking", "nature"],
        description: [
          "Brahma Kamal is a rare shrub found only along the high Himalayan ridges.",
          "It is famed for its auspicious, divine, and therapeutic properties.",
          "It is also Uttarakhand's state flower.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/kedarnath-yatra/vasuki-tal.jpg",
        title: "Vasuki Lake",
        alt: "Vasuki lake with a mountain backdrop",
        interest: ["trekking", "sightseeing", "nature"],
        description: [
          "Vasuki Tal located above Kedarnath at a height of 4,135 metres, is a blue icy lake that provides a spectacular base for Mt Satopanth and Mt Vasuki.",
          "Both spiritual and thrill seekers visit the lake.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/kedarnath-yatra/kedarnath-valley.jpg",
        title: "Kedarnath Valley",
        alt: "View of Kedarnath Valley mountain range",
        interest: ["trekking", "sightseeing", "nature"],
        description: [
          "This valley is filled with the divine mysticism of Yogis, with the Kedarnath peak(6,940m) overlooking the temple and enhancing the surroundings.",
        ],
      },
      {
        src: "/assets/images/journeys/galleries/kedarnath-yatra/kedarnath-temple-3.jpg",
        title: "Kedarnath Template",
        alt: "View of Kedarnath temple",
        interest: ["trekking", "sightseeing", "nature", "spirituality"],
        description: [
          "The most revered temple of the first Yogi Shiva, situated in a remote Himalayan town.",
          "Surrounded by magnificent snow-capped mountains in the Indian state of Uttarkhand.",
          "This is an immensely sacred site of spirituality.",
        ],
      },
    ],
    description: [
      "Kedarnath is synonymous with Shiva: The first Yogi.",
      "It is home to one of the country's most revered Shiva temples, India's centuries-old Char Dham pilgrimage sites.",
      "A place that attracts thousands of Yogis, and millions of Devotees every year.",
    ],
    thumbnail:
      "/assets/images/journeys/thumbnails/ascenders-journeys-kedarnath-yatra.jpg",
    id: Math.random().toString(36).substring(2, 7),
    level: {
      min: "easy",
      max: "medium",
    },
    duration: {
      value: 6,
      measurement: "days",
    },
    interest: [
      ...interests.filter((interest) =>
        /(?:trekking|heal|spirituality|adventure)/.test(interest.slug)
      ),
    ],
    price: {
      from: 17999,
      value: 17990,
      currency: "₹",
      measurement: "person",
    },
    group: {
      min: 5,
      max: 12,
      measurement: "people",
    },
    location: destinations.find((destination) =>
      /uttarakhand/gi.test(destination.slug)
    ) as Destination,
    type: "Spiritual",
    itinerary: {
      title: "Detailed Itinerary",
      description: [
        "Take a look at our comprehensive day-by-day breakdown of the Kedarnath HEAL journey.",
        "Please note that the very essence of exploration lies in a flexible schedule which allows us to adapt to the unexpected and take advantage of new opportunities as they arise.",
      ],
      days: [
        {
          meals: [],
          day: 1,
          title: "Day 1: Guptkashi",
          content:
            "### Pickup \nUpon your arrival in Rishikesh, a representative of our company will pick you up at 5:30 in the morning. As a precaution, be sure to arrive in Rishikesh the day before and get enough rest the night before the journey. Our destination for the day is Guptkashi. \n### The Hidden Kashi \nDo you know what Kashi (Varanasi) is? Kashi is one of the oldest cities of learning and the holiest of all sacred cities. At any given time, hundreds of enlightened beings dwelt here. Agasthyamuni visited this area and may have even visited this shrine.  So Kashi and Guptkashi share the same importance. It is a hidden Kashi in the Himalayas. A number of other ancient shrines can be found in Guptkashi, among them the ancient Guptkashi Vishwanath Temple, which bears many similarities with the Kashi Vishwanath Temple in Varanasi. It is an ancient place to start your pilgrimage before visiting Kedarnath Valley.",
        },
        {
          meals: [],
          day: 2,
          title: "Day 2: Kedarnath Trek",
          content:
            "### 16 km trek\nWe will arrive at Gaurikund early in the morning to begin our Kedarnath trek. We have a 16-kilometre trek ahead of us. Our goal should be to reach Kedarnath temple before sunset and participate in evening Puja; if we are lucky, we may even have Darshana. Upon reaching Kedarnath temple's base camp, settle down, enjoy strong ginger tea, delicious dinner, and rest.",
        },
        {
          meals: [],
          day: 3,
          title: "Day 3: Kedarnath Temple",
          content:
            '### Centre of Spiritualtiy\nKedarnath, which is located in this isolated valley of Uttarkhand, is the most significant source of spirituality for thousands of Yogis and billions of devotees anywhere on the globe. The valley where holy people and sages resided and attained Nirvana has served as a core of spirituality for approximately 25-50 thousand years. According to legends, Parvati and Shiva occasionally visited this location. Shiva- The first Yogi plunged into rapture and danced all over the mountains or remained still.### Seed of Enlightenment \nThe Sanskrit words kedara ("field") and natha ("lord") are the sources of the name "Kedarnath," which means "the lord of the field". According to the scripture Kashi Kedara Mahatmya, this is where "the seed of enlightenment" sprouts. The site is one of India\'s 12 jyotirlingas. Along with other peaks, the towering Kedarnath peak (6,940 metres) looms behind the temple and accentuates the surrounding landscape. The place\'s energy permeates the body, mind, and heart even from a distance.',
        },
        {
          meals: [],
          day: 4,
          title: "Day 4: Vasuki Tal / Kanti Sarovar",
          content:
            "### Kanti Sarovar - Lake of Grace \nOn this morning's hike, we will visit a glacier lake about an hour away from Kedarnath Temple. It was on the banks of Kanti Sarovar, where Shiva, the first Yoga Guru, taught these inner technologies to the Sapta Rishis, the first seven disciples of Yoga. Allow your mind to be filled with peace, harmony, and purity as you climb, ascend, and enjoy the breathtaking desolation of the area. \n### Vasuki Tal\nAnother option is to trek to this lake that is about 8 km from Kedarnath. 4135 meters above sea level, this high-altitude lake offers glorious views of Chaukhamba peaks amidst towering Himalayan pinnacles. The entire lake is dotted with a delightful Himalayan flower called Brahma Kamal which is only discovered at high elevations.  This lake is believed to have been visited by Lord Vishnu at the auspicious festival of Raksha Bandhan. Either of these destinations can be visited during your stay at Kedarnath temple. \n",
        },
        {
          meals: [],
          day: 5,
          title: "Day 5: Guptkashi",
          content:
            "### Descent \nThis is the fifth day, and we have given ourselves the time and space to fill our hearts and souls with the spiritual infusion of the temple, lakes, and mystic valley. Our day will begin with a robust breakfast, followed by a descent to Gaurikund, and then a drive to Guptkashi. Check in to the lodge, have some dinner, and enjoy the evening with the group after completing the Kedarnath Yatra.\n",
        },
        {
          meals: [],
          day: 6,
          title: "Day 6: Rishikesh",
          content:
            "### Catch you later \nWe will have breakfast to start the day. After gathering our belongings, we will return to Rishikesh, where we will physically separate.",
        },
      ],
    },
    heal: {
      h: {
        title: "Health",
        copy: [
          "Yoga",
          "Asana",
          "Dhyana",
          "Pranayama",
          "Ayurveda",
          "Sattvic food",
        ],
      },
      e: {
        title: "Earth",
        copy: ["Environmental", "awareness", "workshop"],
      },
      a: {
        title: "Adventure",
        copy: ["Camping", "Trekking", "Day-hiking"],
      },
      l: {
        title: "Love",
        copy: ["Festivities", "homestay", "sightseeing", "Guide"],
      },
    },
    importantInformation: {
      title: "Information",
      description: [
        "The following tabs contain information regarding your transportation, accommodations, other services you will receive, and important items to bring and things to prepare in advance for your journey.",
      ],
      items: [
        {
          content:
            "**Accommodations:** The majority of our nights will be spent in comfortable camps and homestays based on double or single or group occupancy. The accommodations on this journey offer the best location to explore the incredible natural wonders of the area. \n**Guides:** Experienced experts will travel with you the entire journey, and share their insights.\n",
          title: "Accommodations",
        },
        {
          content:
            "**Pick-up point - Rishikesh:** In accordance with your travel itinerary, we have arranged for all of your transportation requirements from Rishikesh to Kedarnath including drop-off.  Our trip may be affected by poor road conditions and travel delays, and some days will require long transfers by road, rail, or air.\n**How to reach:** You can book a flight to Jolly Grant Airport in Dehradun, which is around 239 kilometres from Delhi  Airport. From the Dehradun airport to Rishikesh, taxis are available. Visitors can board regular buses, trains or cabs from Delhi to Rishikesh.",
          title: "Transportation",
        },
        {
          content:
            "**Difficulty Level:** The activity level for this journey is light to medium, thus fit travellers are recommended. This Journey may require walking on paths with steep ascents and descents, traversing uneven terrain, and ascending hills without handrails. There are a variety of itinerary variations, from easy to medium activities that suit you.\n**Fitness:** You may start by going for daily jogs, performing Surya namaskara, and squats a few weeks before the journey. The journey is suitable for people aged 18 to 60 years old.\n**Height:** You start from an altitude of 340 metres at Rishikesh and reach the highest point of 4,315 metres at Vasuki Tal.",
          title: "Activity Level & Fitness",
        },
        {
          content:
            "**Winter:** Rucksack bag, trekking shoes/walking shoes, track pants, a windproof jacket, light woollen clothing, a sun cap, sunglasses, sunscreen lotion, lip balm, torch/flashlight, a walking stick, water bottle, dry fruits and personal toiletries. \n**Monsoon:** A backpack with a rain cover, waterproof trekking/hiking shoes, trekking pants, windproof/waterproof jacket, thick fleece, woollen clothing, waterproof gloves, thick woollen socks, walking stick, raincoat/poncho, torch/flashlight, and toiletries \n**General Items:** ID Card(Driver’s license/Passport/Aadhar Card), Medical Certificate, Mobile phone, camera, diary, books, cash, debit card, emergency numbers, personal medicines(Digene, ORS, Diamox), etc. \n",
          title: "What to carry",
        },
        {
          icon: "map",
          content:
            'For details on our health and safety procedures, including what will be expected of you and what you may anticipate from us throughout your trip, please click the "Learn More" button below. \nBefore leaving, please read through these updated procedures to ensure you are familiar with them. \nThis covers details on personal hygiene and wellness, as well as fresh policies we\'ve implemented for things like facial coverings, washing, and more.',
          title: "Health and Safety",
        },
      ],
    },
  },
];
export { journeys };
