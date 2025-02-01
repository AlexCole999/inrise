import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import CommonButton from '../components/CommonButton';

function Vazifalar() {
    const bgImage = '/assets/images/vezifalar-bg.svg'; 
  return (
    <div className='w-full min-h-screen p-4 mx-auto'>
       <div className='flex rounded-[20px] bg-cover bg-top pt-12 sm:pt-24 mt-12 pr-3 pb-3 pl-3 relative mb-4 flex-col' style={{ backgroundImage: `url(${bgImage})` }}>
          <div className='flex items-center justify-between w-full py-3 border-b border-[#FFFFFF66]'>
            <p className='text-lg text-white font-bold m-0'>1. Videoni ko’rish</p>
            <span className='p-3 rounded-2xl bg-[#44689D] flex items-center justify-center flex-col w-25 h-11'><b className='text-lg text-white font-bold leading-4'>+1 000</b><p className='text-lg text-white p-0 leading-4'>balansga</p></span>
          </div>
          <div className='flex items-center justify-between w-full py-3'>
            <p className='text-lg text-white font-bold m-0'>2. Kanalga obuna bo’lish</p>
            <span className='p-3 rounded-2xl bg-[#44689D] flex items-center justify-center flex-col w-25 h-11'><b className='text-lg text-white font-bold leading-4'>+1 000</b><p className='text-lg text-white p-0 leading-4'>balansga</p></span>
          </div>
          <div className='w-40 sm:w-72 h-12 sm:h-18 bg-black rounded-xl text-2xl font-bold text-white flex items-center gap-3 justify-center absolute top-[-20px] left-1/2 translate-x-[-50%]'><img src="/assets/images/youtube.svg" alt="" /><p className='text-[18px] sm:text-3xl md:text-4xl text-white font-bold'>Youtube</p></div>
        </div>
        <div className='flex rounded-[20px] bg-cover bg-top pt-12 sm:pt-24 mt-12 pr-3 pb-3 pl-3 relative mb-4 flex-col' style={{ backgroundImage: `url(${bgImage})` }}>
          <div className='flex items-center justify-between w-full py-3'>
            <p className='text-lg text-white font-bold m-0'>2. Kanalga obuna bo’lish</p>
            <span className='p-3 rounded-2xl bg-[#44689D] flex items-center justify-center flex-col w-25 h-11'><b className='text-lg text-white font-bold leading-4'>+1 000</b><p className='text-lg text-white p-0 leading-4'>balansga</p></span>
          </div>
          <div className='w-40 sm:w-72 h-12 sm:h-18 bg-black rounded-xl text-2xl font-bold text-white flex items-center gap-3 justify-center absolute top-[-20px] left-1/2 translate-x-[-50%]'><img src="/assets/images/insta.svg" alt="" /><p className='text-[18px] sm:text-3xl md:text-4xl text-white font-bold'>Instagram</p></div>
        </div>
        <div className='flex rounded-[20px] bg-cover bg-top pt-12 sm:pt-24 mt-12 pr-3 pb-3 pl-3 relative mb-4 flex-col' style={{ backgroundImage: `url(${bgImage})` }}>
          <div className='flex items-center justify-between w-full py-3'>
            <p className='text-lg text-white font-bold m-0'>2. Kanalga obuna bo’lish</p>
            <span className='p-3 rounded-2xl bg-[#44689D] flex items-center justify-center flex-col w-25 h-11'><b className='text-lg text-white font-bold leading-4'>+1 000</b><p className='text-lg text-white p-0 leading-4'>balansga</p></span>
          </div>
          <div className='w-40 sm:w-72 h-12 sm:h-18 bg-black rounded-xl text-2xl font-bold text-white flex items-center gap-3 justify-center absolute top-[-20px] left-1/2 translate-x-[-50%]'><img src="/assets/images/telegram.svg" alt="" /><p className='text-[18px] sm:text-3xl md:text-4xl text-white font-bold'>Telegram</p></div>
        </div>
    </div>
  )
}

export default Vazifalar