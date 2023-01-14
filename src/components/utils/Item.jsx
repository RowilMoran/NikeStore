import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const Item = ({
  isExist,
  id,
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
  shadow,
}) => {
  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid ${
        isExist
          ? "items-center justify-items-start"
          : "items-center justify-items-center"
      } rounded-xl py-4 px-5 hover:scale-105 transition-all ease-out duration-700  w-full`}
    >
      <div
        className={`grid items-center
         ${isExist ? " justify-items-start" : " justify-items-center"}
        `}
      >
        <h3 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
          {title}
        </h3>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
          {text}
        </p>
        <div className="flex items-center justify-between w-28 my-2">
          {/* rate & price */}
          <div className="flex items-center bg-white/80 px-1 rounded">
            <p className="text-sm text-black font-medium">${price}</p>
          </div>
          <div className="flex items-center ">
            <StarIcon className="icon-style text-slate-200 w-5 h-5 md:w-4 md:h-4 mr-1" />
            <p className="text-slate-200 md:text-sm font-medium">{rating}</p>
          </div>
        </div>
        {/* buy now */}
        <div className="flex items-center justify-between w-28 gap-3">
          <button
            type="button"
            className={`bg-white/80 p-0.5 rounded  
            shadow shadow-slate-200 blur-effect-theme  button-theme`}
          >
            <ShoppingBagIcon className="icon-style text-slate-900 md:w-5 md:h-5 " />
          </button>
          <button
            type="button"
            className={`bg-white/90 py-1 px-1.5 rounded font-normal text-sm text-black blur-effect-theme button-theme 
            shadow shadow-slate-200`}
          >
            {btn}
          </button>
        </div>
      </div>

      <div className={isExist ? "absolute top-0 right-0" : ""}>
        <div className="">
          <img
            src={img}
            alt={`img/item-img${id}`}
            className={`w-64 transitions-theme
              ${
                isExist
                  ? "  -rotate-45 hover:-rotate-12 lg:w-56 md:w-48 "
                  : " hover:-rotate-12"
              }
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
