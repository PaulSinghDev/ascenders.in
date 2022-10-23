import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --dark: #262628;
  --grey: #707070;
  --teal: #7C9A92;
  --blue: #48A3E0;
  --green: #95AB63;
  --dark-green: #568459;
  --orange: #ed7a2d;
  --light-teal: #7C9A92;
  --grey: #838383;
  --off-grey: #C0C9B1;
  --off-blue: #607D8B;
  --light: #F5F5F7;
  --light-grey: #f2f4f5;
  --dark-blue: #546E7A;
  --vh: 1vh;
  --padding-sm: 0.5rem;
  --padding-md: 0.75rem;
  --padding-lg: 1rem;
  --margin-sm: 0.5rem;
  --margin-md: 0.75rem;
  --margin-lg: 1rem;
  --margin-xl: 2rem;
  --border-radius-sm: 0.5rem;
  --border-radius-md: 0.75rem;
  --border-radius-lg: 1rem;
  --border-radius-xl: 2rem;
  --main-nav-height: 60px;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: open-sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  list-style: none;
}

button {
  appearance: none;
}

html {
  box-sizing: border-box;
}

body {
  line-height: 1.6;
  letter-spacing: 0.15pt;
  padding-top: var(--main-nav-height);
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  margin-bottom: 12px;
  &:last-child,
  &:last-of-type {
    margin-bottom: 0;
  }
}

* {
  box-sizing: inherit;
  font-family: inherit;
  line-height: inherit;
}

main {
  max-width: 1280px;
  margin: auto;
}


html.loading {
  #loader {
    opacity:1;
    z-index: 99999999;
    visibility: visible;
    &::before {
      animation 2s linear spin infinite;
    }
  }
}
#loader {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
  content: "";
  opacity: 0;
  z-index: -1;
  visibility: hidden;
  transition: 0.2s ease;
  &::before {
    position: absolute;
    top: calc(50% - 37.5px);
    left: calc(50% - 37.5px);
    width: 75px;
    height: 75px;
    border: 8px solid var(--blue);
    border-bottom-color: var(--light);
    border-radius: 50%;
    content: "";
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
`;
