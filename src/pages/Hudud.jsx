import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommonButton from '../components/CommonButton';
import Popup from '../components/Popup';
function Hudud() {
    const bgHudud = '/assets/images/hudud-shou.png'; 
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className='w-full min-h-screen p-4 mx-auto'>
        <div className='flex items-center justify-between'>
            <span className='flex items-center space-x-1 py-2'>
                <Link to='/Subscribe'>
                    <img src="/assets/icons/wallet.svg" alt="Wallet" />
                </Link>
                <p className='text-lg text-white font-bold'>:</p>
                <p className='text-lg text-white font-bold'>0</p>
            </span>
            <span className="cursor-pointer relative z-100" onClick={() => setIsPopupOpen(true)}>
                <img src="/assets/icons/i.svg" alt="Info Icon" />
            </span>
        </div>
        <div className='w-full h-92 sm:h-112 md:h-124 rounded-[20px] bg-cover bg-center bg-no-repeat overflow-hidden relative mt-3' style={{ backgroundImage: `url(${bgHudud})` }}>
           <h2 className='text-5xl text-white font-bold z-50 relative text-center py-3'>HUDUD SHOU</h2>
           <div className='flex items-center gap-1 z-50 absolute bottom-2 right-2 mx-auto left-2'>
                <div className='flex flex-col items-center justify-center space-y-1 rounded-[20px] bg-[#FFFFFF4D] backdrop-blur-lg h-24 flex-1'>
                    <p className='text-2xl text-white m-0'>Imkonlar:</p>
                    <h4 className='text-[40px] text-white leading-10 font-boldm-0'>10</h4>
                </div>
                <div className='flex flex-col items-center justify-center space-y-1 rounded-[20px] bg-[#FFFFFF4D] backdrop-blur-lg h-24 flex-1'>
                    <p className='text-2xl text-white m-0'>O’yin sanasi:</p>
                    <h4 className='text-[40px] text-white leading-10 font-bold'>18.11</h4>
                </div>
           </div>
           <div className='absolute inset-0 bg-[#0000008F]'></div> 
        </div>
        <CommonButton 
          text="IMKONNI OSHIRISH"
          linkTo="/Subscribe" 
        />
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}

export default Hudud