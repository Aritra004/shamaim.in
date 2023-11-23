import React from 'react'
import './orders.css';

const Orders = () => {
  const orderData = JSON.parse(localStorage.getItem("orderData"));


  return (
    <div className='order'>
      <h1>My orders</h1>
      {orderData && (
       <div className="order-history-list">
       <div className="order-history-item">
         <div className="order-history-item-header">
           <h3>Order #12345</h3>
           <p>Delivered on 01/01/2022</p>
         </div>
         <div className="order-history-item-body">
           <div className="order-history-item-image">
             <img src="https://th.bing.com/th/id/OIP.6XOOzJSVcxtMvcEWrsWV4QHaJk?pid=ImgDet&rs=1z" alt="product" />
           </div>
           <div className="order-history-item-details">
             <h4>{orderData.name}</h4>
             <p>Product Description</p>
             <p>Quantity: 1</p>
             <p>Price: {orderData.price}</p>
           </div>
         </div>
       </div>
       <div className="order-history-item">
         <div className="order-history-item-header">
           <h3>Order #67890</h3>
           <p>Delivered on 02/01/2022</p>
         </div>
         <div className="order-history-item-body">
           <div className="order-history-item-image">
             <img src="https://th.bing.com/th/id/OIP.6XOOzJSVcxtMvcEWrsWV4QHaJk?pid=ImgDet&rs=1" alt="product" />
           </div>
           <div className="order-history-item-details">
             <h4>{orderData.name}</h4>
             <p>Product Description</p>
             <p>Quantity: 2</p>
             <p>Price: {orderData.price}</p>
           </div>
         </div>
       </div>
     </div>
      )}
    </div>
  )
}

export default Orders