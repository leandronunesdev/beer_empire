import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    }

    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }

`;
