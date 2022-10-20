import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #fff;
    --background-button: #EAF1F8;

    --green: #27CFBD;
    --red: #EA3F7A;
    --blue: #2873B6;
    
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