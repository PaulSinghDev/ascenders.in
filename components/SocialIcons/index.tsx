import styled from "styled-components";
import { socialData } from "config";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";
import { SocialData } from "types";

const StyledSocialIcons = styled.div<{ theme: string }>`
  ul {
    display: flex;

    li {
      transition: 0.3s ease;
      display: inline-flex;
      border-radius: 5px;
      padding: var(--padding-sm);
      cursor: pointer;
      color: ${({ theme }) =>
        theme === "light" ? "var(--light)" : "var(--dark-blue)"};

      > a {
        padding: 0.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        background-color: var(--blue);
        color: var(--light);
      }
    }
  }
`;

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

export const SocialIcons: React.FC<{ theme?: "light" | "dark" }> = ({
  theme,
}) => (
  <StyledSocialIcons theme={theme}>
    <ul>
      {Object.keys(socialData).map((network) => {
        const Icon = getNetworkIcon(network);
        return (
          <li
            key={`${network}-${Math.random()
              .toString(36)
              .substring(2, 7)}-${Date.now()}`}
          >
            <Link
              title={`Follow us on ${network}`}
              href={socialData[network as keyof SocialData].url}
              target="_blank"
              rel="noreferrer noopener"
              passHref
            >
              <Icon size={30} />
            </Link>
          </li>
        );
      })}
    </ul>
  </StyledSocialIcons>
);
