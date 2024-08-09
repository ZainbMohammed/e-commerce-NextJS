import React from "react";
import { VscSettings } from "react-icons/vsc";
import InputSearch from './InputSearch'
import FilterSearch from './FilterSearch'

const SearchBar = () => {
  return (
    <div className="w-[1600px] h-[80px] mt-4 bg-gray-light flex items-center  px-6 py-2">
      <div className="flex justify-center items-center p-12">
        <p className="text-xl font-medium text-black px-2  py-2">
          البحث في قائمة العروض
        </p>
      </div>

      <InputSearch /> 
      
      <FilterSearch icon={<VscSettings />} text="فلترة البحث"/>
      <FilterSearch icon={<VscSettings />} text="ترتيب حسب"/>
    </div>
  );
};

export default SearchBar;
