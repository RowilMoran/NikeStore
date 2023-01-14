import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ isExist, endpoint: { title, items } }) => {
  return (
    <div className="nike-container">
      <Title title={title} />
      <div
        className={
          isExist
            ? "grid items-center justify-items-center grid-cols-3 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-7 w-full lg:gap-5 mt-7"
            : "grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 w-full lg:gap-5 mt-7"
        }
      >
        {items?.map((item, i) => (
          <Item {...item} key={i} isExist={isExist} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
