import React, { useState } from "react";
import { useGetAllProductsQuery, useGetProductQuery } from "../api/apiSlice";

const Tracking = () => {
  const posts = [
    {
      img: "src/assets/shamamimtshirt.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "399.00 rupees",
      color: "Green,",
      Size: "M",
      expected: "dilivery expected by April 20",
      shipment: "your item has to be shiped",
    },
    {
      img: "src/assets/shamamimtshirt.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "399.00 rupees",
      color: "Green,",
      Size: "M",
      expected: "delivered on April 2",
      shipment: "your item has been dilivered",
    },
    {
      img: "src/assets/shamamimtshirt.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      price: "399.00 rupees",
      color: "Green,",
      Size: "M",
      expected: "delivered on April 2",
      shipment: "your item has been dilivered",
    },
  ];
  // const {
  //   data: allProductsData,
  //   error,
  //   isError,
  //   isLoading,
  // } = useGetAllProductsQuery();
  // const { data: singleProductData} = useGetProductQuery("samsung");
  // console.log(allProductsData);
  // console.log(singleProductData);

  // if (isLoading) return <h1> Loading...</h1>;
  const [showRadio2Buttons, setShowRadio2Buttons] = useState(false);

  const handleOrder = () => {
    console.log("Order button clicked");
  };
  const handleReason2Click = () => {
    setShowRadio2Buttons(!showRadio2Buttons);
  };

  return (
    <div>
      <div className="flex items-center">
        <button
          className="flex justify-center border-black border text-lg font-bold text-align:center bg-[#78E844] hover:bg-[#78E844]/60 hover:font-bold font-normal rounded-lg w-40 py-1 px-3 h-10 ml-3"
          onClick={handleOrder}
        >
          Orders
        </button>

        <input
          id="Search Your Order"
          name="Search Your Order"
          type="text"
          className="mx-5  text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-8 mr-60 w-full"
          placeholder="Search Your Order Here"
        />
      </div>
      <div className="flex items-top">
        <div>
          <h1 className="ml-4 mr-2 text-2xl">FILTERS</h1>
          <div className="ml-5 mt-2 text-primaryDark">
            <label className=" text-lg" onClick={handleReason2Click}>
              Order Status
            </label>

            <br />
            {showRadio2Buttons && (
              <>
                <input
                  type="checkbox"
                  id="defective"
                  name="reason"
                  value="defective"
                />
                <label htmlFor="defective">On the way</label>
                <br />
                <input
                  type="checkbox"
                  id="wrong-item"
                  name="reason"
                  value="wrong-item"
                />
                <label htmlFor="wrong-item">Delivered</label>
                <br />
                <input
                  type="checkbox"
                  id="change-of-mind"
                  name="reason"
                  value="change-of-mind"
                />
                <label htmlFor="change-of-mind">Cancelled</label>
                <br />
                <input
                  type="checkbox"
                  id="size-issue"
                  name="reason"
                  value="size-issue"
                />
                <label htmlFor="size-issue">Returned</label>

                <br />
                {/* Add more checkboxes as needed */}
              </>
            )}
          </div>
        </div>
        <>
          <div className="ml-8 max-w-full h-fit">
            {/* Importing Toggle Button of Cart and Wishlist */}

            {/* Mapping images, description, shipment, and icon buttons */}
            <div className="flex flex-row text-primaryDark">
              <div className="flex flex-col bg-primaryLight lg:rounded-lg lg:shadow-2xl lg:m-2 lg:p-4">
                {posts.map((items, key) => (
                  <div className="sm:m-1 p-1" key={key}>
                    <div className="rounded-lg shadow-md flex flex-row">
                      <div className="flex flex-col">
                        <div className="rounded-full overflow-hidden w-12 sm:w-24 h-12 sm:h-24">
                          <img
                            className="object-cover w-full h-full"
                            src={items.img}
                            alt="image"
                          />
                        </div>
                        {/* <div className="flex flex-row justify-center">
                          <button className="bg-[#FF4646] text-xs rounded-full">
                            {items.icon4}
                          </button>
                          <button className="bg-[#D5D5D5] px-0 sm:px-4">
                            {items.numcart}
                          </button>
                          <button className="bg-[#5AE17E] rounded-full">
                            {items.icon3}
                          </button>
                        </div> */}
                      </div>
                      <div className="flex flex-col">
                        <span>
                          <span className="m-2 text-justify text-m sm:text-m font-medium font-bold">
                            {items.description}
                          </span>
                          <span className="m-2 text-[#34A853] text-xs sm:text-sm ml-auto">
                            {items.expected}
                          </span>
                        </span>
                        <span className="m-2 text-justify text-xs sm:text-sm flex">
                          <span>
                            {items.color} {items.Size}
                          </span>
                          <span className="ml-auto mr-5">{items.shipment}</span>
                        </span>

                        <span className="m-2 text-justify text-xs sm:text-sm">
                          {items.price}
                        </span>

                        {/* <div className="flex flex-row mt-8">
                          <button className="m-2 bg-[#161E09] text-[#FFD38D] py-2 sm:px-4 rounded-lg text-xs">
                            {items.color}
                          </button>
                          <button className="m-2 text-[#8C8B8B]">
                            {items.icon2}
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Tracking;
