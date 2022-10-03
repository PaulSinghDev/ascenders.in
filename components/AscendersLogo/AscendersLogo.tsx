import styled from "styled-components";

const AscendersLogoWrapper = styled.div<{ size?: "small" }>`
  text-align: center;
  padding: var(--padding-sm);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span:first-child {
    font-family: eurosoft;
    font-weight: bold;
    text-transform: lowercase;
    display: block;
    font-size: ${({ size }) => (size === "small" ? 18 : 24)}px;
    margin: 0;
    line-height: 1.1;
  }
  > span:last-child {
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
    <span>Ascenders</span>
    <span>Go Beyond</span>
  </AscendersLogoWrapper>
);

export { AscendersLogo };
