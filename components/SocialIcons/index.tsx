import styled from "styled-components";
import { socialData } from "config";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";
import { SocialData } from "types";

const getNetworkIcon = (name: string): IconType => {
  switch (name) {
    case "twitter":
      return FaTwitter;
    case "facebook":
      return FaFacebook;
    case "instagram":
      return FaInstagram;
    default:
      return FaTwitter;
  }
};

export const SocialIcons: React.FC = () => {
  return (
    <StyledSocialIcons>
      <ul>
        {Object.keys(socialData).map((network, index) => {
          const Icon = getNetworkIcon(network);
          return (
            <li key={`${network}-${index}-${Date.now()}`}>
              <Link href={socialData[network as keyof SocialData].url}>
                <a title={`Follow us on ${network}`}>
                  <Icon size={30} color="var(--light)" />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledSocialIcons>
  );
};
const StyledSocialIcons = styled.div`
  margin: 1.5rem 0;

  ul {
    display: flex;

    li {
      margin: 0 0.5rem;
      transition: 0.3s ease;
      display: inline-flex;
      border-radius: 5px;

      > a {
        padding: 0.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        background-color: var(--blue);
      }
    }
  }
`;
