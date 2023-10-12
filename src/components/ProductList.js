import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  // if (grid_view === true) {
  return (
    <div>
      <div className="mt-5 d-flex align-items-center justify-content-between" style={{gap: "5px"}}>
        <div>
          <img
            src="https://i.pinimg.com/736x/d1/4a/bd/d14abd4c6a96371537aa4bc9b89f9f2c.jpg"
            alt=""
            style={{ width: "300px", height: "400px", marginRight: "10px" }}
          />
        </div>
        <div>
        <img
            src="https://i.pinimg.com/originals/6b/5d/7f/6b5d7fa7f1053bd6f7c6b926ad19fb41.jpg"
            alt=""
            style={{ width: "300px", height: "400px", marginRight: "10px" }}
          />
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.07PeqS8O9pBPNL_Bj4KfmwHaHa?pid=ImgDet&rs=1"
            alt=""
            style={{ width: "300px", height: "400px" }}
          />
        </div>
      </div>
      <GridView products={filter_products} />
    </div>
  );
  // }

  // if (grid_view === false) {
  //   return <ListView products={filter_products} />;
  // }
};

export default ProductList;
