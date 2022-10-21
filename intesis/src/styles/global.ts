import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #fff;
    --background-button: #EAF1F8;

    --green: #27CFBD;
    --green-light: rgba(39, 207, 189, 0.7);

    --red: #EA3F7A;
    --red-light: rgba(234, 63, 122, 0.7);

    --blue: #2873B6;
    --blue-light: rgba(40, 115, 182, 0.7);
    
    --textLabel: #121214; //texto da label
    --textTable: #929292; //texto da tabela
    --input: #d5d5d5; //borda do input

    --thead: #808080; //linha do thead
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75px; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5px; //14px
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  input {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol, ul {
	  list-style: none;
  }
`