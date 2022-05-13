import { Html, Head, Main, NextScript } from 'next/document'

const CustomDocument = () => {
  // const url = ''
  // const title = ''
  // const description = ''

  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/favicon.ico" />
        {/* 
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${url}/assets/images/ogp.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default CustomDocument
