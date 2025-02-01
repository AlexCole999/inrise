import React, { useState } from "react";
import Slider from 'react-slick';  // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

const SliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    customPaging: (i) => (
    <div
      className={`h-[6px] transition-all duration-300 rounded-full ${
      activeIndex === i ? "w-8 bg-[#A1A1A1]" : "w-[6px] bg-[#8D8D8D]"
    }`}
      />
       
    ),
    appendDots: (dots) => (
    <div className="absolute bottom-[-10px] flex justify-center">
      <ul className="flex justify-center gap-[4px]">{dots}</ul>
    </div>
    ),
  };

  return (
    <div className="w-full relative mb-8">
      <Slider {...settings}>
            <div className="bg-black p-3 overflow-hidden rounded-[20px] mt-3 relative 
                w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 
                mr-[10px] sm:mr-[8px] md:mr-[10px]">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  HUDUD <br /> shousining <br /> yulduziga aylan
                </span>
              
                {/* Responsive Image */}
                <img src="/assets/images/slider-img-1.png" 
                  alt="Slider Image" 
                  className="absolute right-0 top-0 bottom-0 
                  w-[30%] sm:w-[20%] md:w-[20%] 
                  h-full object-contain rounded-[20px]" />
            </div>
            <div className="bg-black p-3 overflow-hidden rounded-[20px] mt-3 relative 
                w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 
                mr-[5px] sm:mr-[8px] md:mr-[10px]">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                Bonus — <br /> qutini 1 marta <br /> ochish bepul
                </span>
              
                {/* Responsive Image */}
                <img src="/assets/images/gift-box.svg" 
                  alt="Slider Image" 
                  className="absolute right-0 top-0 bottom-0 
                  w-[30%] sm:w-[20%] md:w-[20%] 
                  h-full object-contain rounded-[20px]" />
            </div>
            <div className="bg-black p-3 overflow-hidden rounded-[20px] mt-3 relative 
                w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 
                mr-[5px] sm:mr-[8px] md:mr-[10px]">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                dubayga <br /> sayohat <br /> yutib oling!
                </span>
              
                {/* Responsive Image */}
                <img src="/assets/images/burj-al-arab.svg" 
                  alt="Slider Image" 
                  className="absolute right-0 top-0 bottom-0 
                  w-[30%] sm:w-[20%] md:w-[20%] 
                  h-full object-contain rounded-[20px]" />
            </div>
            <div className="bg-black p-3 overflow-hidden rounded-[20px] mt-3 relative 
                w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 
                mr-[5px] sm:mr-[8px] md:mr-[10px]">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                obuna — <br /> <b className='text-[#838383]'>35 000</b> <br />18 800 so’m
                </span>
              
                {/* Responsive Image */}
                <img src="/assets/images/announce.svg" 
                  alt="Slider Image" 
                  className="absolute right-0 top-0 bottom-0 
                  w-[30%] sm:w-[20%] md:w-[20%] 
                  h-full object-contain rounded-[20px]" />
            </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
