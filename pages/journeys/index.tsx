import { Text } from "@/components/Base";
import { Header } from "@/components/Header";
import { journeys } from "data/journeys";
import Head from "next/head";
import styled from "styled-components";
import JourneysGrid from "@/components/JourneysGrid/JourneysGrid";

const StyledJourneysWrapper = styled.div`
  padding: var(--padding-lg);
  display flex;
  max-width: 100%;
  overflow: auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const JourneysPage: React.FC = () => (
  <div>
    <Head>
      <title>Ascenders | H.E.A.L | Our Journeys</title>
      <meta name="description" content="Ascenders | H.E.A.L | Journeys" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header type="hero" pageType="plp" />
    <Text
      lines={[
        "For travellers looking to get fully immersed in the lap of the might Himalayas, out hiking expeditions offer the ultimate opportunity to get exposed to this heal-loaded sel transformative voyage. The gateway to epic hikes, survival, uncertainty, fun and rest. Let's go!",
      ]}
    />
    <StyledJourneysWrapper>
      <JourneysGrid journeys={journeys} />
    </StyledJourneysWrapper>
  </div>
);

export default JourneysPage;