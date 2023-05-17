import { Html, Head, Main, NextScript, Products} from 'next/document'
  

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <meta property="og:image" content="/product1.jpg" />
        <meta property="og:title" content="MY FIRST STORE" />
        <meta property="og:description" content="PAGE DESCRIPTION" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
