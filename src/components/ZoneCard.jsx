import React from 'react'
import { Link } from "react-router-dom";
function ZoneCard({ title, subtitle, bgImage, textColor, linkTo  }) {
  return (
    <Link to={linkTo}>
      <div 
      className='rounded-[20px] h-[120px] md:h-[200px] lg:h-[200px] mt-2 flex items-center p-4 md:p-4 relative bg-cover bg-center overflow-hidden mb-4' 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Title */}
      <h4 className={`text-4xl md:text-5xl  font-bold ${textColor} z-50`}>
        {title} <span className='text-white'>{subtitle}</span>
      </h4>

      {/* Arrow Button */}
      <div className='absolute right-2 bottom-0 md:right-0 md:bottom-0 z-50'>
        <div className="w-[60px] h-[33px] md:w-48 md:h-16 lg:w-64 lg:h-14 bg-[#00000099] flex items-center justify-center rounded-xl">
          <img src="/assets/icons/arrow-right.svg" alt="Arrow Right" className="w-4 md:w-6"/>
        </div>
      </div>

      {/* Overlay */}
      <div className='absolute inset-0'>
        <img src="/assets/icons/overlay.svg" className='w-full h-full object-cover' alt='Overlay' />
      </div>
    </div>
    </Link>
  )
}

export default ZoneCard