import { HomeHeader } from "./Home";
import { PlpHeader } from "./Plp";
import { PdpHeader, PdpHeaderProps } from "./Pdp";

interface HeaderProps {
  type: "hero" | "normal";
  heading?: string;
  pageType: "home" | "plp" | "pdp";
  subheading?: string;
  backgroundUrl?: string;
}

const Header: React.FC<HeaderProps & PdpHeaderProps> = ({
  pageType,
  heading,
  location,
  interests,
  description,
  groupSize,
  subheading,
  backgroundUrl,
  level,
}) => {
  if (pageType === "home") {
    return <HomeHeader />;
  }
  if (pageType === "plp") {
    return (
      <PlpHeader
        heading={heading}
        subheading={subheading}
        backgroundUrl={backgroundUrl}
      />
    );
  }
  if (pageType === "pdp") {
    return (
      <PdpHeader
        heading={heading}
        location={location}
        interests={interests}
        groupSize={groupSize}
        level={level}
        description={description}
        backgroundImg={backgroundUrl}
      />
    );
  }
  return null;
};

export { Header };
