import React from 'react';

type FilterSearchProps = {
  icon: React.ReactNode;
  text: string;
};

const FilterSearch = ({ icon, text } : FilterSearchProps) => {
  return (
    <div className="mr-8 flex items-center justify-between gap-8">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full font-semibold bg-white">
          {icon}
        </div>
        <p className="font-normal">{text}</p>
      </div>
      <div></div>
    </div>
  );
};

export default FilterSearch;
