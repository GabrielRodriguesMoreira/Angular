import '@/styles/globals.css'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import WhatsAppButton from '../services/WhatsAppButton';
import { CartContextProvider } from '../services/CartContext';


export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
      <Footer />
      <WhatsAppButton className="px-3 py-3 fixed bottom-4 right-4 p-2 rounded-full bg-green-400 text-white cursor-pointer" />
    </div>
  )
}
