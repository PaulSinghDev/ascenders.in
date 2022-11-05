import { Header } from "@/components/Header";
import { journeys } from "data/journeys";
import styled from "styled-components";
import JourneysGrid from "@/components/JourneysGrid/JourneysGrid";
import Meta from "@/components/Base/Meta";

const StyledJourneysWrapper = styled.div`
  display flex;
  max-width: 100%;
  overflow: auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const JourneysPage: React.FC = () => (
  <main role="main">
    <Meta
      title="Journeys | Ascenders | Go Beyond | H.E.A.L"
      description="Journeys | H.E.A.L"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/journeys`}
      favicon="/favicon.ico"
    />
    <Header
      pageType="info"
      heading="All Journeys"
      subheading="For travellers looking to get fully immersed in the lap of the might Himalayas, out hiking expeditions offer the ultimate opportunity to get exposed to this heal-loaded sel transformative voyage. The gateway to epic hikes, survival, uncertainty, fun and rest. Let's go!"
    />
    <StyledJourneysWrapper>
      <JourneysGrid journeys={journeys} />
    </StyledJourneysWrapper>
  </main>
);

export default JourneysPage;
