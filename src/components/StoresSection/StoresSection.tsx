import React from "react";
import SwagStore from "../../../public/StoresImages/swagStore.svg";
import NasagStore from "../../../public/StoresImages/nasagStore.svg";
import ZomerdaStore from "../../../public/StoresImages/zomerdaStore.svg";
import Image from "next/image";

interface Store {
  logo: string;
  name: string;
  description: string;
  rating: number;
}

const stores: Store[] = [
  {
    logo: SwagStore,
    name: "متجر زهور",
    description: "أحذية رجالي نسائي",
    rating: 4.5,
  },
  {
    logo: NasagStore,
    name: "متجر نسك",
    description: "مستلزمات الأطفال",
    rating: 4.5,
  },
  {
    logo: ZomerdaStore,
    name: "متجر سوفاج",
    description: "مستلزمات العناية بالجسم",
    rating: 4.5,
  },
  // Add more stores as needed
];

const StoreSection = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-gray-light">
      <div className="container mx-auto mb-4 text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">جميع المتاجر</h2>
        <p className="text-sm sm:text-base text-gray-extr-light">
          تسوق احدث المنتجات المميزه المضافة جديد
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-auto">
        {stores.map((store, index) => (
          <div
            key={index}
            className="w-full max-w-xs sm:max-w-md lg:max-w-full h-[183px] p-4 sm:p-6 border border-black bg-white rounded-lg flex justify-start items-center mx-auto hover:border-orange-main"
          >
            <Image
              src={store.logo}
              width={80}
              height={80}
              alt={store.name}
              className="object-contain"
            />
            <div className="flex flex-col items-start text-center pr-4">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1">
                {store.name}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-2">
                {store.description}
              </p>
              <div className="flex items-center">
                <p className="text-yellow-500 text-sm sm:text-lg">⭐</p>
                <p className="text-yellow-500 text-sm sm:text-lg ml-1">
                  {store.rating}
                </p>
              </div>
              <button className="w-full sm:w-[160px] lg:w-[200px] h-[40px] sm:h-[48px] lg:h-[56px] py-2 border border-black text-black rounded-lg mt-4 hover:bg-orange-main hover:text-white transition hover:border-none">
                زيارة المتجر
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreSection;
