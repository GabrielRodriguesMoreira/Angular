import '@/styles/globals.css';
import React from 'react';
import { RecoilRoot } from 'recoil'; // Import RecoilRoot
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../services/WhatsAppButton';

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <WhatsAppButton className="px-3 py-3 fixed bottom-4 right-4 p-2 rounded-full bg-green-400 text-white cursor-pointer" />
    </RecoilRoot>
  );
}
