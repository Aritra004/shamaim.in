import React, { useState } from "react";
import { RadioButton } from "../components";
import { IoMdLocate } from "react-icons/io";

const handleOrder = () => {
  console.log("Order button clicked");
};

const PersonalInfo = () => {
  // const AddressType = ["Home", "Work"];
  // const [address, setAddress] = useState("Home");
  const [gender, setGender] = useState("");

  // const addressChangeHandler = (e) => {
  //   setAddress(e.target.value);
  // };

  const genderChangeHandler = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-left ">
        <button
          className="flex justify-center border-black border text-lg font-bold text-align:center bg-[#78E844] hover:bg-[#78E844]/60 hover:font-bold font-normal rounded-lg mx-6 w-40 py-1 px-3 h-10 ml-8"
          onClick={handleOrder}
        >
          Personal Info.
        </button>

        <input
          id="First Name"
          name="First Name"
          type="text"
          className="mx-8 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black  h-10 w-96"
          placeholder="First Name"
        />

        <input
          id="Last Name"
          name="Last Namee"
          type="text"
          className="mx-10 ml-10 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-10 w-96"
          placeholder="Last Name"
        />
      </div>

      <div className="flex ml-60 mt-4 text-xl">
        <h3>Gender</h3>
      </div>
      <div className="flex ml-64 mt-2 ">
        <div className="mr-4">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={genderChangeHandler}
          />
        </div>
        <div className="ml-24">
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={genderChangeHandler}
          />
        </div>
      </div>
      <div className=" ml-60 mt-4 text-xl">
      <h3>Email Address</h3>
      </div>
      <div className="flex items-cente">
      <input
          id="Name"
          name="Name"
          type="text"
          className="mx-6 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black ml-60 mt-4 h-10 w-full mr-80"
          placeholder=" "
        />
      </div>
      <div className="flex ml-60 mt-4 text-xl">
      <h3>Mobile Number</h3>
      </div>
      <div>
      <input
          id="Name"
          name="Name"
          type="text"
          className="mx-6 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black ml-60 mt-4 h-10 w-96"
          placeholder=" "
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
