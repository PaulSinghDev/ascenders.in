import { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: open-sans;
        src: url("/assets/fonts/OpenSans-Light.ttf");
        font-weight: 100;
        font-style: light;
        font-display: swap;
    }
    @font-face {
        font-family: open-sans;
        src: url("/assets/fonts/OpenSans-Regular.ttf");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: open-sans;
        src: url("/assets/fonts/OpenSans-Bold.ttf");
        font-weight: 700;
        font-style: bold;
        font-display: swap;
    }
    @font-face {
        font-family: open-sans;
        src: url("/assets/fonts/OpenSans-ExtraBold.ttf");
        font-weight: 900;
        font-style: extra-bold;
        font-display: swap;
    }
`;
