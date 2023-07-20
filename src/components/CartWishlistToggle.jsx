import React from "react";

import { Link } from "react-router-dom";

const CartWishlistToggle = () => {
  return (
    <>
      {/* Toggle button of cart and wishlist */}
      <div className="grid grid-cols-2">
        <div className="bg-secondaryLight1 text-center">
          <Link to="/Cart">
            {" "}
            <button className="text-primaryLight">CART</button>
          </Link>
        </div>
        <div className="bg-secondaryDark text-center">
          <Link to="/Wishlist">
            {" "}
            <button className=" text-primaryLight/50">WISHLIST</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartWishlistToggle;
