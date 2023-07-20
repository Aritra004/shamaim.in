import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const subCategoryApi = createApi({
  reducerPath: "subCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",
  }),
  endpoints: (builder) => ({
    getAllSubCategory: builder.query({
      query: () => "get-products/1/4?color=2&size=2",
    }),
    getSingleProduct: builder.query({
      query: (product_id) => `get-product/${product_id}`,
    }),
  }),
});
export const { useGetAllSubCategoryQuery, useGetSingleProductQuery } =
  subCategoryApi;
