import React from 'react';

type FilterSearchProps = {
  icon: React.ReactNode;
  text: string;
};

const FilterSearch = ({ icon, text }: FilterSearchProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white">
        {icon}
      </div>
      <p className="font-normal text-xs sm:text-sm">{text}</p>
    </div>
  );
};

export default FilterSearch;
