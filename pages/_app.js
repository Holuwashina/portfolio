import Head from 'next/head';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../assets/styles/appTheme";
import { CssBaseline, useMediaQuery, Paper, Container } from '@mui/material';
import { useTheme } from "@mui/styles";


function MyApp({ Component, pageProps }) {

  // const themeHook = useTheme()
  const smMatches = useMediaQuery(theme.breakpoints.only('sm'))
  const xsMatches = useMediaQuery(theme.breakpoints.only('xs'))
  // const smMatches = useMediaQuery(theme.breakpoints.up('md'))

  const xs = {
    paddingLeft: 10,
    paddingRight: 10
  }

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Zhine portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Header />
        <Container maxWidth="lg" sx={{ pt: 16, pb: 5 }}>
        <Paper elevation={0} >
          <Component {...pageProps} />
        </Paper>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp