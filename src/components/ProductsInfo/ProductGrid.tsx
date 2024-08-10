import React from 'react';
import ProductCard from './ProductCard';
import watch1 from '../../../public/ProductsImages/watch1.svg'
import watch2 from '../../../public/ProductsImages/watch2.svg'
import watch3 from '../../../public/ProductsImages/watch3.svg'
import watch4 from '../../../public/ProductsImages/watch4.svg'
import iphone1 from '../../../public/ProductsImages/iphone1.svg'
import iphone2 from '../../../public/ProductsImages/iphone2.svg'
import ipad from '../../../public/ProductsImages/ipad.svg'
import android from '../../../public/ProductsImages/android.svg'
import headPhones from '../../../public/ProductsImages/head-phones.svg'
import earPhones from '../../../public/ProductsImages/ear-phones.svg'
const products = [
  {
    image: watch1,
    discountLabel: '25% خصم',
    title: 'ساعة ذكية جديدة من سلسلة 8',
    category: 'ساعات',
    price: 250.00,
    oldPrice: 350.00,
  },
  {
    image: watch2,
    discountLabel: '25% خصم',
    title: 'سماعة ستريو فوق الأذن',
    category: 'سماعات',
    price: 450.00,
    oldPrice: 560.00,
  },
  {
    image:watch3,
    discountLabel: '25% خصم',
    title: 'ساعة ذكية جديدة من سلسلة 8',
    category: 'ساعات',
    price: 250.00,
  },
  {
    image: watch4,
    newLabel: 'جديد',
    title: 'سماعات ايربودز مع شحن الكابل',
    category: 'موبايلات',
    price: 250.00,
  },
  {
    image: iphone1,
    newLabel: 'جديد',
    title: 'موبايل آيفون 14 128 جيجابايت',
    category: 'موبايلات',
    price: 250.00,
  },
  {
    image: iphone2,
    newLabel: 'جديد',
    title: 'موبايل آيفون 14 128 جيجابايت',
    category: 'موبايلات',
    price: 250.00,
  },
  {
    image: android,
    newLabel: 'جديد',
    title: 'موبايل آيفون 14 128 جيجابايت',
    category: 'موبايلات',
    price: 250.00,
  },
  {
    image: ipad,
    discountLabel: '25% خصم',
    title: 'آيباد برو 12.9 بوصة واي فاي',
    category: 'موبايلات',
    price: 250.00,
  },
];

const ProductGrid: React.FC = () => {
  return (
    <section className="my-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">جميع المنتجات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="text-orange-500 font-bold border border-orange-500 py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white transition">
            عرض الكل
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
