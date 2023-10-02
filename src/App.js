import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MUITheme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Myaccount from "./Myaccount";
import Login from "./Login";
import Register from "./Register";
import Policy from "./Policy";
import "./App.css";
import Orders from "./components/Orders";
import Profile from "./components/Profile/Profile";
import Maddress from "./components/mAddress/Maddress";

const App = () => {
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: "#0a1435",
      },
      common: {
        white: "#ffffff",
      },
    },
  });

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <MUITheme theme={muiTheme}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/myaccount/login" element={<Login />} />
            <Route path="/myaccount/signup" element={<Register />} />
            <Route path="/myaccount/orders" element={<Orders />} />
            <Route path="/myaccount/profile" element={<Profile />} />
            <Route path="/myaccount/manage" element={<Maddress />} />
            <Route path="/return-and-refund-policy" element={<Policy />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </MUITheme>
    </ThemeProvider>
  );
};

export default App;
