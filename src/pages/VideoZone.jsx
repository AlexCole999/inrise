import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Slider from 'react-slick';  // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
function VideoZone() {
    const navigate = useNavigate();
    const settings = {
        // dots: true,  // Enable dots at the bottom
        arrows: false,
        infinite: false,  // Infinite loop of slides
        speed: 500,  // Slide transition speed
        slidesToShow: 3,  // Only show 1 slide at a time
        slidesToScroll: 3,  // Scroll one slide at a time
        centerMode: false,  // Enable center mode to keep the active slide centered
        focusOnSelect: true,  // Allow selecting slides directly by clicking dots
    };
    return (

        <div className='w-full min-h-screen p-4 mx-auto'>
            <div className='flex items-center justify-center relative py-4'>
                <button onClick={() => navigate(-1)} className='absolute left-0 cursor-pointer'><img src="/assets/icons/arrow-back.svg" alt="Arrow Back" /></button>
                <h4 className='text-2xl font-semibold text-white'>Video Zone</h4>
            </div>
            <div className='mb-0'>
                <h5 className='text-lg font-bold text-white py-2 mb-2'>Akademiya</h5>
                <Slider {...settings}>
                    <div className='flex flex-col pr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img1.png" className='w-full' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Физика</p>
                    </div>
                    <div className='flex flex-col pr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img2.png" className='w-full' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Информатика</p>
                    </div>
                    <div className='flex flex-col pr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img3.png" className='w-full' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Принципы построения SMM</p>
                    </div>
                    <div className='flex flex-colpr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img4.jpg" className='w-full h-full object-cover' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Цели в SMM</p>
                    </div>
                </Slider>
            </div>
            <div className='mb-3'>
                <h5 className='text-lg font-bold text-white py-2 mb-2'>Skill — Profi</h5>
                <Slider {...settings}>
                    <div className='flex flex-col pr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img1.png" className='w-full' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Физика</p>
                    </div>
                    <div className='flex flex-col pr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img2.png" className='w-full' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Информатика</p>
                    </div>
                    <div className='flex flex-col pr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img3.png" className='w-full' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Принципы построения SMM</p>
                    </div>
                    <div className='flex flex-colpr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img4.jpg" className='w-full h-full object-cover' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Цели в SMM</p>
                    </div>
                </Slider>
            </div>
            <div className='mb-3'>
                <h5 className='text-lg font-bold text-white py-2 mb-2'>IJOD</h5>
                <Slider {...settings}>
                    <div className='flex flex-col pr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img1.png" className='w-full' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Физика</p>
                    </div>
                    <div className='flex flex-col pr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img2.png" className='w-full' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Информатика</p>
                    </div>
                    <div className='flex flex-col pr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img3.png" className='w-full' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Принципы построения SMM</p>
                    </div>
                    <div className='flex flex-colpr-2'>
                        <div className='h-[132px] rounded-xl overflow-hidden'>
                            <img src="/assets/images/zone-img4.jpg" className='w-full h-full object-cover' alt="Zones Image" />
                        </div>
                        <p className='py-[6px] px-[8px] text-white text-sm'>Цели в SMM</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default VideoZone