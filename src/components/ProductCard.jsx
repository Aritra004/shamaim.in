import React, { useState, useEffect } from "react";
import { useGetAllSubCategoryQuery } from "../api/productApi";
import { useGetAllColorsQuery, useGetAllSizesQuery } from "../api/colorApi";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function ProductCard() {
  const {
    data: queryData,
    error: queryError,
    isLoading: queryIsLoading,
  } = useGetAllSubCategoryQuery();

  const { data: colorData } = useGetAllColorsQuery();
  const { data: sizeData } = useGetAllSizesQuery();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!queryIsLoading) {
      setIsLoading(false);
    }

    if (queryError) {
      setError(queryError);
    }

    if (queryData) {
      setData(queryData.data);
    }

    if (colorData) {
      setColors(colorData.data.colors);
    }

    if (sizeData) {
      setSizes(sizeData.data.sizes);
    }
  }, [queryData, queryError, queryIsLoading]);

  const handleClick = (productId) => {
    console.log("Product ID:", productId);
    navigate(`/Product/${productId}`);
  };

  if (queryIsLoading || !sizes || !colors) {
    return <p>Loading...</p>;
  }

  if (queryError) {
    return <p>Error: {queryError.message}</p>;
  }

  if (!data || !data.products) {
    return <p>No data available.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:gap-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.products.map((product) => (
        <div className="sm:m-1 p-1" key={product.product_id}>
          <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-gradient-to-tl to-gradientColor1/70 from-gradientColor2/80 ">
            <Link
              to={`/Product/${product.product_id}`}
              onClick={() => handleClick(product.product_id)}
            >
              <img
                className="object-cover w-full h-40 mb-2 transition duration-300 transform hover:scale-105"
                src={product.thumbnail_image}
                alt={product.product_title}
              />
            </Link>

            <div className="p-1 grid grid-cols-1">
              <h4 className="text-center text-xs font-bold text-slate-800 ">
                {product.product_title}
              </h4>

              <p className="mb-2 leading-normal text-center">
                <span>MRP:</span>{" "}
                <span className="line-through">{product.base_price}</span>{" "}
                {product.discounted_price}
              </p>

              <span className="mx-2 px-5 text-xs p-1 justify-self-center leading-normal bg-black rounded-full text center w-fit text-slate-300">
                <span className="text-white"> Size Available: </span>
                {sizes.map((size) => (
                  <span key={size.size_id} className="text-white">
                    {size.size_name} ,
                  </span>
                ))}
              </span>

              {/* <p className="text-sm text-gray-500 mb-1 flex flex-wrap">
                {colors.map((color) => (
                  <span key={color.color_id} className="mr-2 mb-1">
                    <span
                      className="w-4 h-4 rounded-full mr-1"
                      style={{ backgroundColor: color.color_code }}
                    ></span>
                    {color.color_name}
                  </span>
                ))}
              </p> */}

              <p className="text-center">In Stock</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
