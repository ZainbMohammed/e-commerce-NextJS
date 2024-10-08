import React from "react";
import Product from "./Product";
import EarPhones from "../../../public/ProductsCategoryImages/earPhones.svg";
import Screen from "../../../public/ProductsCategoryImages/screen.svg";
import Mobile from "../../../public/ProductsCategoryImages/mobile.svg";
import Watch from "../../../public/ProductsCategoryImages/watch.svg";
import HeadPhones from "../../../public/ProductsCategoryImages/headPhones.svg";
import Laptop from "../../../public/ProductsCategoryImages/laptop.svg";

const ProductsCategories = () => {
  const products = [
    {
      imageSrc: EarPhones,
      title: "سماعات أذن",
      count: "150 منتج",
    },
    {
      imageSrc: Screen,
      title: "شاشات كمبيوتر",
      count: "150 منتج",
    },
    {
      imageSrc: Mobile,
      title: "موبايلات",
      count: "150 منتج",
    },
    {
      imageSrc: Watch,
      title: "ساعات رقمية",
      count: "150 منتج",
    },
    {
      imageSrc: HeadPhones,
      title: "سماعات رأس",
      count: "150 منتج",
    },
    {
      imageSrc: Laptop,
      title: "أجهزة لابتوب",
      count: "150 منتج",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-6">
        {products.map((product, index) => (
          <Product
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
            count={product.count}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategories;
