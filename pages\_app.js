import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ecommerce Website</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;