import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLocate } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { RadioButton } from "../components";
import { addAddress } from "../api/addressSlice";
import { ToastContainer, toast } from "react-toastify";

const initialState = {
  state: "",
  street_name: "",
  pin_code: "",
  city: "",
  landmark: "",
};

const ManageAddress = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { state, street_name, pin_code, city, landmark } = formValue;
  const [showRegister, setShowRegister] = useState(false);

  const { loading, isSuccess, error ,isError} = useSelector((state) => state.address);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    console.table(state, street_name, pin_code, city, landmark);

    if (
      // !house_no ||
      !state ||
      !street_name ||
      !pin_code ||
      !city ||
      !landmark
    ) {
      toast.error("Please fill in all the fields");
    } else {
      const userAddressData = {
        // house_no,
        state,
        street_name,
        pin_code,
        city,
        landmark,
      };
      dispatch(addAddress(userAddressData))
        .unwrap()
        .then((response) => {
          if (response.success) {
            setShowRegister(true);
          } else {
            toast.error(response.msg);
          }
        })
        .catch((error) => {
          toast.error(error.toString());
        });
    }
  };

  useEffect(() => {
    console.log("isSuccess:", isSuccess);
    console.log("isError:", isError);

    if (isSuccess) {
      if (showRegister) {
        console.log("Saved successfully");
      }
    }
  }, [isSuccess, showRegister]);

  const handleManageAddress = () => {
    console.log("Manage Address button clicked");
  };
  const AddressType = ["Home", "Work"];
  const [address, setAddress] = useState("Home");

  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };
  const handleAddAddress = () => {
    console.log("Add Address button clicked");
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-start items-start">
        <button
          id="manageButton"
          className="flex justify-center border-black border text-align:center bg-[#78E844] hover:bg-[#78E844]/60 hover:font-bold font-normal rounded-lg w-60 py-1 px-3 h-10 ml-3"
          onClick={handleManageAddress}
        >
          Manage Address
        </button>

        <button
          id="addNewAddress"
          className="flex justify-center border-black border text-align:center bg-[#78E844] hover:bg-[#78E844]/60 hover:font-bold font-normal rounded-lg w-60 py-1 px-3 h-10 ml-3"
          onClick={handleAddAddress}
        >
          ADD NEW ADDRESS
        </button>
      </div>

      <div className="flex justify-center items-center">
        <div className="p-6 my-4 rounded-lg w-fit bg-primaryDark/20 shadow-2xl bg-[#d9cebb] ">
          <button
            id="currntLoc"
            type="button"
            className="mx-3 mt-4 p-2 md:p-4 rounded-full text-center text-secondaryDark w-96 bg-[#ffd38e] h-6"
            style={{
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IoMdLocate className="mr-2" />
            Use my current Location
          </button>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              className="mx-3 mt-4 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-fit w-96"
              placeholder="Name"
            />
            <input
              id="mobile"
              name="mobile"
              type="tel"
              className="mx-3 mt-4 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-fit w-96"
              placeholder="Mobile Number"
            />
          </div>
          <div>
            <input
              id="pin_code"
              name="pin_code"
              value={formValue.pin_code}
              onChange={handleChange}
              type="text"
              className="mx-3 mt-4 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-fit w-96"
              placeholder="Pincode"
            />
            <input
              id="locality"
              name="locality"
              type="text"
              className="mx-3 mt-4 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-fit w-96"
              placeholder="Locality"
            />
          </div>
          <div>
            <input
              id="street_name"
              name="street_name"
              value={formValue.street_name}
              onChange={handleChange}
              type="text"
              className="mx-1 mt-4 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-20 w-full"
              placeholder="Address (Area and Street)"
            />
          </div>
          <div>
            <input
              id="city"
              name="city"
              value={formValue.city}
              onChange={handleChange}
              type="text"
              className="mx-3 mt-4 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-10 w-96"
              placeholder="City/District/Town"
            />
            <select
              id="state"
              name="state"
              value={formValue.state}
              onChange={handleChange}
              className="mx-3 mt-4 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-fit w-96"
            >
              <option value="">-Select State-</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div>
            <input
              id="landmark"
              name="landmark"
              type="Landmark(Optional)"
              value={formValue.landmark}
              onChange={handleChange}
              className="mx-3 mt-4 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-10 w-96"
              placeholder="Landmark(Optional)"
            />
            <input
              id="Alternate Phone (optional)"
              name="Alternate Phone (optional)"
              type="Alternate Phone (optional)"
              className="mx-3 mt-4 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-10 w-96"
              placeholder="Alternate Phone (optional)"
            />
          </div>
          <div className="mx-4 mt-4s text-2xl ">
            <h3>Address Type</h3>
            {AddressType.map((e) => (
              <RadioButton
                changed={addressChangeHandler}
                id="1"
                isSelected={address === `${e}`}
                key={`${e}`}
                label={`${e}`}
                value={`${e}`}
              />
            ))}
          </div>
          <div>
            <button
              id="save"
              className="mx-3 mt-4 mb-6 p-2 px-6 bg-[#00e38d] hover:bg-[#00e38d]/70 hover:font-bold font-normal rounded-lg"
              onClick={onSave}
            >
              Save
            </button>

            <button
              id="cancel"
              className="mx-3 mb-6 p-2 px-6 bg-[#ff5959] hover:bg-[#ff5959]/70 hover:font-bold font-normal rounded-lg"
              // onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAddress;
