import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const demoApi = createApi({
  reducerPath: "demoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products/?limit=10&skip=0",
    }),
    getProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = demoApi;
