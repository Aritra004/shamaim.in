import { useState } from "react";
import styled from "styled-components";
import GoToTop from "./components/GoToTop";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }

          .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: black;
            border: 1px solid #ccc;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

            .popup-content {
              background-color: black;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
              text-align: center;

              p {
                margin-bottom: 20px;
              }

              button {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              id="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              id="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" onClick={handleClick} />

            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <p style={{ color: "white" }}>
                    Thank you for contacting us. We have received your message.
                    We will get back to you shortly.
                  </p>
                  <button onClick={handleClose}>Close</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <GoToTop />
    </Wrapper>
  );
};

export default Contact;
