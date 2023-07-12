import React from "react";
import { ProductCard } from "../components";
import FilterSection from "../features/filter/FilterSection";
import FilterDrawer from "../features/filter/FilterDrawer";
import SortingSection from "../features/sorting/SortingSection";
import { ProductTop } from "../components";
import Pagination from "@mui/material/Pagination";
import { NavLink } from "react-router-dom";

const SubCatagory = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleYesClick = () => {
    // Handle "Yes" button click here
  };

  const handleNoClick = () => {
    // Handle "No" button click here
  };

  return (
    <>
      {/* Importing ProductTop from components */}
      <div className="mb-16">
        <ProductTop />
      </div>

      {/* Importing FilterSection and FilterDrawer from Filter */}
      <div className="h-full flex flex-row lg:gap-4 lg:m-4 relative bottom-10 ">
        <div className="h-fit py-5  my-2 lg:my-4 rounded-lg  w-0 lg:w-60 bg-gradient-to-tl to-secondaryLight1/40 from-secondaryLight/60 shadow-2xl invisible lg:visible">
          <FilterSection />
        </div>
        <section className="w-full lg:flex-auto  p-2 lg:p-4">
          <div className="h-20 lg:rounded-lg bg-gradient-to-tl to-secondaryLight1/40 from-secondaryLight/60 lg:shadow-2xl flex justify-end items-end gap-4 lg:mx-3">
            <div className=" visible lg:invisible">
              <FilterDrawer />
            </div>

            {/* Importing SortingSection from Sorting */}
            <div>
              <SortingSection />
            </div>
          </div>

          {/* Importing ProductCard from components */}
          <div className="flex flex-col text-primaryDark ">
            <div className=" bg-secondaryLight1/20 lg:rounded-lg lg:shadow-2xl lg:m-2 lg:p-4">
              <h1 className="text-2xl font-semibold m-4">
                Sub-Catagory Products
              </h1>

              <ProductCard />
            </div>
            <div className=" bg-primaryLight lg:rounded-lg lg:shadow-2xl lg:m-2 lg:p-4">
              <h1 className="text-2xl font-semibold  m-4">You May Also Like</h1>
              <ProductCard />
            </div>
          </div>
        </section>
      </div>

      {/* Adding Pagination */}
      <Pagination
        className="py-8 grid place-items-center"
        variant="outlined"
        color="primary"
        count={10}
        page={page}
        onChange={handleChange}
      />

      {/* <h1>{page}</h1> */}
      <div className="flex pb-3 place-content-center">
        <h3 className="pr-8 text-lg font-semibold">
          Did you find what you were looking for?
        </h3>
        <div className="mr-2">
          <button
            className="text-center bg-[#FACD4A] hover:bg-[#FACD4A]/95 hover:text-white font-normal flex-initial rounded w-20 p-1 ml-12"
            onClick={handleYesClick}
          >
            Yes
          </button>
        </div>

        <div className="">
          <button
            className="text-center bg-[#979797] hover:bg-secondaryLight/60 hover:text-white font-normal flex-initial rounded w-20 p-1 ml-12"
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default SubCatagory;
