import React from "react";
import { Navbarr } from "../components";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef as UseRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Padding } from "@mui/icons-material";

const Contact = () => {
  // const wrapper = styled.section
  // {
  //   padding : 9rem 0 5rem 0;

  // }
  return (
    <div>
      <h2 className="common heading font-bold text-center text-transparent text-6xl mb-14 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-8 mb-8 ">
        Feel Free To Contact US
      </h2>

      <div className="container mx-auto mt-2 text-center">
        <iframe
          className="p-9 pb-5 mx-auto2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.453790273436!2d78.0677372753429!3d30.366469603241928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7cbdc6e9d1b%3A0x7082f9fac370bdb7!2sPacific%20Mall%20Dehradun!5e0!3m2!1sen!2sin!4v1684002422700!5m2!1sen!2sin"
          width="60%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="container">
          <div className="contact-form ">
            <form
              action="#"
              method="POST"
              className="contact-inputs max-w-50rem mx-auto flex flex-col gap-4 mr-80 ml-80 h-15  "
            >
              <input
                className="bg-purple-400 hover:bg-pink-400 border-2 border-solid border-black"
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              ></input>

              <input
                className="bg-purple-400 hover:bg-pink-400 border-2 border-solid border-black"
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              ></input>
              <textarea
                className="bg-purple-400 hover:bg-pink-400 border-2 border-solid border-black"
                name="message"
                cols="30"
                row="6"
                autoComplete="off"
                required
              ></textarea>
              <input
                className="bg-pink-400 border-2 border-solid border-black text-${theam.color.btn} transform scale-90 hover:bg-purple-400 mr-20 ml-20 h-8"
                type="submit"
                value="send"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
