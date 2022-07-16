import styled from "styled-components";
import { Button } from "../Base";
import { TripSearch } from "../TripSearch";

const HomeHeader: React.FC = () => {
  return (
    <HomeHeaderWrapper>
      <TitleWrapper>
        <h1>
          Find your HEAL journey
          <span>Re-establish a connection with yourself</span>
        </h1>
        <Button margin="sm">Discover</Button>
      </TitleWrapper>
    </HomeHeaderWrapper>
  );
};

const HomeHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-evenly;
`;

const TitleWrapper = styled.div`
  text-align: center;
  h1 {
    color: var(--light);
    font-weight: 400;
    font-size: 2.25rem;
    letter-spacing: 1px;
    > span {
      padding-top: var(--padding-lg);
      display: block;
      font-size: 1.25rem;
      font-weight: 300;
    }
  }

  > button {
    background: transparent;
    border: 1px solid #fff;
    font-size: 1rem;
    padding: var(--padding-md);
    margin: calc(var(--margin-lg) * 1.5) auto 0 auto;
    transition: 0.3s ease;

    &:hover {
      background-color: var(--orange);
      border-color: var(--orange);
    }
  }
`;

export { HomeHeader };
