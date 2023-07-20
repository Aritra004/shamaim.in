import React from "react";

export default function ProductCardScrollBar() {
  const posts = [
    {
      title: "Tees",
      img: "src/assets/shamamimtshirt.jpg",
      mrp: "455",
      offer_price: "299",
      discount_percent: "XX.XX%",
      size: "Size Available: S,M,L",
      status: "IN STOCK",
    },
    {
      title: "Tees",
      img: "src/assets/shamamimtshirt.jpg",
      mrp: "455",
      offer_price: "299",
      discount_percent: "XX.XX%",
      size: "Size Available: S,M,L",
      status: "IN STOCK",
    },
    {
      title: "Tees",
      img: "src/assets/shamamimtshirt.jpg",
      mrp: "455",
      offer_price: "299",
      discount_percent: "XX.XX%",
      size: "Size Available: S,M,L",
      status: "IN STOCK",
    },
    {
      title: "Tees",
      img: "src/assets/shamamimtshirt.jpg",
      mrp: "455",
      offer_price: "299",
      discount_percent: "XX.XX%",
      size: "Size Available: S,M,L",
      status: "IN STOCK",
    },
    {
      title: "Tees",
      img: "src/assets/shamamimtshirt.jpg",
      mrp: "455",
      offer_price: "299",
      discount_percent: "XX.XX%",
      size: "Size Available: S,M,L",
      status: "IN STOCK",
    },
    {
      title: "Tees",
      img: "src/assets/shamamimtshirt.jpg",
      mrp: "455",
      offer_price: "299",
      discount_percent: "XX.XX%",
      size: "Size Available: S,M,L",
      status: "IN STOCK",
    },
    {
      title: "Tees",
      img: "src/assets/shamamimtshirt.jpg",
      mrp: "455",
      offer_price: "299",
      discount_percent: "XX.XX%",
      size: "Size Available: S,M,L",
      status: "IN STOCK",
    },
    {
      title: "Tees",
      img: "src/assets/shamamimtshirt.jpg",
      mrp: "455",
      offer_price: "299",
      discount_percent: "XX.XX%",
      size: "Size Available: S,M,L",
      status: "IN STOCK",
    },
    {
      title: "Tees",
      img: "src/assets/shamamimtshirt.jpg",
      mrp: "455",
      offer_price: "299",
      discount_percent: "XX.XX%",
      size: "Size Available: S,M,L",
      status: "IN STOCK",
    },
    {
      title: "Tees",
      img: "src/assets/shamamimtshirt.jpg",
      mrp: "455",
      offer_price: "299",
      discount_percent: "XX.XX%",
      size: "Size Available: S,M,L",
      status: "IN STOCK",
    },
  ];

  return (
    <>
      <div className="flex overflow-x-scroll xs:scrollbar-hide lg:scrollbar-default">
        {posts.map((items, key) => (
          <div className="sm:m-1 p-1">
            <div
              className="w-full rounded-lg shadow-md lg:max-w-sm  bg-primaryDark"
              key={key}
            >
              <img
                className="w-60 h-50 max-w-xs object-cover"
                src={items.img}
                alt="image"
              />
              <div className="h-30 p-1 grid grid-cols-1 ">
                <h4 className="text-center text-xl font-semibold text-slate-800">
                  {items.title}
                </h4>
                <p className="mb-2 leading-normal text-center">
                  <span className="line-through">{items.mrp}</span>{" "}
                  {items.offer_price}{" "}
                  <span className="text-green-500">
                    ({items.discount_percent})
                  </span>
                </p>
                <p className="mx-2 px-5 text-xs p-1 justify-self-center leading-normal  bg-black rounded-full text-center w-fit text-slate-300">
                  <span className="text-white">{items.size}</span>
                </p>
                <p className="text-center text-green-500">{items.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
