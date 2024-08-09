import React from "react";
import Cards from "./Cards";
import Offer from "../../../public/CategoryImages/discount-tag.svg";
import ShoppingBag from "../../../public/CategoryImages/shopping-bag.svg";
import Store from "../../../public/CategoryImages/store (1).svg";
import Market from "../../../public/CategoryImages/market.svg";

const CategoryCards = () => {
  const categories = [
    {
      title: "العروض",
      imageSrc: Offer,
      altText: "Offers",
    },
    {
      title: "المتجر",
      imageSrc: ShoppingBag,
      altText: "Store",
    },
    {
      title: "المحلات",
      imageSrc: Store,
      altText: "Shops",
    },
    {
      title: "المتاجر",
      imageSrc: Market,
      altText: "Malls",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between md:justify-center gap-4 mt-8 ml-20 mr-20">
      {categories.map((category, index) => (
        <Cards
          key={index}
          title={category.title}
          imageSrc={category.imageSrc}
          altText={category.altText}
        />
      ))}
    </div>
  );
};

export default CategoryCards;
