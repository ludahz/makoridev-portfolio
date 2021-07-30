import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import theme from '../styles/themes/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
