import React from 'react'
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartWishlistToggle } from '../components';
import './styles.css';
const Wishlist = () => {
  const posts = [
		{
			img:"src/assets/shamamimtshirt.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      availability:"IN STOCK",
      cart:"Add to Cart",
      icon2:<DeleteIcon/>,
      icon3:<AddIcon/>,
      icon4:<RemoveIcon/>,
      numcart:"1"
		},
    {
			img:"src/assets/shamamimtshirt.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      availability:"IN STOCK",
      cart:"Add to Cart",
      icon2:<DeleteIcon/>,
      icon3:<AddIcon/>,
      icon4:<RemoveIcon/>,
      numcart:"1"
		},
    {
			img:"src/assets/shamamimtshirt.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      availability:"IN STOCK",
      cart:"Add to Cart",
      icon2:<DeleteIcon/>,
      icon3:<AddIcon/>,
      icon4:<RemoveIcon/>,
      numcart:"1"
		},
  ];
 
  return (
    <>

    {/* Importing Toggle Button of Cart and Wishlist */}
    <div><CartWishlistToggle/></div>

    {/* Mapping images,description,availibility and icon buttons */}
    <div className='flex flex-row w-full text-primaryDark '>
      <div className='flex flex-col bg-primaryLight lg:rounded-lg lg:shadow-2xl lg:m-2 lg:p-4 w-3/5'>
      {posts.map((items, key) => (
					<div className="sm:m-1 p-1">
						<div
							className="w-full rounded-lg shadow-md flex flex-row   "
							key={key}
						>
              <div className='flex flex-col'>
							<img
								className="object-cover w-12 sm:w-32 h-16 sm:h-48 "
								src={items.img}
								alt="image"
              />
              <div className='flex flex-row justify-center'>
              {/*<button className='bg-[#FF4646] text-xs rounded-full'>{items.icon4}</button>*/}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="#FF6363" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0ZM4 8h7V7H4v1Z" clip-rule="evenodd"/></svg>
              </button>
              <button className='bg-[#D5D5D5] px-0 sm:px-4' style={{width:'20px',margin:'10px'}}>{items.numcart}</button>
              {/*<button className='bg-[#5AE17E] rounded-full'>{items.icon3}</button>*/}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill="#3aa856" d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"/><path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z"/></svg>
              </button>
              
              </div>
              </div>
              <div className='flex flex-col'>
              <span className=' m-2 text-justify text-xs sm:text-sm'>{items.description}</span>
              <span className=' m-2 text-[#34A853] text-xs sm:text-sm'>{items.availability}</span>
              <div className='flex flex-row mt-8 ml-4'>
              {/*<button className=' m-2 bg-[#161E09] text-[#FFD38D] py-2  sm:px-4 rounded-lg text-xs'>{items.cart}</button>*/}
                <button type="button-add-item" className="button-add-item">
                  <span className="button-add-item__text">{items.cart}</span>
                  <span className="button-add-item__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                </button>
                <button className=' m-2 text-[#8C8B8B]'>{items.icon2}</button>
              </div>
              </div>
              </div>
              </div>
      ))}
     
      </div>
      </div>
    </>
  )
}

export default Wishlist;