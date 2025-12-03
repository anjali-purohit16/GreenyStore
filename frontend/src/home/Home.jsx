import React from 'react'
import Navbar from "../component/Navbar.jsx";
import Banner from '../component/Banner'
import Blog from '../component/Blog'
import Footer from '../component/Footer'

function Home() {
  return (
   <>
    <Navbar />
    <Banner />
    <Blog />
    <Footer />
   </>
  )
}

export default Home