import {
   HeartIcon,
   MagnifyingGlassIcon,
   ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const Nav = () => {
   const [navState, setNavState] = useState(false);

   const onNavScroll = () => {
      if (window.scrollY > 30) {
         setNavState(true);
      } else {
         setNavState(false);
      }
   };

   useEffect(() => {
      document.addEventListener("scroll", onNavScroll);

      return () => {
         window.removeEventListener("scroll", onNavScroll);
      };
   }, []);
   return (
      <>
         <div
            className={
               !navState
                  ? "absolute top-7 right-0 left-0 z-200  flex"
                  : "fixed top-0 right-0 left-0 h-[9vh] flex items-center justify-center opacity-100  z-[200] blur-effect-theme "
            }
         >
            <nav className="nike-container flex justify-between items-center">
               <div>
                  <img
                     src="./src/assets/logo.png"
                     alt=""
                     className={`w-32 h-auto ${
                        navState && "filter brightness-0"
                     }`}
                  />
               </div>
               <div className="flex gap-2">
                  <MagnifyingGlassIcon
                     className={`icon-style w-6 h-6 ${
                        navState && "filter brightness-0"
                     }`}
                  />
                  <HeartIcon
                     className={`icon-style w-6 h-6 ${
                        navState && "filter brightness-0"
                     }`}
                  />
                  <div className="relative">
                     <ShoppingBagIcon
                        className={`icon-style w-6 h-6 ${
                           navState && "filter brightness-0"
                        }`}
                     />
                     <span
                        className={`absolute bg-slate-200 px-1 rounded-xl text-xs right-0 top-4 leading-4  shadow shadow-slate-200 flex justify-center items-center ${
                           navState && "bg-black text-slate-200"
                        }`}
                     >
                        0
                     </span>
                  </div>
               </div>
            </nav>
         </div>
      </>
   );
};

export default Nav;
