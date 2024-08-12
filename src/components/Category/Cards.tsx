import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  imageSrc: string;
  altText: string;
};

const Cards = ({ title, imageSrc, altText }: CardProps) => {
  return (
    <div className="p-6 border rounded-sm bg-gray-mid w-[287px] h-[103px] flex items-center justify-between">
      <div className="font-bold text-[40px] text-black">{title}</div>
      <div className="flex items-center">
        <Image
          className="object-contain"
          src={imageSrc}
          alt={altText}
          width={72}
          height={72}
        />
      </div>
    </div>
  );
};
export default Cards;
