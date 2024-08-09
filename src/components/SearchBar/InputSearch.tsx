import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

const InputSearch = () => {
  return (
<div className="w-96 flex items-center bg-white border px-4 rounded-sm">
        <input
          type="text"
          placeholder="ابحث عما تريد"
          className="w-full text-xs  py-[11px] outline-none"
        />
        <FaMagnifyingGlass className="text-gray-1 cursor-pointer hover:text-black" />
      </div>  )
}

export default InputSearch