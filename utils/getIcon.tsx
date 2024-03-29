import { HealHSvg } from "@/components/CustomIcons/HealHSvg";
import { HealSvg } from "@/components/CustomIcons/HealSvg";
import {
  BsBookFill,
  BsFillBookmarkStarFill,
  BsPeopleFill,
} from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import {
  FaLocationArrow,
  FaMinus,
  FaPlus,
  FaPassport,
  FaHeartbeat,
  FaTemperatureLow,
  FaMapSigns,
  FaBriefcaseMedical,
  FaHome,
  FaLeaf,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { AvailableIcons } from "types/data.types";

const getIcon = (name: AvailableIcons, size?: number): React.ReactNode => {
  switch (name) {
    case "twitter":
      return <FaTwitter size={size} />;
    case "facebook":
      return <FaFacebook size={size} />;
    case "instagram":
      return <FaInstagram size={size} />;
    case "expect":
      return <BsFillBookmarkStarFill size={size} />;
    case "essentials":
      return <FaPassport size={size} />;
    case "fitness":
      return <FaHeartbeat size={size} />;
    case "temperature":
      return <FaTemperatureLow size={size} />;
    case "map":
      return <FaMapSigns size={size} />;
    case "safety":
      return <FaBriefcaseMedical size={size} />;
    case "minus":
      return <FaMinus size={size} />;
    case "plus":
      return <FaPlus size={size} />;
    case "heal-h":
      return <HealHSvg size={size} />;
    case "heal":
      return <HealSvg size={size} />;
    case "book":
      return <BsBookFill size={size} />;
    case "home":
      return <FaHome size={size} />;
    case "leaf":
      return <FaLeaf size={size} />;
    case "menu":
      return <MdMenu size={size} />;
    case "location":
      return <FaLocationArrow size={size} />;
    case "people":
      return <BsPeopleFill size={size} />;
    default:
      throw new Error("You can only use the specified names");
  }
};

export { getIcon };
