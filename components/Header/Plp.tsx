import styled from "styled-components";

const StyledHeader = styled.header<{ type?: string; bg?: string }>`
  ${(props) => {
    const { type, bg } = props;
    return `
        min-height: ${type === "hero" ? "calc(var(--vh) * 100)" : "400px"};
        background-color: var(--light-teal);
        padding: calc(var(--padding-lg) * 2);
        display: flex;
        flex-direction: column;
        background-image: url("${
          bg ||
          "/assets/images/journeys/thumbnails/ascenders-journeys-ali-bugyal-trek.jpg"
        }");
        background-size: cover;
        background-position: center;
        position: relative;
        z-index: 0;
        border-radius: 40px;
        overflow: hidden;
        margin: var(--padding-lg);
        
        &::before {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
            backdrop-filter: blur(1px) brightness(0.5);
            z-index: -1;
        }
    `;
  }}
`;

const PlpHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  border-radius: 20px;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  text-align: center;
  h1 {
    color: var(--light);
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 1px;
    position: relative;
    padding-bottom: 1rem;
    &::after {
      position: absolute;
      width: 30px;
      height: 2px;
      bottom: -1px;
      left: calc(50% - 15px);
      content: "";
      background-color: #fff;
    }
  }
  > span {
    padding-top: var(--padding-lg);
    display: block;
    font-size: 14px;
    font-weight: 300;
    color: #fff;
  }
`;

const PlpHeader: React.FC<{
  heading?: string;
  backgroundUrl?: string;
  subheading?: string;
}> = ({ heading, subheading, backgroundUrl }) => (
  <StyledHeader bg={backgroundUrl}>
    <PlpHeaderWrapper>
      <TitleWrapper>
        <h1>{heading || "All Journeys"}</h1>
        <span>{subheading || "Visit the new you"}</span>
      </TitleWrapper>
    </PlpHeaderWrapper>
  </StyledHeader>
);

export { PlpHeader };
