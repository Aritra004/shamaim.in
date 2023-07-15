import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import RadioButton from "./RadioButton";
import ProductSpecificationTable from "./ProductSpecificationTable";
import { useGetSingleProductQuery } from "../api/productApi";

const ProductDetails = () => {
  const { productId } = useParams();

  const {
    data: ProData,
    error: ProError,
    isLoading: ProIsLoading,
  } = useGetSingleProductQuery(productId);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!ProIsLoading) {
      setIsLoading(false);
    }

    if (ProError) {
      setError(ProError);
    }

    if (ProData) {
      setData(ProData.data);
    }
  }, [ProData, ProError, ProIsLoading]);

  const Sizes = ["Small", "Medium", "Large"];
  const Colors = data?.product?.colors || [];

  const [pincode, setPincode] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const sizeChangeHandler = (e) => {
    setSize(e.target.value);
  };

  const colorChangeHandler = (e) => {
    setColor(e.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const product = data?.product;

  return (
    <>
      {/* Share Icon */}
      <div className="text-right text-gray-500 invisible sm:visible">
        <IosShareOutlinedIcon />
        Share
      </div>
      {/* product details */}
      <div>
        <div className="sm:m-1 p-1">
          <div className="w-full">
            <div>
              <h1 className="mb-2 font-bold">{product.title}</h1>

              <p className="mb-1 leading-normal">
                <span className="text-xl">{product.discounted_price}</span>
                <span className="line-through">{product.base_price}</span>{" "}
              </p>

              <p className="mb-2 leading-normal">
                <span className="text-sm">
                  {product.star}
                  <StarIcon sx={{ fontSize: 12 }} />{" "}
                </span>
                <span className="text-gray-500">{product.rating}</span>
              </p>
              <h3 className="text-blue-500 underline">
                About the DESIGN (Artist’s Perspective)
              </h3>
              <p className="mb-2  leading-3">
                <span className="text-xs">({product.description})</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* deliver details */}
      <div className="ml-2">
        <h6 className="font-bold  text-sm leading-normal">
          DELIVERY OPTIONS{" "}
          <DeliveryDiningRoundedIcon className="leading-normal" />
        </h6>
        <form>
          <label className="text-black">
            <input
              className="h-6 w-60 border-red-700 hover:border-red-400"
              type="text"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </label>
          <button className="-m-24 text-red-600 w-32" type="submit">
            CHECK
          </button>
        </form>

        <p className="text-sm text-red-500">
          100% Original & Authentic products.
        </p>

        {/* Size picker */}
        <div className="grid grid-flow-row sm:grid-flow-col">
          <h3 className="text-sm font-semibold">Sizes:</h3>

          {Sizes.map((e) => (
            <RadioButton
              key={e}
              className="space-x-1"
              changed={sizeChangeHandler}
              isSelected={size === e}
              label={e}
              value={e}
            />
          ))}
        </div>

        {/* Color Picker */}
        <div className="grid grid-flow-row sm:grid-flow-col">
          <h3 className="text-sm font-semibold">Color:</h3>

          {Colors.map((color, index) => (
            <RadioButton
              key={index}
              className="space-x-1"
              changed={colorChangeHandler}
              isSelected={color === color.color_name}
              label={color.color_name}
              value={color.color_name}
            />
          ))}
        </div>
      </div>

      {/* Importing ProductSpecificationTable from components */}
      <div>
        <ProductSpecificationTable />
      </div>
    </>
  );
};

export default ProductDetails;
