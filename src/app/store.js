import { configureStore } from "@reduxjs/toolkit";
import { demoApi } from "../api/apiSlice";
import { subCategoryApi } from "../api/productApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { colorApi } from "../api/colorApi";
import authSlice from "../api/authSlice";
import addressSlice from "../api/addressSlice";


export const store = configureStore({
  reducer: {
    [demoApi.reducerPath]: demoApi.reducer,
    [subCategoryApi.reducerPath]: subCategoryApi.reducer,
    [colorApi.reducerPath]: colorApi.reducer,
    user: authSlice,
    address: addressSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(subCategoryApi.middleware)
      .concat(colorApi.middleware),
});

setupListeners(store.dispatch);
