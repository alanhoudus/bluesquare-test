import fetchAPI from '@/src/utils/fetch';
import Cookies from 'js-cookie';
import type { AppProps } from 'next/app'
import { StrictMode, useEffect } from 'react';
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps} />
  )
}
