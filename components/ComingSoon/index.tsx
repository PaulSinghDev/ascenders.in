import styled from "styled-components";
import { SocialIcons } from "../SocialIcons";
export const ComingSoon: React.FC = ({ children }) => {
  return (
    <StyledComingSoon>
      <h1>
        Ascenders <span>|</span> H.E.A.L
      </h1>
      <span>Coming soon</span>
      <SocialIcons />
    </StyledComingSoon>
  );
};
const StyledComingSoon = styled.div`
  width: 100%;
  height: calc(var(--vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
  }

  &::after {
    background: url("/assets/images/DSC09417.jpeg");
    background-size: cover;
    z-index: -2;
    filter: blur(1px);
  }

  &::before {
    background: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }

  > h1 {
    margin-top: 0;
    color: var(--light);
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);

    > span {
      font-weight: 100;
    }
  }

  > span {
    color: var(--light);
    font-size: 1.3rem;
    font-weight: normal;
    text-transform: uppercase;
    background-color: var(--blue);
    padding: 0.5rem 1rem;
    transform: rotate(-2deg);
    margin-bottom: 2rem;
    border-radius: 10px;
  }
`;
