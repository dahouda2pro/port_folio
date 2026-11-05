import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    font-family: Inter, Arial, sans-serif;
    line-height: 1.5;
    font-size: 16px;
    background: #fff;
    color: #172b46;
    -webkit-font-smoothing: antialiased;
  }
  html[lang='ko'] body { font-family: 'Noto Sans KR', 'Malgun Gothic', Arial, sans-serif; }
  button, a { font: inherit; }
  a:focus-visible { outline: 3px solid #8db8f0; outline-offset: 3px; }
  ::selection { background: #dceaff; color: #14243b; }
`;

export default GlobalStyles;
