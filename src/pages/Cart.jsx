import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartWishlistToggle } from "../components";
const Cart = () => {
  const [pincode, setName] = useState(" ");

  const posts = [];
  const pricedetails = [];

  return (
    <>
      {/* Importing Toggle Button of Cart and Wishlist */}
      <div>
        <CartWishlistToggle />
      </div>

      {/* Heading */}
      <div className="grid grid-cols-2 gap-2 bg-primaryLight lg:rounded-lg lg:shadow-2xl lg:m-2 lg:p-4 text-primaryDark">
        <h1 className="font-bold text-xs sm:text-sm text-primaryDark">ITEMS IN YOUR CART</h1>

        {/* Input box of Delivery Pincode */}
        <form className="text-right mb-2  ">
          <label className="text-[#2D2D2D]    ">
            <input
              className="bg-[#FFD38D] text-xs sm:text-sm  h-6"
              type="number"
              placeholder="Enter Delivery Pincode"
              value={pincode}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </form>
      </div>

      {/* Mapping images,description,availibility and icon buttons */}
      <div className="flex flex-row w-full text-primaryDark">
        <div className="flex flex-col bg-primaryLight lg:rounded-lg lg:shadow-2xl lg:m-2 lg:p-4 w-3/5">
          {posts.map((items, key) => (
            <div className="sm:m-1 p-1">
              <div
                className="w-full rounded-lg shadow-md flex flex-row   "
                key={key}
              >
                <div className="flex flex-col">
                  <img
                    className="object-cover w-12 sm:w-32 h-16 sm:h-48 "
                    src={items.img}
                    alt="image"
                  />
                  <div className="flex flex-row justify-center">
                    <button className="bg-[#FF4646] text-xs rounded-full">
                      {items.icon4}
                    </button>
                    <button className="bg-[#D5D5D5] px-0 sm:px-4">
                      {items.cart}
                    </button>
                    <button className="bg-[#5AE17E] rounded-full">
                      {items.icon3}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className=" m-2 text-justify text-xs sm:text-sm">
                    {items.description}
                  </span>
                  <span className=" m-2 text-[#34A853] text-xs sm:text-sm">
                    {items.availability}
                  </span>
                  <div className="flex flex-row mt-8">
                    <button className=" m-2 text-[#FF4646] ">
                      {items.icon1}
                    </button>
                    <button className=" m-2 text-[#8C8B8B]">
                      {items.icon2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Linking Buy button with the payment page */}
          <div className="text-right text-primaryDark">
            <NavLink to="/paymentOne">
              <button className="bg-[#5AE17E] h-8 sm:h-10 w-40 sm:w-48 rounded-full m-2 text-black">
                Procceed to buy
                <ArrowRightAltIcon />
              </button>
            </NavLink>
          </div>
        </div>

        {/* Price Details Chart */}
        <div className="bg-primaryLight lg:rounded-lg lg:shadow-2xl lg:m-2 lg:p-4 w-2/5 text-primaryDark">
          <h1 className="font-bold underline mb-2 text-xs sm:text-sm">
            PRICE DETAILS
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div className="grid grid-rows-4 gap-2 text-xs sm:text-sm">
              <span>Price (X items)</span>
              <span>Discount</span>
              <span>Delivery Charges</span>
              <span className="font-bold">Total Amount</span>
            </div>
            <div>
              {pricedetails.map((items, key) => (
                <div
                  className="w-full  grid grid-rows-4 gap-6 sm:gap-2   "
                  key={key}
                >
                  <span className="font-bold text-xs sm:text-sm">
                    {items.price}
                  </span>
                  <span className="text-[#34A853] text-xs sm:text-sm">
                    {items.discount}
                  </span>
                  <span className="text-[#34A853] text-xs sm:text-sm">
                    {items.delivery_charges}
                  </span>
                  <span className="font-bold text-xs sm:text-sm">
                    {items.Total_amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <span className="text-[#34A835] text-xs sm:text-sm ">
            You will save ₹xxx on this order
          </span>
        </div>
      </div>
    </>
  );
};

export default Cart;
