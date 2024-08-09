'use client'
import { useState } from 'react';
import Image from 'next/image';
import Slide1 from '../../../public/sliderImages/slide1.png'
import Slide2 from '../../../public/sliderImages/slide1.png'
import Slide3 from '../../../public/sliderImages/slide1.png'
const Slider = () => {
  const slides = [
    {
      image: Slide1,
      title: 'أفضل التخفيضات 2024',
      description: 'متجر فاست يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات',
    },
    {
        image: Slide2,
        title: 'تخفيضات الصيف 2024',
      description: 'تسوق واستمتع بأفضل العروض الصيفية',
    },
    {
        image: Slide3,
        title: 'عروض خاصة 2024',
      description: 'احصل على منتجاتك المفضلة بأسعار خاصة',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div id="controls-carousel" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute inset-0 transition-all transform ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={1603}
              height={258}
              className="absolute block w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-5 flex flex-col items-center justify-center text-center text-white p-4">
              <h2 className="text-4xl md:text-4xl font-bold text-black mb-4">{slide.title}</h2>
              <p className="mt-2 md:text-lg text-black">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  border border-orange-300 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-orange-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-orange-300 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-orange-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;
