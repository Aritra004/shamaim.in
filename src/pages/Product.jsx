import React from "react";
import {
  ProductBreadcrumbs,
  ProductDetails,
  ProductImage,
} from "../components";
import ProductCardScrollBar from "../components/productCardScrollbar";

const Product = () => {
  return (
    <>
      {/* Importing ProductBreadcrumbs from components */}
      <div>
        <ProductBreadcrumbs />
      </div>

      {/* Importing ProductImage from components */}
      <div className="flex flex-col lg:flex-row w-full   ">
        <div className="w-2/5 bg-primaryLight lg:rounded-lg lg:shadow-2xl lg:m-2 lg:p-4 ">
          <ProductImage />
        </div>

        {/* Importing ProductDetails from components */}
        <div className="w-3/5 bg-primaryLight lg:rounded-lg lg:shadow-2xl lg:m-2 lg:p-4">
          <ProductDetails />
        </div>
      </div>

      {/* Importing ProductScrollbar from components */}
      <div className="text-center lg:m-2 lg:p-4">
        Frequently Bought Together
      </div>
      <div className="overflow-y-auto scrollbar-hide">
        <ProductCardScrollBar />
      </div>
      <div className="text-center lg:m-2 lg:p-4">You may also like</div>
      <div className="overflow-y-auto scrollbar-hide">
        <ProductCardScrollBar />
      </div>
    </>
  );
};

export default Product;
