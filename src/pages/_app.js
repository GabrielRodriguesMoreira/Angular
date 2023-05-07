import '@/styles/globals.css'
import Header from './Header'
import Head from 'next/head'



export default function App({ Component, pageProps }) {
  return (
    <div>
          <Header />

          <Component {...pageProps} />

        </div>
        )
}
