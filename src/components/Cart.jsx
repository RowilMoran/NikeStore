import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCartState, setCloseCart } from "../app/CartSlice";

import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
   const dispatch = useDispatch();
   const ifCartState = useSelector(selectCartState);

   const onCartToggle = () => {
      dispatch(
         setCloseCart({
            cartState: false,
         })
      );
   };

   return (
      <>
         <div
            className={`fixed inset-0 z-[300]  blur-effect-theme  w-full h-screen opacity-100 ${
               ifCartState
                  ? "opacity-100 visible translate-x-0"
                  : "opacity-0 invisible translate-x-8"
            }`}
         >
            <div className="absolute right-0 top-0 bottom-0 max-w-xl w-full h-screen">
               <CartCount onCartToggle={onCartToggle} />
               <CartEmpty />
               <CartItem />
            </div>
         </div>
      </>
   );
};

export default Cart;
