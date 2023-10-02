import React from 'react'

const Orders = () => {
  return (
    <div className="card" style={{width: "80rem"}}>
        <img src="" alt="product" className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">Dashny</h5>
            <h6 className="card-subtitle mb-2 text-muted">Men's cofortable</h6>
            <p className="card-text">Price $49.99</p>
            <p className="card-text">Ordered on 22-sep-2022</p>
            <a href="/" className="btn btn-primary">Buy Again</a>
        </div>
    </div>
  )
}

export default Orders