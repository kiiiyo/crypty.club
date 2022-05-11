import Head from 'next/head'
import { Fragment } from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default CustomApp
