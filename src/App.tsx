import { createGlobalStyle } from "styled-components";

// import components
import Landing from "./components/Landing Component/Landing";

const GlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: 18px;
    font-family: 'Josefin Sans', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /*  */

  :root{
    /* primary-colors */
    --bright-blue : hsl(220, 98%, 61%);
    --check-background : linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);

    /* light themes */
    --very-light-gray : hsl(0, 0%, 98%);
    --very-light-grayish-blue : hsl(236, 33%, 92%);
    --light-grayish-blue : hsl(233, 11%, 84%);
    --dark-grayish-blue : hsl(236, 9%, 61%);
    --very-dark-grayish-blue : hsl(235, 19%, 35%);

    /* dark themes */
    --very-dark-blue : hsl(235, 21%, 11%);
    --very-dark-desaturated-blue : hsl(235, 24%, 19%);
    --light-grayish-blue : hsl(234, 39%, 85%);
    --light-grayish-blue-hover: hsl(236, 33%, 92%);
    --dark-grayish-blue : hsl(234, 11%, 52%);
    --very-dark-grayish-blue : hsl(233, 14%, 35%);
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Landing />
    </>
  );
}

export default App;
