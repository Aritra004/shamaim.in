import React from 'react'

const Confirmation = () => {
  return (
    <>
      <div className="grid justify-items-center">
          <img className="h-28" src="src\assets\order_placed_image.png"></img>
          <div className="mt-10 text-xl font-medium">
              Yay!! Your Order is Placed.
          </div>
          <div className="mt-2 text-lg font-semibold">
              You will recieve your order within <span className="mb-10 text-center bg-[#8C8B8B]/40 text-red-700 hover:text-white font-bold flex-initial rounded-full w-20 py-1 px-3"> estimated date</span>
          </div>
          <div className="mt-8 mb-40 text-2xl font-medium">
              Thanks for ordering from Shamaim!
          </div>
          <button
              className="mb-10 text-center font-semibold bg-[#5AE17E] hover:bg-[#5AE17E]/70 flex-initial rounded-full p-3"
              onClick="{}">
              KEEP EXPLORING
          </button>
      </div>
    </>
  )
}

export default Confirmation;