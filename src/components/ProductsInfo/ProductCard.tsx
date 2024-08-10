import React from 'react';
import Image from 'next/image';
interface ProductCardProps {
  image: string;
  discountLabel?: string;
  newLabel?: string;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  discountLabel,
  newLabel,
  title,
  category,
  price,
  oldPrice,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm relative  w-[282px] h-[435px]">
      {discountLabel && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {discountLabel}
        </span>
      )}
      {newLabel && (
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {newLabel}
        </span>
      )}
      <Image src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <div className="mt-4">
        <h3 className="text-sm text-orange-500 font-semibold">{category}</h3>
        <h2 className="text-lg font-bold mt-1">{title}</h2>
        {oldPrice ? (
          <div className="mt-2 flex items-center">
            <span className="text-red-500 font-bold text-lg mr-2">{price} ر.س</span>
            <span className="text-gray-400 line-through text-sm">{oldPrice} ر.س</span>
          </div>
        ) : (
          <div className="mt-2 text-lg font-bold text-red-500">{price} ر.س</div>
        )}
        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
          أضف للسلة
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
