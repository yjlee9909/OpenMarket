import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  :root{
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background: #E6E8FC;
  }
  button {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    background: none;
    border: none;
    cursor: pointer;
  }
  a {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  input:focus {
    font-size: 16px;
  }
  .hidden {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%); 
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
  }
  
`;

export default GlobalStyle;
