import React from 'react'

const ProductTop = () => {
  return (
    
      <>

      {/* Adding ecllipse shaped picture at the top of category page */}
      <div className='w-[100%]  overflow-hidden leading-9'>
      
    <svg data-name="Layer 1" className='h-[150px] sm:h-[300px] w-[100%]' fill='none'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <defs>
      <clipPath id='myshape'>
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill" ></path>
      </clipPath>
      </defs>
      <image className=' w-[100%] ' xlinkHref='src\assets\croptshirtnew.jpeg' clipPath='url(#myshape)'></image>   
    </svg>
    
</div>

      </>
  
    
  )
}

export default ProductTop;