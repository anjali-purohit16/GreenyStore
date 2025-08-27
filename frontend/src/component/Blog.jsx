import React, { useState, useEffect } from 'react';
import Cards from './Cards';  
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from "axios";

function Blog() {
  const [greeny, setGreeny] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGreeny = async () => {
      try {
        const res = await axios.get("http://localhost:4001/greeny");
        // ✅ Filter only blog category
        const blogs = res.data.filter((data) => data.category === "blog");
        setGreeny(blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    getGreeny();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 bg-[#edf2f7] dark:bg-slate-900 rounded-xl">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-[#1a3c34] dark:text-white mb-4">
          From Our Blog
        </h1>
        <p className="text-lg font-medium text-[#4a635d] dark:text-gray-300 leading-relaxed">
          At <span className="text-green-600 font-semibold">Greeny</span>, we reconnect people with nature.
          Whether you're a seasoned gardener or just starting out, our guides and stories help you grow your love for green spaces.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-lg">Loading blogs...</p>
      ) : greeny.length > 0 ? (
        <Slider {...settings}>
          {greeny.map((item) => (
            <Cards key={item._id || item.id} item={item} />
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-600">No blogs available.</p>
      )}
    </div>
  );
}

export default Blog;
