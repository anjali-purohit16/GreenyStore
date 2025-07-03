import React from 'react'
import Cards from './Cards'
import list from '../data/list.json'
import { Link } from 'react-router-dom'
function Store() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-20 py-4  ">
    <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-2xl font-semihold md:text-4xl">
        hello welcome to <span className ="text-pink-500">greenyStore</span> 
      </h1>
      <p className="mt-12">
        Lorem ipsum dolor sit, amet consectetur adipisic
        ing elit. Debitis mollitia eveniet quam rem dolor
        em, eum laudantium ducimus? Quidem beatae debitis
         accusamus sit consequatur animi quisquam, fuga s
         equi eligendi, necessitatibus natus inventore 
         laudantium temporibus. Eveniet culpa adipisci, 
         blanditiis debitis amet placeat dolor?
          Reprehenderit excepturi incidunt
         laudantium quasi eius sunt dignissimos?
      </p>
      <Link to="/">
      <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 suration-300">
        Back</button></Link>
    </div>
    <div className ="mt-12 grid grid-cols-1 md:grid-cols-4">
      {
        list.map((item)=>{
          return <Cards key ={item.id} item ={item}/>

        })
      }
    </div>
    </div>
    </>
  )
}

export default Store;
