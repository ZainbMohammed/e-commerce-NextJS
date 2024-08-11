import React from "react";
import ProductCard from "./ProductCard";

import watch1 from "../../../public/ProductsImages/watch1.svg";
import watch2 from "../../../public/ProductsImages/watch2.svg";
import watch3 from "../../../public/ProductsImages/watch3.svg";
import watch4 from "../../../public/ProductsImages/watch4.svg";
import iphone1 from "../../../public/ProductsImages/iphone1.svg";
import iphone2 from "../../../public/ProductsImages/iphone2.svg";
import ipad from "../../../public/ProductsImages/ipad.svg";
import android from "../../../public/ProductsImages/android.svg";
import headPhones from "../../../public/ProductsImages/head-phones.svg";
import earPhones from "../../../public/ProductsImages/ear-phones.svg";
import spekras from "../../../public/ProductsImages/spe.svg";

const products = [
  {
    image: spekras,
    discountLabel: "25% خصم",
    title: "سماعة ساوند كور كيو30 فوق الاذن",
    description: "سماعة ذات صوت عالي الدقة",
    category: "سماعات",
    price: 450.00,
    oldPrice: 550.00,
  },
  {
    image: headPhones,
    discountLabel: "25% خصم",
    title: "سماعة ساوند كور كيو30 فوق الاذن",
    description: "سماعة ذات صوت عالي الدقة",
    category: "سماعات",
    price: 250.00,
    oldPrice: 350.00
  },
  {
    image: earPhones,
    newLabel: "جديد",
    title: "سماعة ايربودز 3 سيم اوريجينال",
    description: "سماعة ذات صوت عالي الدقة",
    category: "سماعات",
    price: 250.00,
    oldPrice: 350.00,
  },
  {
    image: spekras,
    discountLabel: "25% خصم",
    title: "سماعة ساوند كور كيو30 فوق الاذن",
    description: "سماعة ذات صوت عالي الدقة",
    category: "سماعات",
    price: 450.00,
    oldPrice: 550.00,
  },
  {
    image: watch1,
    discountLabel: "25% خصم",
    title: "ساعة ذكية جديدة من سلسلة 8",
    category: "ساعات",
    description: "سوار رياضيا اسود - عادي",
    price: 250.00,
    oldPrice: 350.00,
  },
  {
    image: watch2,
    discountLabel: "25% خصم",
    title: "سماعة ستريو فوق الأذن",
    category: "سماعات",
    description: "سوار رياضيا اسود - عادي",
    price: 450.00,
    oldPrice: 560.00,
  },
  {
    image: watch3,
    discountLabel: "25% خصم",
    title: "ساعة ذكية جديدة من سلسلة 8",
    description: "سوار رياضيا اسود - عادي",
    category: "ساعات",
    price: 250.00,
    oldPrice: 350.00,
  },
  {
    image: watch4,
    discountLabel: "25% خصم",
    title: "ساعة ذكية جديدة من سلسلة 8",
    description: "سوار رياضيا اسود - عادي",
    category: "ساعات",
    price: 250.00,
  },
  {
    image: iphone1,
    newLabel: "جديد",
    title: "موبايل ابل ايفون 14 (128 حيجابايت)",
    description: "شاشة سوبر ريتينا XDO مقاس 6.1 بوصة",
    category: "موبايلات",
    price: 250.00,
    oldPrice: 350.00,
  },
  {
    image: iphone2,
    newLabel: "جديد",
    title: "موبايل آيفون 14 128 جيجابايت",
    description: "شاشة سوبر ريتينا XDO مقاس 6.1 بوصة",
    category: "موبايلات",
    price: 250.00,
  },
  {
    image: android,
    newLabel: "جديد",
    title: "موبايل سمارت سامسونج جالاكسي",
    description: "رام 12 قيقا لون اسود فانتوم - 256 جيجا",
    category: "موبايلات",
    price: 250.00,
    oldPrice: 350.00,
  },
  {
    image: ipad,
    discountLabel: "25% خصم",
    title: "ابل آيباد برو 12.9 بوصة واي فاي",
    description: "شاشة ليكويد ريتينا XDR رائعة مقاس 11",
    category: "موبايلات",
    price: 250.00,
    oldPrice: 350.00,
  },
];

const ProductGrid = () => {
  return (
    <section className="my-8 px-20">
      <div className="flex justify-between items-center mb-8">
        <div className="container mx-auto px-4 ">
          <h2 className="text-2xl font-bold mb-4">جميع المنتجات</h2>
          <p className="text-gray-extr-light">
            تسوق احدث المنتجات المميزه المضافة جديد
          </p>
        </div>
        <button className="w-[109px] h-[42px] ml-4 text-orange-main font-bold border border-orange-main rounded-md hover:bg-orange-main hover:text-white transition">
          عرض الكل
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
