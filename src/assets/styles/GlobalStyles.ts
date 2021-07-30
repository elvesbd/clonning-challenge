import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto',sans-serif;
  }

  :root {
    --background-card-profile: #3d8088;
    --background-page: #f2f3f5;
    --blue-500: #03c2f8;
    --blue-400: #609eb1;
    --blue-300: #90b3c4;
    --gray-200: #afbdbe;
    --gray-100: #e0dfdf;
    --white: #ffffff;
    --green-100: #cfeff3;
    --green-200: #cdd6a4;
    --green-500: #8ccd01;
    --orange: #ff7f00;
    --brown-100: #d7c6a2;
    --white-100 : #f2fffe;

  }
`;
