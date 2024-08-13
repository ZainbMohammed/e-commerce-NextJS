import React from "react";
import { VscSettings } from "react-icons/vsc";
import InputSearch from './InputSearch';
import FilterSearch from './FilterSearch';

const SearchBar = () => {
  return (
    <div className="w-full h-auto mt-4 bg-gray-light flex flex-col items-stretch px-4 sm:px-6 py-2">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4">
        <p className="text-lg sm:text-xl font-medium text-black px-2 py-1 sm:py-2">
          البحث في قائمة العروض
        </p>

        <InputSearch /> 

        <div className="flex gap-4 mt-4 sm:mt-0">
          <FilterSearch icon={<VscSettings />} text="فلترة البحث"/>
          <FilterSearch icon={<VscSettings />} text="ترتيب حسب"/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
