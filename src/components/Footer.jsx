import { useState } from "react";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsLinkedin,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsEnvelopeFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

//const [name, setName] = useState(" ");

const Footer = () => {
  const [email, setName] = useState(" ");

  return (
    <>
      <div>
        <div className="bg-secondaryLight grid sm:grid-cols-2 lg:grid-cols-3 px-12 py-2 text-base text-primaryLight">
          <div>
            <h4 className="underline underline-offset-8">FOLLOW US ON</h4>
            <div className=" sm:flex sm:px-2 sm: mt-4 lg:block lg:ml-3.5 ">
              <div className="sm: px-2 lg:mb-2 lg:mt-3">
                <a href="www.facebook.com">
                  <BsFacebook size={25} />
                </a>
              </div>
              <div className="sm: px-2 lg:mb-2 lg:mt-1">
                <a href="www.facebook.com">
                  <BsInstagram size={25} />
                </a>
              </div>
              <div className="sm: px-2 lg:mb-2 lg:mt-1">
                <a href="www.facebook.com">
                  <BsPinterest size={25} />
                </a>
              </div>
              <div className="sm: px-2 lg:mb-2 lg:mt-1">
                <a href="www.facebook.com">
                  <BsTwitter size={25} />
                </a>
              </div>
              <div className="sm: px-2 lg:mb-2 lg:mt-1">
                <a href="www.facebook.com">
                  <BsLinkedin size={25} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="underline underline-offset-8">CONTACT DETAILS</h4>
            <div className="flex mt-3">
              <div className="mt-4">
                <a href="www.facebook.com">
                  <BsFillGeoAltFill />
                </a>
              </div>
              <div className="ml-3.5 mr-8 no-underline">
                Address-Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
            </div>
            <div className="flex mt-3">
              <div className="mt-2">
                <a href="www.facebook.com">
                  <BsFillTelephoneFill />
                </a>
              </div>
              <div className="ml-3.5 mr-8 no-underline">+91 XXXXX XXXXX</div>
            </div>
            <div className="flex mt-3.5">
              <div className="mt-2">
                <a href="www.facebook.com">
                  <BsEnvelopeFill />
                </a>
              </div>
              <div className="ml-3.5 mr-8 no-underline">
                abcdefghijklmnop@gmail.com
              </div>
            </div>
          </div>

          <div className="lg:mr-12">
            <div className="lg:float-right">
              <h4 className="underline underline-offset-8">OUR COMPANY</h4>
              <ul>
                <li>
                  <div className="my-2">
                    <Link to="/About"> About Us</Link>
                  </div>
                </li>
                <li>
                  <div className="my-2">
                    <Link to="/FAQs">FAQs</Link>
                  </div>
                </li>
                <li>
                  <div className="my-2">
                    <Link to="/ReturnPolicy"> Return and Refund Policy</Link>
                  </div>
                </li>
                <li>
                  <div className="my-2">
                    <Link to="/SmileStories"> Smile Stories</Link>
                  </div>
                </li>
                <li>
                  <div className="my-2">
                    <Link to="/Blogs"> Blogs</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:invisible">
            <div className="underline underline-offset-8 mt-6">
              100% secure payments
            </div>

            <div className="flex m-1.5 ">
              <div className="w-10 m-0.5 rounded-lg">
                <img
                  className="rounded-md"
                  src="src/assets/mastercard.png"
                  alt=""
                />
              </div>
              <div className="w-11 m-0.5">
                <img className="rounded-md" src="src/assets/visa.jpg" alt="" />
              </div>
              <div className="w-11 m-0.5">
                <img
                  className="rounded-md"
                  src="src/assets/paypal.png"
                  alt=""
                />
              </div>
              <div className="w-12 m-0.5">
                <img className="rounded-md" src="src/assets/gpay.png" alt="" />
              </div>
              <div className="w-9 m-0.5">
                <img
                  className="rounded-md"
                  src="src/assets/amazon.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="sm:invisible lg:visible">
            <div className="underline underline-offset-8 mt-1">
              100% secure payments
            </div>

            <div className="flex m-1.5 ">
              <div className="w-10 m-0.5 rounded-lg">
                <img
                  className="rounded-md"
                  src="src/assets/mastercard.png"
                  alt=""
                />
              </div>
              <div className="w-11 m-0.5">
                <img className="rounded-md" src="src/assets/visa.jpg" alt="" />
              </div>
              <div className="w-11 m-0.5">
                <img
                  className="rounded-md"
                  src="src/assets/paypal.png"
                  alt=""
                />
              </div>
              <div className="w-12 m-0.5">
                <img className="rounded-md" src="src/assets/gpay.png" alt="" />
              </div>
              <div className="w-9 m-0.5">
                <img
                  className="rounded-md"
                  src="src/assets/amazon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primaryLight">
          <div className="text-center font-semibold">
            2023 SHAMAIM, All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
