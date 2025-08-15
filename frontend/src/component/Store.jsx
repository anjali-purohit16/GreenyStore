import React, { useState, useEffect } from 'react';
import Cards from './Cards'
// import list from '../data/list.json'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Store() {
  const[greeny,setGreeny] = useState([])
  useEffect(()=>{
    const getGreeny = async () => {
      try{
      const res= await axios.get("http://localhost:4001/greeny")
      console.log(res.data);
      setGreeny(res.data);
    }
    catch(error){
      console.log(error)
    }
  };
  getGreeny();
  },[])
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-20 py-4  ">
    <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-2xl font-semihold md:text-4xl">
        hello welcome to <span className ="text-pink-500">Greeny Blog</span> 
      </h1>
      <p className="mt-12">
        Welcome to Greeny Blog — your go-to space for everything green, clean, and serene. 🌱
Whether you're here to explore the beauty of sustainable living, discover eco-friendly tips, or simply get inspired by nature’s wonders — you’ve just found your new happy place! 💚

We believe in spreading awareness, sharing knowledge, and growing together — one mindful step at a time.
      </p>
      <Link to="/">
      <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 suration-300">
        Back</button></Link>
    </div>
    <div className ="mt-12 grid grid-cols-1 md:grid-cols-4">
      {
        greeny.map((item)=>{
          return <Cards key ={item.id} item ={item}/>

        })
      }
    </div>
    </div>
    </>
  )
}

export default Store;
