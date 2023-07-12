import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbarr, Footer } from "./components";
import {
  Home,
  NearbyStore,
  SubCatagory,
  Product,
  Tracking,
  Cart,
  Wishlist,
  Myaccount,
  About,
  Contact,
  Blogs,
  FAQs,
  ReturnPolicy,
  SmileStories,
  Login,
  PaymentOne,
  PaymentTwo,
  Confirmation,
  ManageAddress,
  PersonalInfo,
} from "./pages";
import { subCategoryApi } from "./api/productApi";
import { demoApi } from "./api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { ToastContainer } from "react-toastify";

function App() {
  
  return (
    <>
      <div className="bg-primaryLight h-full">
        {/* <ApiProvider api={ demoApi}> */}
        <BrowserRouter>
          <Navbarr />

          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/NearbyStore" element={<NearbyStore />} />
            <Route path="/AddressInfo" element={<ManageAddress />} />
            <Route path="/Tracking" element={<Tracking />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Myaccount" element={<Myaccount />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/returnPolicy" element={<ReturnPolicy />} />
            <Route path="/smileStories" element={<SmileStories />} />
            <Route path="/SubCatagory" element={<SubCatagory />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/paymentOne" element={<PaymentOne />} />
            <Route path="/paymentTwo" element={<PaymentTwo />} />
            <Route path="/orderPlaced" element={<Confirmation />} />
            <Route path="/PersonalInfo" element={<PersonalInfo />} />
            <Route path="/Product/:productId" element={<Product />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </BrowserRouter>
        {/* </ApiProvider> */}
      </div>
    </>
  );
}

export default App;
