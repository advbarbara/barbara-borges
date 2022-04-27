import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background: #fafafa;
    -webkit-font-smoonthig: antialiased;
  }
  body, input, button {
    font: 16px Poppins, sans-serif;
  }
  button {
    cursor: pointer;
  }
  #root {
    padding: 20px 40px;

    @media (min-width: 1200px) {
      margin: 0 auto;
      max-width: 1200px;
    }
  }
`;