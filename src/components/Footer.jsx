import React from "react";

const Footer = ({ footerInfo: { titles, links } }) => {
   return (
      <>
         <footer className="relative grid text-slate-200 gap-3 grid-flow-col-1 items-start justify-items-center bg-gradient-to-b from-blue-700 to-blue-400 pt-6 pb-6">
            <div className="grid grid-cols-3 nike-container max-w-2xl items-start justify-items-start  m-auto ">
               {titles.map((title, i) => (
                  <h4 key={i} className="font-bold text-lg md:text-base">
                     {title.title}
                  </h4>
               ))}
               {links.map((val, i) => (
                  <ul key={i} className="grid gap-1">
                     {val.map((link, i) => (
                        <li key={i} className="font-light text-sm md:text-xs">{link.link}</li>
                     ))}
                  </ul>
               ))}
            </div>
            <span className="text-sm sm:max-w-[280px] block m-auto sm:w-full text-center">Copyright© All Reserved Rights Rowil Moran 2023</span>
         </footer>
      </>
   );
};

export default Footer;
