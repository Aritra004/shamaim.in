import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import {
	BsFillHeartFill,
	BsFillCartFill,
	BsFillPersonFill,
	BsFacebook,
	BsInstagram,
	BsWhatsapp,
	BsTwitter,
} from "react-icons/bs";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
// import { FaTshirt, FaTruckMoving } from "react-icons/fa";
import NavbarMenuDrawer from "./NavbarMenuDrawer";
// import HamburgerMenu from "./HamburgerMenu";
// import { Dropdown, Selection } from 'react-dropdown-now';
// import 'react-dropdown-now/style.css';
// import ReactDropdown from "react-dropdown";
const logoStyle = {
	width: "200px",
	// height:'40px',
	margin: "0px",
	padding: "0px",
	zIndex: 20,
};

const WomenDropdown = () => {
    const [open, setOpen] = useState(false);
    const Menus = ["Music and Band", "Category2", "Category3", "Category4"];
    const menuRef = useRef();
	const textRef = useRef();

    window.addEventListener("click", (e) => {
		if (e.target !== menuRef.current && e.target !== textRef.current) {
			setOpen(false);
		}
	});
    
    return (
        <div className="relative left-4 sm:right-0">
            <NavLink to="/SubCatagory">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15.934A7.501 7.501 0 0 1 12 1a7.5 7.5 0 0 1 1 14.934V18h5v2h-5v4h-2v-4H6v-2h5v-2.066ZM12 14a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11Z"/></svg> */}
                <BsGenderFemale size="24" />
            </NavLink>
            <div className="">
                <p
                    ref={textRef}
                    onClick={() => setOpen(!open)}
                    className="text-xs sm:text-sm cursor-pointer justify-self-center"
                >
                    Women
                </p>
                {open && (
                    <div
                        ref={menuRef}
                        className="bg-white p-4 w-36 shadow-lg absolute -left-14 top-6"
                    >
                        <ul>
                            {Menus.map((menu) => (
                                <li
                                    onClick={() => setOpen(false)}
                                    className="p-2 text-sm cursor-pointer rounded hover:bg-blue-100"
                                    key={menu}
                                >
                                    {menu}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WomenDropdown