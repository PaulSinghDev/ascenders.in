import styled from "styled-components";

const StyledHeader = styled.header`
  background: transparent;
  padding: calc(var(--padding-lg) * 2);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  border-radius: 40px;
  overflow: hidden;
  margin: var(--padding-lg);

  color: var(--dark);
`;

const InfoHeaderWrapper = styled.div`
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
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 1px;
    position: relative;
    padding-bottom: 1rem;
    font-weight: bold;

    &::after {
      position: absolute;
      width: 30px;
      height: 2px;
      bottom: -1px;
      left: calc(50% - 15px);
      content: "";
      background-color: var(--dark);
    }
  }
  > span {
    padding-top: var(--padding-lg);
    display: block;
    font-size: 16px;
  }
`;

const InfoHeader: React.FC<{
  heading?: string;
  backgroundUrl?: string;
  subheading?: string;
}> = ({ heading, subheading }) => (
  <StyledHeader>
    <InfoHeaderWrapper>
      <TitleWrapper>
        <h1>{heading || "All Journeys"}</h1>
        <span>{subheading || "Visit the new you"}</span>
      </TitleWrapper>
    </InfoHeaderWrapper>
  </StyledHeader>
);

export { InfoHeader };
