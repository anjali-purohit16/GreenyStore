import React, { useState, useEffect } from 'react';


function Banner() {
  const images = [
  "/image/pexels.webp",
  "/image/amoney.webp",
  "/image/lipstick.webp",
  "/image/snake.webp"
];

const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent(prev => (prev + 1) % images.length);
  }, 4000); // Change every 4 seconds

  return () => clearInterval(interval);
}, [images.length]);

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-8 mx-8">
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-10  md:mt-32">
      <div className ="space-y-9">
      <h1 className="text-4xl font-bold">“Plant the Future, One Leaf at a Time 🌿”</h1><br/>
      <span className = "text-3xl font-semibold  text-green-700">  Discover, nurture, and grow with our expert guides and eco-friendly plants.</span>
      <p className = "text-xl font-bold  text-red-600">
        Hey there, plant lover! Welcome to <b className=" bg-white text-black dark:bg-slate-900 dark:text-white ">greenyStore .</b><br/>
       
        We're on a mission to bring nature closer to you — one plant at a time .
        <br/> <br/>
        </p>
        <p className = "text-xl font-bold  text-black-600">
       Whether you're looking to add some green to your room, learn how to grow your own little garden,
       or just understand why trees matter for our planet’s future — you’re in the right place.

      <br/> <br/>
        🌱 Shop a wide variety of beautiful, healthy plants.
         <br/> <br/>
        📖 Learn with easy guides, tips, and care tutorials.
        {/* <br/> <br/>
        🌍 Discover the importance of greenery and how you can make a difference. */}
        <br/> <br/>
        🤖 Chat with our smart AI assistant for help, ideas, or even plant suggestions!

        <br/> <br/>Greeny, we believe that growing a plant is more than a hobby — 
        it’s a way of creating life, peace, and a better future. So, come grow with us!</p>
      
       <label className="input input-bordered flex items-center gap-2 md:w-[500px]">
        
        <svg className="h-[1em] opacity-50" 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
       <g
       strokeLinejoin="round"
       strokeLinecap="round"
       strokeWidth="2.5"
        fill="none"
        stroke="currentColor"
        >
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
       </svg>
       <input type="email" className="grow" placeholder="Enter your email id to login" required />
      </label>
      </div>
      <button className=" btn mt-6 btn-primary">Submit</button>
      </div>
     
     
     
    {/* rightside */}
    <div className="order-1 w-full md:w-1/2 h-[300px] md:h-[500px] relative overflow-hidden rounded-lg mt-20 md:mt-36">
  <img
    src={images[current]}
    alt="banner plant"
    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
  />
</div>

    </div>
    </>
  )
}

export default Banner
