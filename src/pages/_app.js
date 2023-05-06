import '@/styles/globals.css'
import Header from './Header'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta property="og:image" content="/product1.jpg" />
        <meta property="og:title" content="MY FIRST STORE" />
        <meta property="og:description" content="PAGE DESCRIPTION" />
      </Head>

          <Header />

          <Component {...pageProps} />

        </div>
        )
}
