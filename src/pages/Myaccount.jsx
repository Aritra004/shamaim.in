import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";

const Myaccount = () => {
  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("user");
    window.location.reload();
  };

  let user = null;
  const shamaimUser = localStorage.getItem("user");

  try {
    user = JSON.parse(shamaimUser);
  } catch (error) {
    console.error("Error parsing user JSON:", error);
  }

  const isLoggedIn = user && user.success;
  return (
    <>
      {/* User Pic */}
      <div className="flex flex-row">
        <Avatar alt="Remy Sharp" src="src\assets\avtar.jpg" className="ml-4" />
        {isLoggedIn ? (
          <h2 className="mt-2 font-bold">Hello, {user && user.name},</h2>
        ) : (
          <h2 className="mt-2 font-bold">Hello, Mr. X,</h2>
        )}
      </div>

      {/* Different Options for the users */}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-3 ml-1 sm:ml-4 mt-10 mb-10 h-48   ">
        <div className="flex flex-row w-30  sm:w-60 border border-black  rounded-lg mb-2 ">
          <img
            className="h-8 sm:h-14 ml-1 mt-1 "
            src="src\assets\box.jpg"
          ></img>
          <div className="flex flex-col text-xs mt-2">
            <Link to="/Tracking">
              <h2 className="font-bold">Your Orders</h2>
            </Link>
            <p>Track,Return, or buy things again</p>
          </div>
        </div>

        <div className="flex flex-row w-30  sm:w-60 border border-black  rounded-lg mb-2  ">
          <img
            className="h-8 sm:h-14 ml-1 mt-1"
            src="src\assets\security.jpg"
          ></img>
          <div className="flex flex-col text-xs mt-2">
            <Link to="/PersonalInfo">
              <h2 className="font-bold">Personal Info. </h2>
            </Link>
            <p>Edit your personal info name , mobile number</p>
          </div>
        </div>
        <div className="flex flex-row w-30  sm:w-60 border border-black  rounded-lg mb-2  ">
          <img
            className="h-8 sm:h-14 ml-1 mt-1 "
            src="src\assets\address.jpg"
          ></img>
          <Link to="/AddressInfo">
            <div className="flex flex-col text-xs mt-2">
              <h2 className="font-bold">Manage Address</h2>
              <p>Edit address for orders and gifts</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-row w-30  sm:w-60 border border-black  rounded-lg mb-2  ">
          <img
            className="h-8 sm:h-14 ml-1 mt-1"
            src="src\assets\payment.jpg"
          ></img>
          <div className="flex flex-col text-xs mt-2">
            <h2 className="font-bold">Payment Options</h2>
            <p>Edit or add payment methods</p>
          </div>
        </div>
        <div className="flex flex-row w-30  sm:w-60 border border-black  rounded-lg mb-2 ">
          <img
            className="h-8 sm:h-14 ml-1 mt-1"
            src="src\assets\contacts.jpg"
          ></img>
          <div className="flex flex-col text-xs mt-2">
            <Link to="/Contact">
              <h2 className="font-bold mt-2 sm:mt-4">Contact Us</h2>
            </Link>
          </div>
        </div>
        <div className="flex flex-row w-30  sm:w-60 border border-black  rounded-lg mb-2  ">
          {isLoggedIn ? (
            <button
              className="flex flex-row items-center"
              onClick={handleLogout}
            >
              <img
                className="h-8 sm:h-14 ml-1 mt-1"
                src="src\assets\logout.jpg"
                alt="Logout"
              />
              <div className="flex flex-col text-xs mt-2">
                <h2 className="font-bold mt-2 sm:mt-4">LOG OUT</h2>
              </div>
            </button>
          ) : (
            <Link to="/login">
              <div className="flex flex-row items-center">
                <img
                  className="h-8 sm:h-14 ml-1 mt-1"
                  src="src\assets\logout.jpg"
                  alt="Logout"
                />
                <div className="flex flex-col text-xs mt-2">
                  <h2 className="font-bold mt-2 sm:mt-4">LOG IN</h2>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-8 m-4 text-justify ">
        <h1 className="text-blue-500 underline font-bold  ">FAQs</h1>
        <p className="font-bold  mt-4">
          What happens when I update my email address (or mobile number)?
        </p>
        <p>
          Your login email id (or mobile number) changes, likewise. You'll
          receive all your account related communication on your updated email
          address (or mobile number).
        </p>
        <p className="font-bold  mt-4">
          When will my Shamaim account be updated with the new email address (or
          mobile number)?
        </p>
        <p>
          It happens as soon as you confirm the verification code sent to your
          email (or mobile) and save the changes.
        </p>
        <p className="font-bold  mt-4">
          What happens to my existing Shamaim account when I update my email
          address (or mobile number)?
        </p>
        <p>
          Updating your email address (or mobile number) doesn't invalidate your
          account. Your account remains fully functional. You'll continue seeing
          your Order history, saved information and personal details.
        </p>
        <p className="font-bold  mt-4">
          Does my Seller account get affected when I update my email address?
        </p>
        <p>
          Shamaim has a 'single sign-on' policy. Any changes will reflect in
          your Seller account also.
        </p>
      </div>

      {/* Deactivate Button */}
      <div className="mb-8 ml-4">
        <Button variant="outlined" color="error">
          Deactivate My Account
        </Button>
      </div>
    </>
  );
};

export default Myaccount;
