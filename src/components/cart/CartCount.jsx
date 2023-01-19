import React from "react";
import {
    ChevronDoubleLeftIcon,
    XMarkIcon,
 } from "@heroicons/react/24/outline";

const CartCount = ({onCartToggle}) => {
   return (
      <>
         <div className=" flex h-11 justify-between items-center px-3 bg-white">
            <div className="flex gap-2 justify-center items-center">
               <ChevronDoubleLeftIcon className="icon-style text-black w-5 h-5" onClick={onCartToggle}/>
               <span className="font-medium text-base">
                  Your Cart{" "}
                  <span className="bg-black text-slate-200 shadow shadow-black p-1 rounded text-xs font-normal ">
                     (0 items)
                  </span>
               </span>
            </div>
            <button type="button" onClick={onCartToggle}>
               <XMarkIcon className="icon-style bg-black w-6 h-6 rounded stroke-[2] shadow shadow-black" />
            </button>
         </div>
      </>
   );
};

export default CartCount;
