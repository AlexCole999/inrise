import React from 'react'
import { Link } from "react-router-dom";
function CommonButton({text, linkTo}) {
  return (
    <Link to={linkTo}
      className={`p-3 bg-[#44689D] rounded-2xl text-2xl text-white font-bold hover:bg-opacity-80 transition-all duration-300 focus:outline-none w-full mt-3 block text-center`}
      >
    {text}
    </Link>
  )
}

export default CommonButton