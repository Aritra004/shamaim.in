import { Link } from "react-router-dom";
import React, { useState } from "react";
import GoToTop from "../components/GoToTop";

const ReturnPolicy = () => {
  const [showRadioButtons, setShowRadioButtons] = useState(false);
  const [showRadio2Buttons, setShowRadio2Buttons] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [showReplacementDropdown, setShowReplacementDropdown] = useState(false);

  const handleReasonClick = () => {
    setShowRadioButtons(!showRadioButtons);
  };
  const handleReason2Click = () => {
    setShowRadio2Buttons(!showRadio2Buttons);
  };
  const handleReason3Click = () => {
    setShowPlaceholder(!showPlaceholder); // Toggle the visibility of the placeholder input field
  };
  const handleReplacementClick = () => {
    setShowReplacementDropdown(!showReplacementDropdown);
  };
  return (
    <div>
      <button
        className="flex justify-center border-black border text-lg font-bold text-align:center bg-[#78E844] hover:bg-[#78E844]/60 hover:font-bold font-normal rounded-lg mb-8 mx-6 w-40 py-1 px-3 h-10 ml-8"
        // onClick="{}"
      >
        Return
      </button>

      <div className=" ml-8 text-primaryDark mb-4 text-xl">
        <label onClick={handleReasonClick}>Reason For Return:</label>
        <br />
        {showRadioButtons && (
          <>
            <input
              type="radio"
              id="danger"
              name="reason"
              value="danger"
              className="text-lg ml-2"
            />
            <label htmlFor="danger"> Damaged Product Recieved</label>
            <br />
            <input
              type="radio"
              id="wrong-size"
              name="reason"
              value="wrong-size"
              className="text-lg ml-2"
            />
            <label htmlFor="wrong-size"> Recieved wrong Size </label>
            <br />
            <input
              type="radio"
              id="Wrong-Product"
              name="reason"
              value="Wrong-Product"
              className="text-lg ml-2"
            />
            <label htmlFor="Wrong-Product"> Recieve Wrong Product</label>
            <br />
            <input
              type="radio"
              id="not-up-to-expectations"
              name="reason"
              value="not-up-to-expectations"
              className="text-lg ml-2"
            />
            <label htmlFor="not-up-to-expectations">
              Product Does not meet ExPectations
            </label>
            <br />
            <input
              type="radio"
              id="damage-Packaging"
              name="reason"
              value="damage-Packaging"
              className="text-lg ml-2"
            />
            <label htmlFor="damage-Packaging"> Damaged Packaging</label>
            <br />
            <input
              type="radio"
              id="others"
              name="reason"
              value="others"
              className="text-lg ml-2"
            />
            <label onClick={handleReason3Click} htmlFor="others">
              Others
            </label>
            <br />

            {showPlaceholder && (
              <div>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="mx-3 mt-4 text-center focus:outline-none rounded-md bg-[#FFD188]/10 border border-black h-24 w-80"
                  placeholder="Describe Your Reason in Brief"
                />
              </div>
            )}
            {/* Add more radio buttons as needed */}
          </>
        )}

        <div className=" mt-2 text-primaryDark text-xl">
          <label onClick={handleReason2Click}>
            Product and Packaging Condition
          </label>

          <br />
          {showRadio2Buttons && (
            <>
              <input
                type="checkbox"
                id="defective"
                name="reason"
                value="defective"
                className=" text-lg ml-2"
              />
              <label htmlFor="defective">
                the Product is not damaged or tampered with
              </label>
              <br />
              <input
                type="checkbox"
                id="wrong-item"
                name="reason"
                value="wrong-item"
                className=" text-lg ml-2"
              />
              <label htmlFor="wrong-item"> Product tag intact</label>
              <br />
              <input
                type="checkbox"
                id="change-of-mind"
                name="reason"
                value="change-of-mind"
                className=" text-lg ml-2"
              />
              <label htmlFor="change-of-mind"> Product bill</label>
              <br />
              <input
                type="checkbox"
                id="size-issue"
                name="reason"
                value="size-issue"
                className=" text-lg ml-2"
              />
              <label htmlFor="size-issue"> Packaging damage</label>
              <br />
              <input
                type="checkbox"
                id="used-unwashed"
                name="reason"
                value="used-unwashed"
                className=" text-lg ml-2"
              />
              <label htmlFor="used-unwashed">
                Product is used, unwashed, and in the same condition as received
              </label>
              <br />
              <input
                type="checkbox"
                id="original-packaging"
                name="reason"
                value="original-packaging"
                className=" text-lg ml-2"
              />
              <label htmlFor="original-packaging">
                Product is in its original packaging and all tags attached
              </label>
              <br />
              {/* Add more checkboxes as needed */}
            </>
          )}
        </div>
      </div>
      <div className="ml-8 mt-4 text-primaryDark">
        <label className="text-xl">Want to complete Refund on Return?</label>

        <br />
        <input type="radio" id="refundYes" name="refund" value="yes" />
        <label htmlFor="refundYes" className=" text-lg ml-2">
          Yes
        </label>
        <input type="radio" id="refundNo" name="refund" value="no" />
        <label htmlFor="refundNo" className=" text-lg ml-2">
          No
        </label>
      </div>

      <div className="ml-8 mt-4 text-xl text-primaryDark ">
        Account number:
        <input
          type="text"
          placeholder="Enter account number"
          className="ml-4 h-6 w-80"
        />
      </div>
      <div className="ml-8 mt-4 text-xl text-primaryDark">
        IFSC Code:
        <input
          type="text"
          placeholder="Enter IFSC code"
          className="ml-4 h-6 w-80"
        />
      </div>
      <div className="ml-8 text-xl mt-4 text-primaryDark">
        Branch Name:
        <input
          type="text"
          placeholder="Enter Branch Name"
          className="ml-4 h-6 w-80"
        />
      </div>
      <div className="ml-8 mt-4 text-primaryDark">
        <button className=" text-xl" onClick={handleReplacementClick}>
          Would like replacement of product.
        </button>
        <br />
        {showReplacementDropdown && (
          <>
            <input type="radio" id="size" name="reason" value="size" />
            <label htmlFor="size" className=" text-lg ml-2">
              Size
            </label>
            <br />
            <input type="radio" id="color" name="reason" value="color" />
            <label htmlFor="color" className=" text-lg ml-2">
              Color
            </label>
            <br />
          </>
        )}
      </div>
      <div className="w-610 h-10 mb-20 flex ">
        <button
          className=" ml-8 mb-20 flex justify-center border-black border text-lg font-bold text-align:center bg-[#78E844] hover:bg-[#78E844]/60 hover:font-bold font-normal rounded-lg mt-20 w-40 py-1 px-3 h-10"
          // onClick="{}"
        >
          Submit
        </button>
      </div>
      <GoToTop />
    </div>
  );
};

export default ReturnPolicy;
