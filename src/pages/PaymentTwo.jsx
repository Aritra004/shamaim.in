import React from 'react'
import {NavLink,Link} from "react-router-dom";

const PaymentTwo = () => {
  return (
    <>
      <div className="">
        <button
            className="m-6 text-center bg-transparent border-2 text-green-500 font-bold border-green-500 rounded-full flex-initial p-2 px-8"
            onClick="{}">
            UPI
        </button>
        <div className="grid items-center">
          <form className="flex" action="">
              <div className="flex-initial mx-6 w-2/3">

                  <label htmlFor="UPI Id"></label>
                  <input type="text" 
                    placeholder="Enter your UPI Id"
                    className="w-full rounded-md bg-gray-300"

                    
                  />
              </div>
                
                    <button
                    className="ml-6 text-center border-2 border-black bg-transparent hover:text-green-500 font-bold hover:border-green-500 rounded-md flex-initial p-2 px-6"
                    onClick="">
                    Confirm
                    </button> 
                 
          </form>
        </div>
      </div>

      <div>
        <button
            className="m-6 text-center bg-transparent border-2 text-green-500 font-bold border-green-500 rounded-full flex-initial p-2 px-8"
            onClick="{}">
            Net Banking
        </button>
        <div className="mx-7 mb-2 radio">
          <label>
              <text className="font-bold mt-2 mr-6"> Credit Card</text>
              <input className="mr-6" type="radio" value="option2" checked={false} />      
          </label> 
        </div>

        <div className="mx-7 mb-2 radio">
          <label>
              <text className="font-bold mt-2 mr-6"> Debit/ATM Card</text>
              <input className="mr-6" type="radio" value="option2" checked={false} />      
          </label> 
        </div>

        <div className="mx-7 mb-2 radio">
          <label>
              <text className="font-bold mt-2 mr-6"> Vouchers</text>
              <input className="mr-6" type="radio" value="option2" checked={false} />      
          </label> 
        </div>
        
      </div>
    </>
  )
}

export default PaymentTwo;