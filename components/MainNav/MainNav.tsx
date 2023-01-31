import { useRouter } from "next/router";
import { mainNavLinks } from "data/navLinks";
import Link from "next/link";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { getIcon } from "utils/getIcon";
import { AscendersLogo } from "../AscendersLogo/AscendersLogo";
import { Button } from "../Base";

const MainNavWrapper = styled.div``;

const MainNavDrawerWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1001;

  &[aria-hidden="true"] {
    display: none;
  }

  &[aria-hidden="false"] {
    display: block;
  }

  @media screen and (min-width: 800px) {
    display: none;
    &[aria-hidden="false"] {
      display: none;
    }
  }
`;

const MainNavDrawerContainer = styled.div`
  width: 90%;
  max-height: 70%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 5%;
  border-radius: var(--border-radius-xl) var(--border-radius-xl) 0 0;
  padding: var(--padding-lg);
  background-color: var(--light);
  display: flex;
  flex-direction: column;
`;

const MainNavDrawerUnderlay = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  right: 0;
`;

const NavDrawerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavDrawerContent = styled.div`
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavDrawerFooter = styled.footer``;

const MainNavBar = styled.nav`
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
  height: var(--main-nav-height);
  display: flex;
  align-items: center;

  .nav-logo {
    margin-right: auto;
    margin-left: var(--margin-lg);
  }
`;

const NavDrawerLinksList = styled.ul`
  padding: var(--padding-lg);
`;

const NavDrawerLinksListItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--dark-blue);
  background-color: #fff;
  padding: var(--padding-sm) var(--padding-lg);
  border-radius: var(--border-radius-md);
  margin: var(--margin-sm) 0;
  transition: 0.3s ease;

  &:hover {
    background-color: var(--blue);
    color: #fff;
    cursor: pointer;
    path {
      fill: #fff;
    }
  }

  svg {
    path {
      fill: var(--dark-blue);
    }
  }

  a {
    margin-left: var(--margin-md);
    padding: calc(var(--padding-sm) / 2) var(--padding-sm);
    font-size: 18px;
    flex-grow: 1;
  }
`;

const NavDrawerSearchBar = styled.div`
  form {
    margin: var(--margin-lg);

    border-radius: var(--border-radius-md);
    display: flex;
    background-color: #fff;
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
        background-color: var(--blue);
        color: #fff;
      }
    }
  }
`;

const NavLinksListDesktop = styled.ul`
  display: none;
  padding: 0 var(--margin-xl);
  @media screen and (min-width: 800px) {
    display: flex;
  }
`;

const NavLinksListItem = styled.li`
  a {
    padding: var(--padding-sm) var(--padding-md);
    font-weight: bold;
    color: var(--dark-blue);
    transition: 0.3s ease;
    border-radius: var(--border-radius-md);
    &:hover {
      color: var(--light);
      background-color: var(--blue);
    }
  }
`;

const NavDrawerToggle = styled.div`
  margin-left: auto;
  button {
    padding: calc(var(--padding-sm) / 2);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: var(--dark);
    width: 50px;

    &:hover {
      background-color: var(--orange);
    }
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const MainNav: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const toggleNav: React.MouseEventHandler = () => {
    setOpen(!open);
  };
  const handleSearch: React.MouseEventHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        q: searchTerm,
      },
    });
    toggleNav(event);
    setSearchTerm("");
  };
  return (
    <MainNavWrapper>
      <MainNavBar>
        <AscendersLogo className="nav-logo" />
        <NavLinksListDesktop>
          {mainNavLinks.map((link) => (
            <NavLinksListItem key={Math.random().toString(36).substring(2, 9)}>
              <Link {...link}>{link.label}</Link>
            </NavLinksListItem>
          ))}
        </NavLinksListDesktop>
        <NavDrawerToggle>
          <Button margin="sm" onClick={toggleNav}>
            {getIcon("menu", 30)}
          </Button>
        </NavDrawerToggle>
      </MainNavBar>
      <MainNavDrawerWrapper aria-hidden={!open}>
        <MainNavDrawerUnderlay onClick={toggleNav} />
        <MainNavDrawerContainer>
          <NavDrawerHeader>
            <AscendersLogo size="small" />
          </NavDrawerHeader>
          <NavDrawerSearchBar>
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
          </NavDrawerSearchBar>
          <NavDrawerContent>
            <NavDrawerLinksList>
              {mainNavLinks.map((link) => (
                <NavDrawerLinksListItem
                  key={Math.random().toString(36).substring(2, 9)}
                >
                  {link.icon ? getIcon(link.icon, 20) : null}
                  <Link {...link} passHref>
                    <a onClick={toggleNav} href={link.href} title={link.title}>
                      {link.label}
                    </a>
                  </Link>
                </NavDrawerLinksListItem>
              ))}
            </NavDrawerLinksList>
          </NavDrawerContent>
          <NavDrawerFooter />
        </MainNavDrawerContainer>
      </MainNavDrawerWrapper>
    </MainNavWrapper>
  );
};

export { MainNav };
