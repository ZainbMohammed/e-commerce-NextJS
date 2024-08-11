import React from "react";
import Image from "next/image";
import SecurePaymentIcon from "../../../public/FeaturesImages/SecurePayments.svg";
import FreeShippingIcon from "../../../public/FeaturesImages/FreeShipping.svg";
import GuaranteedProductsIcon from "../../../public/FeaturesImages/GuaranteedProducts.svg";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: GuaranteedProductsIcon,
    title: "منتجات مضمونة",
    description: "مدفوعات آمنة أقساط تصل إلى 12 شهرًا",
  },
  {
    icon: FreeShippingIcon,
    title: "شحن مجاني",
    description: "مدفوعات آمنة أقساط تصل إلى 12 شهرًا",
  },
  {
    icon: SecurePaymentIcon,
    title: "مدفوعات آمنة",
    description: "مدفوعات آمنة أقساط تصل إلى 12 شهرًا",
  },
];

const FeatureSection = () => {
  return (
    <div className="container  mx-auto px-4 py-8">
      <div className="w-[1200px] h-[123px] flex justify-center border space-x-0 lg:space-x-4">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-center  p-4 text-center lg:w-1/3">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
              />
              <div className='flex flex-col items-start mr-5'>
              <h3 className="text-xl font-bold mt-5">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            </div>
            {index < features.length - 1 && (
              <div className="hidden lg:block w-px bg-gray-300 h-16 my-auto"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
