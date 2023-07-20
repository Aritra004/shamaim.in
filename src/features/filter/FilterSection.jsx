import React, { useState } from "react";
import { RadioButton, Checkbox } from "../../components";
import { NativeSelect, Switch, Group, useMantineTheme } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons";

const FilterSection = () => {
  const theme = useMantineTheme();
  const Genders = ["Male", "Female", "Unisex", "All"];

  const Sizes = ["S", "M", "L", "XL", "XXL"];
  const Colors = ["Red", "Blue", "Green", "Grey", "Black", "White", "All"];

  const priceRange = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ];

  const [minValue, setMinValue] = useState("Min");
  const [maxValue, setMaxValue] = useState("Max");
  const [gender, setGender] = useState("Male");
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [price, setPrice] = useState();

  const [avability, setAvability] = useState(false);
  const genderChangeHandler = (e) => {
    setGender(e.target.value);
  };
  // const colorChangeHandler = (e) => {
  //  setColor(e.target.value);
  // };
  // const priceChangeHandler = (e) => {
  //  setPrice(e.target.value);
  // };
  const [selectedSize, setSelectedSize] = useState(null);
  const sizeChangeHandler = (e) => {
    setSize(e.target.value);
    setSelectedSize(value);
  };

  return (
    <>
      <div className="p-2 space-y-2 ">
        <div className="flex flex-row ">
          <h1 className="text-2xl font-semibold flex-initial w-16  text-primaryDark">
            Filters
          </h1>
          <button
            className="text-base text-center bg-primaryDark/20 hover:bg-primaryDark/60 hover:text-white font-normal flex-initial rounded-full w-20 p-1 ml-12 "
            // onClick="{}"
          >
            Clear All
          </button>
        </div>
        <h3 className="text-xl underline text-primaryDark">Gender</h3>
        <div className="space-y-2 text-primaryDark">
          {Genders.map((e, index) => (
            <RadioButton
              key={index}
              changed={genderChangeHandler}
              id={`gender-${index}`}
              isSelected={gender === `${e}`}
              label={e}
              value={e}
            />
          ))}
        </div>

        <h3 className="text-xl underline text-primaryDark">Size</h3>
        <div className="flex flex-wrap">
          {Sizes.map((e) => (
            <button
              key={e}
              className={`border border-black rounded-md px-4 py-2 mr-2 mb-2 bg-black text-white hover:bg-[#C19A6B] hover:bg-brown
        w-6 sm:w-6 h-6 sm:h-6 text-xsm sm:text-base flex items-center justify-center`}
              onClick={() => sizeChangeHandler(e)}
              onMouseEnter={() => sizeChangeHandler(e)}
            >
              {e}
            </button>
          ))}
        </div>

        {/* <h3 className="text-xl underline">Price Range</h3> */}
        <div>
          <label
            htmlFor="price-range"
            className="text-xl underline text-primaryDark"
          >
            Price Range
          </label>
          <input
            type="range"
            min="299"
            max="1499"
            step="100"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            id="price-range"
            className="h-1 w-full mt-1 mb-2 appearance-none bg-black rounded-full text-primaryDark"
          />
          <div className="flex justify-between text-primaryDark">
            <span>299</span>
            <span>{price}</span>
            <span>1499</span>
          </div>
        </div>

        {/* <h3 className="text-xl underline">Color</h3> */}
        <div>
          <label
            htmlFor="color-select"
            className="text-xl underline text-primaryDark"
          >
            Color
          </label>
          <div className="flex flex-wrap text-primaryDark">
            {Colors.map((e, index) => (
              <button
                key={index}
                className={`rounded-full px-2 py-2 m-1 ${
                  color === e ? "bg-gray-900 text-white" : ""
                } text-xs`}
                style={{ backgroundColor: e }}
                onClick={() => setColor(e)}
              >
                {color === e && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 absolute"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      fill="black"
                      d="M6.707 14.293a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L6 11.586l8.293-8.293a1 1 0 0 1 1.414 1.414l-9 9z"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* <div className="flex  justify-between ">
                    <NativeSelect
                        data={priceRange}
                        value={minValue}
                        label="Min Value"
                        size="xs"
                        radius="sm"
                        onChange={(event) => setMinValue(event.currentTarget.value)}
                        styles={{
                            rightSection: { display: "none" },
                            input: { padding: "1px", paddingLeft: "5px" },
                        }}
                    />
                    <p className="justify-self-center self-end font-semibold p-2 ">to</p>
                    <NativeSelect
                        data={priceRange}
                        value={maxValue}
                        label="Max Value"
                        size="xs"
                        radius="sm"
                        onChange={(event) => setMaxValue(event.currentTarget.value)}
                        styles={{
                            rightSection: { display: "none" },
                            input: { padding: "1px", paddingLeft: "5px" },
                        }}
                    />
                </div> */}

        <h3 className="text-xl underline text-primaryDark">Avability</h3>
        <Switch
          checked={avability}
          onChange={(event) => setAvability(event.currentTarget.checked)}
          color="teal"
          size="sm"
          labelPosition="left"
          label="Hide Out Of Stock Products "
          className="text-primaryDark"
          thumbIcon={
            avability ? (
              <IconCheck
                size={12}
                color={theme.colors.teal[theme.fn.primaryShade()]}
                stroke={3}
              />
            ) : (
              <IconX
                size={12}
                color={theme.colors.red[theme.fn.primaryShade()]}
                stroke={3}
              />
            )
          }
        />
      </div>
    </>
  );
};

export default FilterSection;
