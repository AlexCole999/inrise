import { useState } from 'react'
import { Link } from "react-router-dom";
import SliderComponent from '../components/SliderComponent';
import ZoneCard from '../components/ZoneCard';
import CommonButton from '../components/CommonButton';

function Home() {
  const videoZoneImage = '/assets/images/video-zone.png';  // Use correct path for the image
  const audioZoneImage = '/assets/images/audio-zone.png';  // Use correct path for the image

  const botToken = "7784346965:AAFiYmCzBv1CdeBlO4m34UdUSW3BMRpHK2I";

  function logToTelegram(message) {
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message }),
    });
  }

  return (
    <div className="w-full min-h-screen p-4 mx-auto">
      {/* Main Content */}
      <div className='flex items-center justify-between'>
        <div className="flex space-x-2 items-center">
          <img src="/assets/images/avatar.png" alt="Avatar" />
          <div className="flex flex-col space-y-1">
            <h6 className='text-sm font-[500] text-white'>Ism familiyasi</h6>
            <h6 className='text-sm font-[500] text-white'>Telegram{window?.Telegram ? 1 : 0}</h6>
            <h6 className='text-sm font-[500] text-white'>webapp{window.Telegram?.WebApp ? 1 : 0}</h6>
            webapp{window.Telegram?.WebApp ? 1 : 0} | id: {window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 'нет данных'}
            <h5
              onClick={() => {

                console.log(window.Telegram);

              }}
              className='text-sm text-white'>+ 8 222 548 888</h5>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <span className='text-sm text-white'>ID <p className='inline-block'>7777777</p></span>
          <span className="flex justify-between space-x-[4px]">
            <Link to='/Subscribe' className='flex items justify-center'><img src="/assets/icons/wallet.svg" className='w-[22px]' alt="Wallet Icon" /></Link>
            <p className='text-lg text-white font-bold'>:</p>
            <p className='text-lg text-white font-bold'>0</p>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center p-2 shadow-[0px_2px_2px_0px_#81818133] bg-[#ffffff33] rounded-xl mt-2">
        <span className='flex space-x-1 items-center'><p className='text-sm text-white'>Obuna:</p><b className='text-[16px] text-white font-bold'>25.11.24 gacha</b></span>
        <span className='flex space-x-1 items-center'><p className='text-sm text-white'>Imkoniyatlar:</p><b className='text-[16px] text-white font-bold'>40</b></span>
      </div>
      {/* Slider */}
      <SliderComponent />
      {/* Zones Card */}
      <ZoneCard
        title="VIDEO"
        subtitle="ZONE"
        bgImage={videoZoneImage}
        textColor="text-[#f800ff]"
        linkTo="/video"
      />
      <ZoneCard
        title="AUDIO"
        subtitle="ZONE"
        bgImage={audioZoneImage}
        textColor="text-[#5bd72f]"
        linkTo="/audio"
      />
      {/* Common button */}
      <CommonButton
        text="Obuna Bo'lish"
        linkTo="/Subscribe"
      />
    </div>
  )
}

export default Home
