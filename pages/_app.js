import Head from 'next/head';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../assets/styles/appTheme";
import { CssBaseline, Container } from '@mui/material';


function MyApp({ Component, pageProps }) {
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
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp