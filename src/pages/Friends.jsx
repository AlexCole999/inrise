import React from 'react'
import CommonButton from '../components/CommonButton';
import moneyIcon from '../assets/images/money.jpg';
function Friends() {
    const bgImage = '/assets/images/money.svg';
    return (
        <div className='w-full min-h-screen p-4 mx-auto'>
            <div className='py-3 px-4 bg-cover bg-no-repeat overflow-hidden rounded-[20px] relative h-120' style={{ backgroundImage: `url(${moneyIcon})` }}>
                <h4 className='text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center'>Do’stingizni taklif qiling</h4>
                <div className='backdrop-blur bg-[#FFFFFF4D] rounded-[20px] w-54 h-30 flex items-center justify-center flex-col gap-2 mt-5 mb-3'>
                    <span className='p-3 rounded-2xl bg-[#44689D] flex items-center justify-center flex-col w-38 h-11'><b className='text-lg text-white font-bold leading-4'>+1 000</b><p className='text-lg text-white p-0 leading-4 uppercase'>balansga</p></span>
                    <p className='text-lg text-white w-48 text-center leading-6 font-normal'>Ro‘yxatdan o‘tgan do‘stlar</p>
                </div>
                <div className='backdrop-blur bg-[#FFFFFF4D] rounded-[20px] w-54 h-30 flex items-center justify-center flex-col gap-2 mb-3 float-right'>
                    <span className='p-3 rounded-2xl bg-[#44689D] flex items-center justify-center flex-col w-38 h-11'><b className='text-lg text-white font-bold leading-4'>+5 000</b><p className='text-lg text-white p-0 leading-4 uppercase'>balansga</p></span>
                    <p className='text-lg text-white w-48 text-center leading-6 font-normal'>Obuna sotib olgan do‘stlar</p>
                </div>
                <div className="flex items-center absolute bottom-3 right-4 left-4 h-10">
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Referal havola"
                        className="w-full absolute left-0 right-0 h-10 pl-4 pr-12  rounded-[12px] bg-[#FFFFFF4D] text-white placeholder-white backdrop-blur-[20px] focus:outline-none"
                    />

                    {/* Icon on the Right */}
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center">
                        <img src="/assets/icons/link.svg" alt="Link" />
                    </div>
                </div>
                <div className='absolute top-20 sm:top-12 left-3'>
                    <img src="/assets/icons/arrow-1.svg" alt="Arrow" />
                </div>
                <div className='absolute top-28 sm:top-20 right-0'>
                    <img src="/assets/icons/arow-2.svg" alt="Arrow" />
                </div>
            </div>
            <CommonButton
                text="TAKLIF QILISH"
                linkTo="/Subscribe"
            />
        </div>
    )
}

export default Friends