import * as React from 'react';
import Head from 'next/head';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Paper, Container } from '@mui/material';
import { ColorModeContext } from '../assets/styles/appTheme';
import ToggleColorMode from '../assets/styles/appTheme';

function MyApp({ Component, pageProps }) {
  const { colorMode, theme } = ToggleColorMode();

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Zhine portfolio' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Container sx={{ pt: 16, pb: 5 }}>
            <Paper elevation={0}>
              <Component {...pageProps} />
            </Paper>
          </Container>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default MyApp;
