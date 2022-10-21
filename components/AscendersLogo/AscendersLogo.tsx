import styled from "styled-components";
import Link from "next/link";

const AscendersLogoWrapper = styled.div<{ size?: "small" }>`
  text-align: center;
  padding: var(--padding-sm);
  a {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span:first-child {
    font-family: eurosoft;
    font-weight: bold;
    text-transform: lowercase;
    display: block;
    font-size: ${({ size }) => (size === "small" ? 18 : 24)}px;
    margin: 0;
    line-height: 1.1;
  }

  span:last-child {
    line-height: 1;
    margin: 0;
    font-family: open-sans;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--orange);
    font-size: ${({ size }) => (size === "small" ? 9 : 12)}px;
  }
`;

const AscendersLogo: React.FC<{ className?: string; size?: "small" }> = ({
  className,
  size,
}) => (
  <AscendersLogoWrapper size={size} className={className}>
    <Link href="/" title="Go to home page">
      <a href="/" title="Go to home page">
        <span>Ascenders</span>
        <span>Go Beyond</span>
      </a>
    </Link>
  </AscendersLogoWrapper>
);

export { AscendersLogo };
