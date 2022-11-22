import { Header } from "components/Header";
import Meta from "@/components/Base/Meta";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Content = styled.div`
  padding: var(--padding-lg) calc(var(--padding-lg) * 2);
  max-width: 1024px;
  margin: auto;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: var(--margin-sm);
    color: var(--dark-blue);
  }

  p {
    line-height: 1.6;
    font-size: 16px;
    margin-bottom: 12px;
    color: var(--dark-blue);
    font-size: 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    max-width: calc(100% - calc(var(--margin-md) * 2));
    object-fit: cover;
    border-radius: var(--border-radius-lg);
    margin: calc(var(--margin-lg) * 2) var(--margin-md);
  }
`;

const FrequentlyAskedQuestions: React.FC<{}> = () => (
  <main role="main">
    <Meta
      title="Frequently Asked Questions | Ascenders"
      description="Frequently Asked Questions | Ascenders"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/about/faqs`}
      favicon="/favicon.ico"
    />
    <Header
      pageType="info"
      heading="Frequently Asked Questions"
      subheading="Our most frequently asked questions from travellers are listed below. Many topics are covered here, including HEAL journeys, advance preparation, services, expectations, and refunds . Call us at +91-95360 17975 or send an email to <inquiries@ascenders.in>  to ask about something else."
    />
    <Content>
      <ReactMarkdown>
        {`
### HEAL journeys:

What are life-enhancing HEAL journeys and what do they offer?

The acronym HEAL stands for Health Earth Adventure Love; journeys about learning to take care of one's own health and the beauty of the Earth while on an adventurous and loving journey. Visit [HEAL](https://docs.google.com/document/offline/edit?mode=html&ouid=u81134dc91a8b3793&forcehl=1&hl=en&jobset=prod&ftrack=1#id%3D1iaIKyetO8EibKSaRCH6bsWd7SmSphM98TXqrTxkR5Gw%26cm%3Dd%26new%3Dfalse%26ouri%3Dhttps%253A%252F%252Fdocs.google.com%252Fdocument%252Fd%252F1iaIKyetO8EibKSaRCH6bsWd7SmSphM98TXqrTxkR5Gw%252Fedit%253Fusp%253Ddrive_web%2526ouid%253D101548208693753305123%26csr%3D3%26fcfr%3D1) page to learn more. HEAL journeys offer different limbs of yoga, Ayurveda, Sattvic food, spiritual lectures, a balanced diet, environmental awareness, enrichment programs, photography, trekking, climbing, camping, homestay, etc.

Who should take these self-enhancing HEAL journeys?

HEAL journeys are for anyone seeking change, transformation, enhancement or a desire to pick up new healthy habits.

Do we organise special unity/bonding/leadership journeys for schools, colleges, and IT companies?

Yes, we do design such journeys.

HEAL journeys for solo travellers, kids, and families?

Yes, 100% possible. We understand some people like to explore on their own which is so good. Solo travellers are most welcome. Solo travellers will be provided a guide and gear to take a journey. Our journeys are suitable and safe for familes, kids, and large groups.

Will I get a chance to become familiar with fellow travellers?

Once the registration has been completed, we will get acquainted virtually prior to the trip, and groups will be created on WhatsApp/Telegram.

### Expectations:

Will I be instructed regarding the advance preparation of the journey?

Once the registration is done, you will be instructed to prepare in advance regarding fitness, gear, pick-up and packing items.

Will I carry my rucksack bag/backpack/luggage on my own?

Yes, we have a principle of not bothering others to carry one's weight/load/bag. We do not use animals either for carrying weight. In case you get injured or have physical problems, your gear may be distributed among fellow travellers. Someone else may be called up to carry your weight for which you will be paying extra money.

Do I have access to a bath during the entire journey?

It is possible to take a bath at base camps, or wherever running water is available. Upper himalayan range with no water source will keep you deprived of baths.

What's strictly prohibited during the journey?

Harmful Intoxicants, offensive language, rude behaviour, or anything against company policies. If anyone is found acting against the laws of nature, he will be asked to return back home.

What about smoking and alcohol consumption?

This is a journey for those who are looking forward to quitting smoking and drinking. So, that is a big no. Unnecessary consumption of anything will cause harm anyways.

Do we restrict the usage of electronic gadgets?

It is important to engage with mother nature and yourself during HEAL journeys. We recommend using mobile phones to the minimum.

### Customiztion:

What about my age, fitness, and journey customization?

HEAL journeys are for all. They can also be customised as per your interests, age, and physical stamina. Those aged 60-70 years old must travel with someone young. Children under 8 years old must go with their parents. Check the fitness section of each journey to know more.

Customization is possible as per your interests and abilities. Customization will be possible for a group and not an individual. A little bit of flexibility is certainly possible for an individual. You can set your journey preferences in user account settings.

Can I register for the same journey for a lesser period?

HEAL journeys are originally scheduled for at least a week, but shorter journeys may be possible by clicking the custom date/journey option in the inquiry form.

### Services:

What kind of accommodation, food, and transportation am I going to get?

You will get to stay in safe tents, natural huts, and homestays amidst the peaceful Himalayan wilderness. You will be provided 100% vegetarian sattvic food prepared by our professional chef. Your transportation will be arranged from the pick-up point of your journey. You will be given a Mahindra Bolero suv car or similar.

How many people share a tent/homestay?

2 to 3 people share a room, tent, homestay, natural home, etc.

Will I get a guide/trainer during the journey?

Yes, You will be guided by our experts who are specialised in their respective fields.

What is included/not included in the journey price?

As part of the total journey cost, we include accommodations, food, transportation, and journey guides/experts. See the particular journey page for more info.

What gear/items/rented gear will I be provided for the mountainous journey?

You will be provided with a rucksack bag, tents, sleeping bags, yoga mats, warm blankets, trekking poles, water bottles, dry fruits, rain covers, etc. The cost of these items will be added to the total cost of the journey. There may be a few items you will need to purchase for the journey. Some items may need to be rented, such as trekking shoes, gators, crampons, etc. Get in touch with us for more information.

### Extension/Dates:

Can I extend my trip?

Yes, the journey can be extended. However, the additional cost of each day will have to be paid by the traveller prior to the extension of the journey.

Can I change the date of my journey?

As long as you have already registered and are unable to participate in the originally registered journey, you can take the same journey in the near future.

### Payment/Refunds:

Do I have to make full payment to confirm a journey?

Yes, full payment is necessary to confirm the reservation.

What are cancellation/refund policies?

Please check the ["Terms & Conditions page"](https://docs.google.com/document/offline/edit?mode=html&ouid=u81134dc91a8b3793&forcehl=1&hl=en&jobset=prod&ftrack=1#id%3D1iaIKyetO8EibKSaRCH6bsWd7SmSphM98TXqrTxkR5Gw%26cm%3Dd%26new%3Dfalse%26ouri%3Dhttps%253A%252F%252Fdocs.google.com%252Fdocument%252Fd%252F1iaIKyetO8EibKSaRCH6bsWd7SmSphM98TXqrTxkR5Gw%252Fedit%253Fusp%253Ddrive_web%2526ouid%253D101548208693753305123%26csr%3D3%26fcfr%3D1)`}
      </ReactMarkdown>
    </Content>
  </main>
);

export default FrequentlyAskedQuestions;
