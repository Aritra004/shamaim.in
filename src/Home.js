// import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
// import Trusted from "./components/Trusted";
import Categories from "./components/Categories";
import Strip from "./components/strip/Strip";
import styled from "styled-components";
import { useState } from "react";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowModal(true);
  };

  const Wrapper = styled.section`
    .home-page {
      position: relative;
      box-sizing: border-box;

      .button-container {
        position: fixed;
        bottom: 20px;
        right: 20px;

        .button-image {
          border: none;
          background-color: transparent;
          cursor: pointer;
        }

        .form-container {
          position: fixed;
          bottom: 80px;
          right: 20px;
          background-color: #fff;
          padding: 20px;
          border: 1px solid #ccc;

          label {
            display: block;
            margin-bottom: 5px;
          }

          input,
          select,
          textarea {
            display: block;
            width: 100%;
            margin-bottom: 10px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
          }

          button {
            display: block;
            margin-top: 10px;
            padding: 5px 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
          }
        }

        .modal-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;

          .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 3px;
            text-align: center;

            p {
              margin-bottom: 10px;
            }
          }

          button {
            padding: 5px 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <Strip />
      <HeroSection />
      {/* <FeatureProduct /> */}
      <Categories />
      <HeroSection />
      {/* <Trusted /> */}

      <div className="home-page">
        <div className="button-container">
          <button className="button-image" onClick={() => setShowForm(true)}>
            <img src="button-image.png" alt="Button" />
          </button>
          {showForm && (
            <form className="form-container" onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>
          )}
          {showModal && (
            <div className="modal-container">
              <div className="modal-content">
                <p>Congratulations! You received 15% discount.</p>
                <p>Apply the coupon code ee34ffdgh at checkout.</p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
