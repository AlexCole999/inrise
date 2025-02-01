import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonButton from '../components/CommonButton';
import giftbox from '../assets/images/gift-box.png';
import giftboxopen from '../assets/images/gift-box-open.png';
function Inbox() {
    const bgImage = '/assets/icons/subscribe-bg.svg';
    const [isShaking, setIsShaking] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const handleGiftClick = () => {
        if (isOpened) return; // Prevent clicking after the box is open

        setIsShaking(true);

        setTimeout(() => {
            setIsShaking(false);
            setIsOpened(true);
            setShowPopup(true);
            localStorage.setItem("giftOpened", "true"); // Save state to localStorage
        }, 2000); // Shaking lasts for 2 seconds
    };
    const handlePopupClick = () => {
        setIsOpened(false);
        setShowPopup(false);
    };
    return (
        <div className='w-full min-h-screen p-4 mx-auto'>
            <span className='flex items-center space-x-1 py-2'>
                <Link to='/Subscribe'>
                    <img src="/assets/icons/wallet.svg" alt="Wallet" />
                </Link>
                <p className='text-lg text-white font-bold'>:</p>
                <p className='text-lg text-white font-bold'>0</p>
            </span>
            <div className='flex flex-col items-center justify-center rounded-[20px] bg-cover bg-top pt-12 pr-4 pb-3 pl-4 relative mb-4 sm:h-60 lg:h-72' style={{ backgroundImage: `url(${bgImage})` }}>
                <div className='relative'>
                    <span className='font-bold text-white text-2xl'>Keyingilari</span>
                    <div className='absolute top-3 -right-10'>
                        <img src="/assets/icons/arrow-3.svg" alt="Arrow" />
                    </div>
                </div>
                <CommonButton text="990 so‘m" linkTo="/Subscribe" />
                <span className='w-32 h-12 sm:w-64 sm:h-18 lg:w-100 lg:h-24 bg-black rounded-xl flex flex-col items-center justify-center absolute top-[-25px] left-1/2 translate-x-[-50%]'><p className='text-2xl font-bold text-white '>1 marta</p> <p className='text-white text-[16px] leading-4'>bepul</p></span>
            </div>
            <div className=''>
                <div className="flex flex-col items-center justify-center relative">
                    {/* Gift Box */}
                    <img
                        src={isOpened ? giftboxopen : giftbox}
                        alt="Gift Box"
                        className={`cursor-pointer transition-transform   ${isShaking && !isOpened ? "animate-fastShake" : "animate-slowShake"}`}
                        onClick={handleGiftClick}
                    />

                    {/* Popup Message */}
                    {showPopup && (
                        <div className="absolute top-18 bg-[#FFFFFFB2] px-4 py-2 shadow-md animate-popup border-[#44689D] border rounded-3xl text-center cursor-pointer" style={{ backdropFilter: "blur(17.1px)" }} onClick={handlePopupClick} >
                            <h4 className="text-2xl text-dark font-bold">1 kunlik obuna + 1 imkon</h4>
                            <p className="text-dark text-lg leading-5">Va HUDUD shousida qatnashish uchun <b>1 imkon SOVG'A</b> oldingiz</p>
                        </div>
                    )}
                </div>
                <span className='text-2xl text-white font-bold text-center block'>Boxlarni oching va sovg’alarni qo’lga kiriting</span>
                <p className='text-sm text-white text-center underline mt-3'>Batafsil ma'lumot</p>
            </div>

        </div>
    )
}

export default Inbox