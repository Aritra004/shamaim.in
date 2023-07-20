import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const colorApi = createApi({
  reducerPath: "colorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",
  }),
  endpoints: (builder) => ({
    getAllColors: builder.query({
      query: () => "get-colors",
    }),
    getAllSizes: builder.query({
      query: () => "get-size-list",
    }),
  }),
});
export const { useGetAllColorsQuery, useGetAllSizesQuery } = colorApi;
