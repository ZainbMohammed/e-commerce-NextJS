import React from "react";
import Image from "next/image";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";

interface ProductCardProps {
  image: string;
  discountLabel?: string;
  newLabel?: string;
  title: string;
  category: string;
  description: string;
  price: number;
  oldPrice?: number;
}

const ProductCard = ({
  image,
  discountLabel,
  newLabel,
  title,
  category,
  description,
  price,
  oldPrice,
}: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm relative w-[282px] h-[435px] hover:border-orange-main mx-auto sm:mx-0">
      {discountLabel && (
        <span className="w-20 h-[40] p-1 text-normal absolute top-2 left-2 bg-tertiary text-white font-bold rounded-md text-center">
          {discountLabel}
        </span>
      )}
      {newLabel && (
        <span className="w-[55px] h-[30] p-1 absolute top-2 left-2 bg-orange-main text-white font-bold rounded-md text-center">
          {newLabel}
        </span>
      )}
      <Image
        src={image}
        alt={title}
        className="w-full h-48 object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-sm text-orange-main font-extrabold">{category}</h3>
        <h2 className="text-base font-medium mt-2">{title}</h2>
        <p className="text-gray-extr-light mt-2">{description}</p>
        {oldPrice ? (
          <div className="mt-2 flex items-center">
            <span className="text-red-500 font-bold text-lg">
              {price} ر.س
            </span>
            <span className="text-gray-400 line-through text-sm mx-2">
              {oldPrice} ر.س
            </span>
          </div>
        ) : (
          <div className="mt-2 text-lg font-bold text-red-500">{price} ر.س</div>
        )}

        <div className="flex justify-between w-[250px] mt-6 hover:text-white ">
          <button className="w-[192px] h-[56px] border border-gray text-black text-base rounded-md hover:bg-orange-main hover:text-white transition flex justify-center items-center">
            <LiaShoppingCartSolid className="w-7 h-7 items-center text-black m-2 hover:text-white" />
            أضف للسلة
          </button>
          <button className="w-[50px] h-[56px] border border-gray text-black text-base rounded-md hover:bg-orange-main hover:text-white transition flex justify-center items-center">
            <IoMdHeartEmpty className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
