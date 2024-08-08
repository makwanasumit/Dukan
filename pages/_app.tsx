import "@/styles/globals.css";
import "@/styles/products.css";
import type { AppProps } from "next/app";
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import {Lobster} from "next/font/google";



const lobster_init = Lobster({
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-lobster',

})

export default function App({ Component, pageProps }: AppProps) {
  <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
    
  </Head>

  useEffect(() => {
    console.log("I am useeffect from app.js")
  }, [])
  const [cart, setcart] = useState([])
  const [reloadKey, setreloadKey] = useState(1)





  const addToCart = (item: never, qty: never, price: never) => {
    let newCart: any = cart;
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price]);
    }

    setcart(newCart);
    setreloadKey(Math.random())
  }


  const removeFromCart = (item: never, qty: any) => {
    let newCart = cart;
    let index = newCart.indexOf(item)
    newCart.splice(index);
    setcart(newCart);
  }

  const clearCart = (item: any, qty: any) => {

  }






  return (
    <>

      <Nav cart={cart} key={reloadKey} />
      <Component className={lobster_init.className} cart={cart} clearCart={clearCart} removeFromCart={removeFromCart} addToCart={addToCart} {...pageProps} />
      <Footer />
    </>
  )
}
