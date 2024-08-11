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

const StoreSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="container mx-auto px-4 mb-4">
        <h2 className="text-2xl font-bold mb-4">جميع المتاجر</h2>
        <p className="text-gray-extr-light">
          تسوق احدث المنتجات المميزه المضافة جديد
        </p>
      </div>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stores.map((store, index) => (
          <div
            key={index}
            className="w-[388px] h-[183px] p-7 border rounded-lg flex justify-start items-center"
          >
            <Image
              src={store.logo}
              width={115}
              height={120}
              alt={store.name}
              className="object-contain items-center"
            />
            <div className="flex flex-col items-start text-center pr-4">
              <h3 className="text-xl font-bold mb-1">{store.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{store.description}</p>
              <div className="flex items-center">
                <p className="text-yellow-500 text-lg">⭐</p>
                <p className="text-yellow-500 text-lg ml-1">{store.rating}</p>
              </div>
              <button className="w-[200px] h-[56px] py-2 bg-orange-500 text-white rounded-lg">
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
