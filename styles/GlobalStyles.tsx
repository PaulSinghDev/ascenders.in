import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --dark: #202020;
  --grey: #707070;
  --teal: #7C9A92;
  --blue: #48A3E0;
  --green: #95AB63;
  --orange: #F19557;
  --light-teal: #7C9A92;
  --off-grey: #C0C9B1;
  --off-blue: #607D8B;
  --light: #F5F5F7;
  --dark-blue: #546E7A;
  --vh: 1vh;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a,
p,
ul,
li {
  margin: 0;
  padding: 0;
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
  letter-spacing: 1.5px;
  line-height: 1.2;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
