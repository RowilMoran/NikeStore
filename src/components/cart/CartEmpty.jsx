import React from "react";
import {
    ArrowLeftIcon
 } from "@heroicons/react/24/outline";
 import emptybag from "../../assets/emptybag.png"

const CartEmpty = () => {
   return (
      <>
         <div className="bg-white/50 h-screen w-full flex flex-col items-center justify-center gap-7">
            <img
               src={emptybag}
               className="w-48 md:w-32 sm:w-28 h-auto object-fill transition-all duration-700 hover:scale-110"
               alt=""
            />

            <button className=" button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110">
               <ArrowLeftIcon className="icon-style " /> Back to Nike Store
            </button>
         </div>
      </>
   );
};

export default CartEmpty;
