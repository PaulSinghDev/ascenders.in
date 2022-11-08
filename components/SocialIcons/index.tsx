import styled from "styled-components";
import { socialData } from "config";
import Link from "next/link";
import { AvailableIcons, SocialData } from "types";
import { getIcon } from "utils/getIcon";
import { forwardRef, Ref } from "react";

const StyledSocialIcons = styled.div<{ theme: string }>`
  ul {
    display: flex;

    li {
      transition: 0.3s ease;
      display: inline-flex;
      border-radius: 5px;
      cursor: pointer;
      color: ${({ theme }) =>
        theme === "light" ? "var(--light)" : "var(--dark-blue)"};

      > a {
        padding: var(--padding-sm);
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

// eslint-disable-next-line
const ForwardLink = forwardRef(({ href, ...rest }: any, ref) => (
  <Link ref={ref as unknown as Ref<HTMLAnchorElement>} href={href} {...rest} />
));

export const SocialIcons: React.FC<{ theme?: "light" | "dark" }> = ({
  theme,
}) => (
  <StyledSocialIcons theme={theme}>
    <ul>
      {Object.keys(socialData).map((network) => (
        <li
          key={`${network}-${Math.random()
            .toString(36)
            .substring(2, 7)}-${Date.now()}`}
        >
          <ForwardLink
            title={`Follow us on ${network}`}
            href={socialData[network as keyof SocialData].url}
            target="_blank"
            passHref
            rel="noreferrer noopener"
          >
            <a
              title={`Follow us on ${network}`}
              href={socialData[network as keyof SocialData].url}
            >
              {getIcon(network as AvailableIcons, 30)}
            </a>
          </ForwardLink>
        </li>
      ))}
    </ul>
  </StyledSocialIcons>
);
