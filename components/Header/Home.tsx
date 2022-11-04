import styled from "styled-components";
import Link from "next/link";

const HomeHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const TitleWrapper = styled.div`
  text-align: center;
  h1 {
    color: var(--light);
    font-weight: bold;
    font-size: 2.25rem;
    letter-spacing: 1px;
    > span {
      padding-top: var(--padding-lg);
      display: block;
      font-size: 1.25rem;
      font-weight: 300;
    }
  }

  > a {
    display: inline-block;
    color: var(--light);
    border-radius: var(--border-radius-lg);
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

const StyledHeader = styled.header`
  height: 550px;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  background-color: var(--light-teal);
  padding: calc(var(--padding-lg) * 2);
  display: flex;
  flex-direction: column;
  background-image: url("/assets/images/galleries/deoria-tal-chadrishila/chandrashilla-peak.jpg");
  background-size: cover;
  background-position: center;
  justify-content: flex-end;
  position: relative;
  z-index: 0;
  margin: var(--margin-lg) var(--margin-lg);

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    content: "";
    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.9) 55%);
    z-index: -1;
    filter: ;
    height: 50%;
  }
`;

const HomeHeader: React.FC = () => (
  <StyledHeader>
    <HomeHeaderWrapper>
      <TitleWrapper>
        <h1>
          Ascenders
          <span>Re-establish a connection with yourself</span>
        </h1>
        <Link href="/journeys" title="View all journeys">
          Discover
        </Link>
      </TitleWrapper>
    </HomeHeaderWrapper>
  </StyledHeader>
);

export { HomeHeader };
