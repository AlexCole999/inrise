import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import CommonButton from '../components/CommonButton';

function Subscribe() {
  const bgImage = '/assets/icons/subscribe-bg.svg'; 
    const navigate = useNavigate();
    return (
      <div className='w-full min-h-screen p-4 mx-auto'>
        <div className='flex items-center justify-center relative py-4'>
            <button onClick={() => navigate(-1)} className='absolute left-0 cursor-pointer'><img src="/assets/icons/arrow-back.svg" alt="Arrow Back" /></button>
            <h4 className='text-2xl font-semibold text-white'>TO’LASH</h4>
        </div>
        <div className='flex sm:h-[250px] md:h-60 lg:h-80 flex-col items-center justify-center rounded-[20px] bg-cover bg-top sm:bg-top md:bg-top pt-12 mt-12 pr-4 pb-3 pl-4 relative mb-4' style={{ backgroundImage: `url(${bgImage})` }}>
          <span className='font-bold text-white text-2xl'>Barchasi Birda</span>
          <span className='font-semibold text-white text-xl'>+ 30ta IMKON SOVG’A </span>
          <CommonButton text="18800 SO ‘MGA" linkTo="/Subscribe" />
          <span className='w-32 sm:w-40 md:w-60 lg:w-90 h-12 sm:h-16 md:h-20 lg:h-24 bg-black rounded-xl text-2xl sm:text-3xl md:text-4xl font-bold text-white flex items-center justify-center absolute top-[-25px] left-1/2 translate-x-[-50%]'>1 oy</span>
        </div>
        <div className='bg-[#00000080] rounded-xl flex items-center justify-center h-18 mb-2'>
          <img src="/assets/icons/subscribe-logo1.svg" alt="" />
        </div>
        <div className='bg-[#00000080] rounded-xl flex items-center justify-center h-18 mb-2'>
          <img src="/assets/icons/subscribe-logo2.svg" alt="" />
        </div>
        <div className='bg-[#00000080] rounded-xl flex items-center justify-center h-18 mb-2'>
          <img src="/assets/icons/subscribe-logo3.svg" alt="" />
        </div>
      </div>
    )
}

export default Subscribe