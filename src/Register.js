import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();
  const [house, setHouse] = useState();
  const [street, setStreet] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", {
        name,
        email,
        password,
        cPassword,
        house,
        street,
        address,
        pincode,
        phone,
      })
      .then((result) => {console.log(result)
        navigate("/myaccount/login")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5 d-flex align-items-center justify-content-around">
            <label htmlFor="name" className="mr-3">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5 d-flex align-items-center justify-content-around">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5 d-flex align-items-center justify-content-around">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Set Password"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-5 d-flex align-items-center justify-content-around">
            <label htmlFor="c-password">
              <strong>Confirm Password</strong>
            </label>
            <input
              type="password"
              name="c-password"
              id="c-password"
              placeholder="Confirm Password"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
          <div className="mb-5 d-flex align-items-center justify-content-around">
            <label htmlFor="house">
              <strong>House No.</strong>
            </label>
            <input
              type="text"
              name="house"
              id="house"
              placeholder="Your House/Floor No."
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setHouse(e.target.value)}
            />
          </div>
          <div className="mb-5 d-flex align-items-center justify-content-around">
            <label htmlFor="street">
              <strong>Street Name</strong>
            </label>
            <input
              type="text"
              name="street"
              id="street"
              placeholder="Street Name."
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="mb-5 d-flex align-items-center justify-content-around">
            <label htmlFor="address">
              <strong>Address</strong>
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Rest of your address."
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-5 d-flex align-items-center justify-content-around">
            <label htmlFor="pincode">
              <strong>Pincode</strong>
            </label>
            <input
              type="number"
              name="pincode"
              id="pincode"
              placeholder="Your Pincode"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <div className="mb-5 d-flex align-items-center justify-content-around">
            <label htmlFor="phone">
              <strong>Phone</strong>
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your Phone number"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-50 rounded-0 d-flex align-items-center justify-content-around">
            Register
          </button>
        </form>
        <p>Already have an account</p>
        <Link to="myaccount/login">
          <button className="btn btn-default border w-50 bg-light rounded-0 text-decoration-none">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
