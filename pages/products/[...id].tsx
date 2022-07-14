import type { NextPage } from 'next'

import Header from "../../components/header";
import Footer from "../../components/footer";
import Detail from "../../components/detail";

const view: NextPage = () => {
  return (
    
    <div className="font-sans">
      <Header />
      <Detail />

      <Footer />
    </div>
  )
}

export default view
