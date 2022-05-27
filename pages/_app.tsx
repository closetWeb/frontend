import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <GlobalStyles/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
