import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
   HashtagIcon,
   HeartIcon,
   LockOpenIcon,
} from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { truncate } from "lodash";

const Stories = ({ stories: { title, news } }) => {
   return (
      <>
         <div className="nike-container mb-11">
            <Title title={title} />
            <div className="mt-7">
               <Splide
                  options={{
                     perPage: 4,
                     perMove: 1,
                     type: "loop",
                     rewind: true,
                     pagination: false,
                     keyboard: "global",
                     gap: "1rem",
                     padding: "2rem",
                     breakpoints: {
                        1200: { perPage: 3 },
                        991: { perPage: 2.3 },
                        768: { perPage: 2 },
                        500: { perPage: 1.3 },
                        425: { perPage: 1 },
                     },
                  }}
               >
                  {news.map((val, i) => (
                     <SplideSlide key={i}>
                        <div className="relative grid items-center gap-4 rounded-lg pb-2 mb-5 shadow-md shadow-slate-200 ring-1 ring-slate-100">
                           <div className="flex items-center justify-center">
                              <img
                                 src={val.img}
                                 alt={"img/" + val.title}
                                 className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                              />
                           </div>
                           <div className="flex justify-between items-center w-full px-4">
                              <div className="flex items-center gap-0.5">
                                 <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                                 <span className="text-xs font-bold">
                                    {val.like}
                                 </span>
                              </div>
                              <div className="flex items-center gap-0.5">
                                 <ClockIcon className="icon-style h-4 w-4 text-black" />
                                 <span className="text-xs font-bold">
                                    {val.time}
                                 </span>
                              </div>
                              <div className="flex items-center gap-0.5">
                                 <HashtagIcon className="icon-style w-5 h-5 text-blue-600" />
                                 <span className="text-blue-600 text-xs font-bold">
                                    {val.by}
                                 </span>
                              </div>
                           </div>
                           <div className="mx-4">
                              <h3 className="font-semibold ">{val.title}</h3>
                              <p className="text-justify">
                                 {truncate(val.text, { length: 155 })}
                              </p>
                           </div>
                           <div>
                              <a
                                 href={val.url}
                                 target={"_blank"}
                                 className="flex items-center justify-center px-4 w-full"
                              >
                                 <button
                                    type="button"
                                    className="bg-slate-900 w-full  py-1.5 rounded-lg shadow-md shadow-black bg-gradient-to-b from-slate-900 to-black/80 text-center text-slate-100 button-theme"
                                 >
                                    {val.btn}
                                 </button>
                              </a>
                           </div>
                        </div>
                     </SplideSlide>
                  ))}
               </Splide>
            </div>
         </div>
      </>
   );
};

export default Stories;
