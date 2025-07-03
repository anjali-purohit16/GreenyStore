import React from 'react'
import Navbar from '../component/navbar'
import Store from '../component/Store'
import Footer from '../component/Footer'

function Stores() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
      <Store/>
    </div>
    <Footer/>
    </>
  )
}

export default Stores