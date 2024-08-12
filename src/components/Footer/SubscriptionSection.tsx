import React from "react";
import Image from "next/image";
import appStoreIcon from "../../../public/CategoryImages/shopping-bag.svg"; // example path
import playStoreIcon from "../../../public/CategoryImages/shopping-bag.svg"; // example path
import { HiOutlineMail } from "react-icons/hi";
const SubscriptionSection = () => {
  return (
    <div className="w-[1600px] h-[133px]  bg-gray-light flex items-center">
      <div className="flex justify-between items-center p-12">
        <div className="w-16 h-16 flex items-center justify-center rounded-full font-semibold bg-gray-light">
          <HiOutlineMail className="w-7 h-7 text-orange-main bg-white" />
        </div>
        <div className="flex flex-col items-satart">
          <p className="text-5 font-bold mt-8">الاشتراك في النشرة البريدية</p>
          <p className="text-gray-extr-light mt-2">
            انضم اللآن و احصل على خصم 19% على مشترياتك التالية
          </p>
        </div>
        <div className="flex flex-col items-start mr-5">
        <p>يمكنك إلغاء الاشتراك في أي لحظة</p>

          <div className="flex justify-between gap-x-2 mt-2">
          
            <input
              type="text"
              placeholder="ادخل البريدالالكتروني"
              className="w-[400px] text-xs  py-[11px] px-2 outline-none bg-white"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              اشترك
            </button>
          </div>
        </div>
        <div className="  flex flex-col items-start mr-5">
        <p>تطبيقات الجوال</p>
        <div className="flex w-[234px] h-[42px] justify-center items-start md:w-1/3 md:mt-0 bg-dark">
         <button className="flex justify-between flex-col ">
            <div className='flex flex-row'>
                <p className="text-white">Download on the</p>
                <h1 className="text-white">App Store</h1>
            </div>
            <Image
           src={playStoreIcon}
           alt="Play Store"
           width={120}
           height={40}
           className="mx-2"
         />
         </button>
         
       </div>
        </div>
      </div>

      {/* <InputSearch /> 
    
    <FilterSearch icon={<VscSettings />} text="فلترة البحث"/>
    <FilterSearch icon={<VscSettings />} text="ترتيب حسب"/> */}
    </div>

    // <div className="flex flex-row md:flex-row justify-between items-center pb-8 border-b border-gray-300">
    //   <div className="w-12 h-12 flex items-center justify-center rounded-full font-semibold bg-gray-light">
    //     <HiOutlineMail className="w-7 h-7 text-gray-500" />
    //   </div>
    //   <div className="flex flex-col items-start mr-5">
    //     <p className="text-5 font-bold mt-5">الاشتراك في النشرة البريدية</p>
    //     <p className="text-gray-600 mt-2">
    //       انضم اللآن و احصل على خصم 19% على مشترياتك التالية
    //     </p>
    //   </div>
    //   <div className="flex flex-col">
    //     <p>يمكنك إلغاء الاشتراك في أي لحظة</p>
    //     <form className="flex flex-col sm:flex-row md:w-1/3">
    //       <input
    //         type="text"
    //         placeholder="ادخل البريدالالكتروني"
    //         className="w-full text-xs  py-[11px] outline-none"
    //       />
    //       <button
    //         type="submit"
    //         className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
    //       >
    //         اشترك
    //       </button>
    //     </form>
    //   </div>
    //   <div className="flex justify-center md:w-1/3 mt-6 md:mt-0">
    //     <Image
    //       src={appStoreIcon}
    //       alt="App Store"
    //       width={120}
    //       height={40}
    //       className="mx-2"
    //     />
    //     <Image
    //       src={playStoreIcon}
    //       alt="Play Store"
    //       width={120}
    //       height={40}
    //       className="mx-2"
    //     />
    //   </div>
    // </div>
  );
};

export default SubscriptionSection;
