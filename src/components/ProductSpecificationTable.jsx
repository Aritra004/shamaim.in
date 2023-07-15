import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../api/productApi";

const ProductSpecificationTable = () => {
  const { productId } = useParams();

  const {
    data: productData,
    error: productError,
    isLoading: productIsLoading,
  } = useGetSingleProductQuery(productId);

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!productIsLoading) {
      setIsLoading(false);
    }

    if (productError) {
      setError(productError);
    }

    if (productData) {
      setProduct(productData.data.product);
    }
  }, [productData, productError, productIsLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {/* Adding Product Specification Chart */}
      <h3 className="font-bold underline text-xs ml-2">PRODUCT SPECS</h3>
      <div className="m-1 p-1">
        <div className="w-full">
          <div className="text-xs">
            <p className="mb-1 leading-3">
              Type: <span className="font-bold">{product.type}</span>
            </p>
            <p className="mb-1 leading-3">
              Sleeves: <span className="font-bold">{product.sleeves}</span>
            </p>
            <p className="mb-1 leading-3">
              Fit: <span className="font-bold">{product.fit}</span>
            </p>
            <p className="mb-1 leading-3">
              Fabric: <span className="text-green-500">{product.fabric}</span>
            </p>
            <p className="mb-1 leading-3">
              Pack of:{" "}
              <span className="bg-yellow-500 rounded">{product.pack_of}</span>
            </p>
            <p className="mb-4 leading-3 text-red-600">
              Wash Instruction:{" "}
              <span className="text-green-500">{product.wash_instruction}</span>
            </p>
            <p className="mb-1 leading-3 text-gray-500">
              Product Code:{" "}
              <span className="text-gray-500">{product.product_id}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSpecificationTable;
