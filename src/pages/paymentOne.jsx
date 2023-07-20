import React from 'react'
import {NavLink,Link} from "react-router-dom";
import {GrAddCircle} from "react-icons/gr";
import { AiFillSafetyCertificate } from "react-icons/ai"; 

const PaymentOne = () => {
  return (
    <>
    <button
        className="m-6 text-center bg-[#76B5FF] hover:bg-[#76B5FF]/80 hover:text-white font-normal rounded-md flex-initial p-2"
        onClick="{}">
        DELIVERY ADDRESS
    </button>
    <div className="flex">
      <div className="flex-1 w-4/6 mr-1">
      <div className="flex flex-col divide-y divide-black">
        <div className="radio mx-8">
          <label>
            <input className="mr-6" type="radio" value="option1" checked={true} />
            <text className="font-bold text-xl"> Mr. X</text>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum sollicitudin dolor ac congue. Nulla efficitur bibendum facilisis. Morbi consequat ullamcorper felis ac sollicitudin.</p>
          </label>
        </div>

        <div className="radio mx-8 my-4">
          <label>
            <input className="mr-6" type="radio" value="option2" checked={false} />
              <text className="font-bold text-xl mt-2"> Mr. Y</text>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum sollicitudin dolor ac congue. Nulla efficitur bibendum facilisis. Morbi consequat ullamcorper felis ac sollicitudin.</p>
          </label>
        </div>

        <div className="flex radio mx-8">
          <a href="">
            <GrAddCircle className="mt-2" size={28} />
          </a>
          <text className="mt-2 ml-2 text-lg font-medium text-blue-600">Add New Address</text>
        </div>
      </div>

      </div>
      <div className="flex-initial w-2/6">
      <div className="m-2 h-fit p-12 my-4 rounded-lgh-fit rounded-sm bg-primaryDark/20 shadow-2xl">
        <div className="mb-2 underline underline-offset-8">
          PRICE DETAILS
        </div>
        <div className="flex flex-col divide-y-2 divide-gray-300">
          <div className="flex ">
            <div className="flex-initial w-3/4">
              <div className="mb-2">
                Price(X items)
              </div>
              <div className="mb-2">
                Discount
              </div>
              <div className="mb-2">
                Delivery Charges
              </div>
            </div>
            <div className="flex-auto w-1/4">
                <div className="mb-2">
                  $XXX.xx
                </div>
                <div className="mb-2 text-green-600">
                  -$XXX
                </div>
                <div className="mb-2 text-green-600">
                  Free
                </div>
            </div>
        </div>
        <div>
          <div className="flex py-2">
            <div className="flex-initial w-3/4">
                Total Amount
            </div>
            <div className="flex-auto w-1/4">
                $XXX
            </div>
          </div>
        </div>
        <div className="text-green-600 py-2">
          You will save $XXX on this order.
        </div>
        </div>
        </div>
        <div className="grid justify-items-center">
          <div className="flex">
              <a href="">
                <AiFillSafetyCertificate className="mt-2"/>
              </a>
              <text className="ml-3 text-center text-sm">Safe and secure Payments. Easy Returns.<br/>100% Authentic products</text>
          </div>
        </div>
      </div>
    </div>
    <div className="border-y mb-2 p-2 border-black text-lg text-red-600 font-medium">
        <text className="m-6">Payment Method :</text>
    </div>
    <div className="flex">
      
        <button
            className="m-6 text-center border border-black bg-transparent hover:text-green-500 hover:font-bold hover:border-green-500 rounded-full flex-initial p-2"
            onClick="{} ">
            CASH on Delivery
        </button>

      <NavLink to="/paymentTwo">
        <button
            className="m-6 text-center border border-black bg-transparent hover:text-green-500 hover:font-bold hover:border-green-500 rounded-full flex-initial p-2 px-5"
            onClick="{}">
            UPI
        </button>
      </NavLink>
      <Link to="/paymentTwo">
        <button
            className="m-6 text-center border border-black bg-transparent hover:text-green-500 hover:font-bold hover:border-green-500 rounded-full flex-initial p-2"
            onClick="{}">
            Net Banking
        </button>
      </Link>
      </div>
    <div className="grid justify-items-center">
    <NavLink to ="/orderPlaced">
          <button
            className="m-12 text-center bg-[#5AE17E] hover:bg-[#5AE17E]/80 font-medium rounded-full flex-initial p-4"
            onClick="{}">
            CONFIRM MY ORDER
        </button>
    </NavLink>
    </div>
    </>
  )
}

export default PaymentOne;