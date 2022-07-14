import type { NextPage } from 'next'


import Header from "../components/header";
import MainSwiper from "../components/mainSwiper";
import Product from "../components/product";
import Promotion from "../components/promotion";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    
    <div className="font-sans">
      <Header />
      <MainSwiper />
      <Product />
      <Promotion />
      <Footer />
    </div>
  )
}

export default Home
