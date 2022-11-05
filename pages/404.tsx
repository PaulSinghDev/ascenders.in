import { useRouter } from "next/router";
import { useState } from "react";
import Meta from "@/components/Base/Meta";
import { JourneysCarousel } from "@/components/JourneysCarousel/JourneysCarousel";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { Button, Header } from "../components";

const MainSection = styled.main``;

const JourneySearch = styled.div`
  background-color: var(--blue);
  padding: var(--padding-lg);
  display: flex;
  justify-content: center;
  border-radius: var(--border-radius-xl);
  margin: var(--margin-xl) var(--margin-xl) calc(var(--margin-xl) * 2)
    var(--margin-xl);
  @media screen and (min-width: 800px) {
    margin: calc(var(--margin-xl) * 2) 0 calc(var(--margin-xl) * 4) 0;
  }
  form {
    margin: var(--margin-lg);
    max-width: 500px;
    border-radius: var(--border-radius-md);
    display: flex;
    background-color: #fff;
    width: 100%;

    input {
      color: var(--dark-blue);
      width: 100%;
      font-size: 16px;
      padding: var(--padding-md);
      border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
      border: none;
      display: inline-block;
    }
    button {
      display: inline-block;
      margin: 0;
      border-radius: 0;
      background: transparent;
      color: var(--dark-blue);
      border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;

      &:hover {
        background-color: var(--orange);
        color: #fff;
      }
    }
  }
`;

const Custom404: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const handleSearch: React.MouseEventHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        journeys: searchTerm,
      },
    });
    setSearchTerm("");
  };
  return (
    <MainSection>
      <Meta
        title="Sorry we can't find what you're looking for | Ascenders"
        description="The page you requested cannot be found on this server please try searching for something else."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/404`}
      />
      <Header
        pageType="info"
        heading="Sorry that page does not exist on this website"
        subheading="It is possible that the page you are looking for was either moved or deleted. Please use the search bar below to try and search for it."
      />
      <JourneySearch>
        <form action="/search">
          <input
            placeholder="Search for your journey"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
          />
          <Button type="submit" onClick={handleSearch}>
            <BsSearch />
          </Button>
        </form>
      </JourneySearch>
      <JourneysCarousel
        description={["Alternatively have a browse of our available journeys"]}
      />
    </MainSection>
  );
};
export default Custom404;
