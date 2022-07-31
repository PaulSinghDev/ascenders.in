import styled from "styled-components";
import { HomeHeader } from "./Home";

type HeaderProps = {
  type: "hero" | "normal";
  pageType: "home";
} & React.HTMLAttributes<HTMLDivElement>;

const StyledHeader = styled.header<{ type: string }>`
  ${(props) => {
    const { type } = props;
    return `
        min-height: ${type === "hero" ? "calc(var(--vh) * 100)" : "400px"};
        background-color: var(--light-teal);
        padding: calc(var(--padding-lg) * 2);
        display: flex;
        flex-direction: column;
        background-image: url("/assets/images/interests/thumbnails/beach-party.jpeg");
        background-size: cover;
        background-position: center;
        position: relative;
        z-index: 0;
        
        &::before {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
            backdrop-filter: blur(5px) brightness(0.5);
            z-index: -1;
            filter: 
        }
    `;
  }}
`;

const Header: React.FC<HeaderProps> = ({
  type,
  pageType,
  children,
  ...rest
}) => (
  <StyledHeader type={type} {...rest}>
    <HomeHeader />
  </StyledHeader>
);

export { Header };
