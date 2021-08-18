import React, { useState } from 'react';

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/theme/configTheme'
import { GlobalStyles } from '../styles/global'
import { ContentWrapper } from '../styles/wrapper'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ContentWrapper>
        <GlobalStyles />
        <Component {...pageProps} />
      </ContentWrapper>
    </ThemeProvider>
  )
}
export default MyApp
