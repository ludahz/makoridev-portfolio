import { createGlobalStyle } from 'styled-components'
import theme from './themes/theme'

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  
  max-width: calc(100vw - 15%);
  background: black;
  background-image: ${theme.gradient.linear};
  

  margin: 0 auto;
  scroll-behavior: smooth;
  /* background-position-x: center; */
  /* background-position-y: top 58px; */
  display: block;
  @media ${theme.breakpoints.md} {
    max-width: calc(100vw - 10%);
  }
}
body{
  font-family: ${theme.fonts.main};
  line-height: 1.5;

  overflow: scroll;
  background-color:hsl(223, 33%, 15%);
  background: hsla(0, 0%, 2%, 1);
  background: linear-gradient(90deg, hsla(263, 89%, 4%, 0.9) 0%, hsla(0, 0%, 0%, 1) 100%);
  background: linear-gradient(180deg, hsla(0, 0%, 0%, 0.5) 0%, hsla(0, 0%, 0%, 1) 100%);

}
a{
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
`

export default GlobalStyle
