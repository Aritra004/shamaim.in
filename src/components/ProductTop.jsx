import React from 'react'

const ProductTop = () => {
  return (

    <>

      {/* Adding ecllipse shaped picture at the top of category page */}
      <div className='w-[99%] mx-auto h-44 sm:h-52 xl:h-60 2xl:h-64 rounded-lg'>
        <picture>
            <source
              media="(min-width:520px)"
              srcset="src\assets\croptshirtnew.jpg"
            ></source>
            <source
              media="(min-width:320px)"
              srcset="src\assets\croptshirtnew.jpg"
            ></source>
            <img
              className="h-44 sm:h-52 xl:h-60 container mx-auto 2xl:h-64  rounded-lg"
              src="src\assets\croptshirtnew.jpg"
              alt="..."
            />
				</picture>


      </div>

    </>


  )
}

export default ProductTop;