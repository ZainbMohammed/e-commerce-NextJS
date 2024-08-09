import React from 'react'
import Image from 'next/image'

type ProductProps = {
  imageSrc: string,
  title: string,
  count: string
}
const Product = ({imageSrc , title, count} : ProductProps) => {
  return (

  <div className="text-center">
    <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
      <Image className="h-full w-full object-cover" src={imageSrc} alt="Product Image" />
    </div>
    <div className="mt-3 text-base font-normal text-black">{title}</div>
    <div className="mt-1 text-sm text-gray-500">{count}</div>
  </div>
  )
}

export default Product