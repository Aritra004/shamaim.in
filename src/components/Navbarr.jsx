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

const Navbarr = () => {
	const [open, setOpen] = useState(false);
	const Menus = ["Category1", "Category2", "Category3", "Category4"];
	const menuRef = useRef();
	const textRef = useRef();

	const handleLogout = () => {
		// Clear user data from local storage
		localStorage.removeItem("user");
		window.location.reload();
	};

	let user = null;
	const shamaimUser = localStorage.getItem("user");

	if (shamaimUser) {
		try {
			user = JSON.parse(shamaimUser);
		} catch (error) {
			console.error("Error parsing user JSON:", error);
		}
	}

	const isLoggedIn = user !== null && user.success;

	window.addEventListener("click", (e) => {
		if (e.target !== menuRef.current && e.target !== textRef.current) {
			setOpen(false);
		}
	});
	return (
		<>
			{/* Sticky navbar */}
			<nav className="sticky top-0 z-50  ">
				<nav className="h-14 bg-gradient-to-bl from-secondaryLight/70 to-secondaryDark/70 py-0 px-2.5  ">
					<div className=" grid grid-cols-2 gap-10 ">
						{/* Adding Social Media Icons */}
						{/*
            <div className="flex space-x-2 ">
              <a href="#facebook">
                <BsFacebook className="relative text-primaryLight top-1 invisible sm:visible" />
              </a>
              <a href="#instagram">
                <BsInstagram className="relative text-primaryLight top-1  invisible sm:visible" />
              </a>
              <a href="#whatsapp">
                <BsWhatsapp className="relative text-primaryLight top-1 invisible sm:visible" />
              </a>
              <a href="#twitter">
                <BsTwitter className="relative text-primaryLight top-1 invisible sm:visible" />
              </a>
            </div>
            */}
						{/* ShamaimLogo Button */}
						<div className="  relative right-0 sm:left-12 sm:right-12 xl:left-12 h-fit  ">
							<NavLink to="/">
								<img
									className=" m-0 p-0 z-20 w-52 mt-1 relative top-4"
									src="src\assets\LOGO.png"
									alt="..."
								/>
							</NavLink>
						</div>

						{/* Login and SignUp Button */}
						<div className=" flex  gap-5 justify-end ">
							{isLoggedIn ? (
								<button
									className="bg-primaryLight hover:bg-primaryDark text-primaryDark font-bold p-1 text-xs h-8 rounded-full relative top-2"
									onClick={handleLogout}
								>
									Logout
								</button>
							) : (
								<Link to="/login">
									<button className="bg-primaryLight hover:bg-primaryDark text-primaryDark hover:text-secondaryDark font-bold p-1 text-xs h-8 rounded-full relative top-2">
										LogIn/SignUp
									</button>
								</Link>
							)}
							{/* Linking to Myaccount Page */}
							<NavLink to="Myaccount">
								<BsFillPersonFill className="relative text-primaryLight top-4  " />
							</NavLink>
						</div>
					</div>
				</nav>

				<nav className="h-16 sm:h-20  bg-primaryLight p-2 pt-6 ">
					{/* Different option is given for navigating to other pages */}
					<div className="  grid grid-cols-5 gap-1 sm:gap-4  place-items-center   ">
						{/*<div className="relative right-2 sm:right-0">
              <NavLink to="/">
                <p className="text-xs sm:text-sm ">
                  <BiHomeAlt className="relative left-3 " />
                  Home
                </p>
              </NavLink>
            </div>*/}

						{/*<div className="relative right-1 sm:right-0">
              <NavLink to="/NearbyStore">
                <p className="text-xs sm:text-sm ">
                  <BiStore className="relative left-8 " />
                  NearbyStore
                </p>
              </NavLink>
            </div>*/}

						<div className=" ">
							<NavLink to="/SubCatagory">
								{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.05 8.537L18.585 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 1 1-1.414-1.414ZM10.5 20a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11Z"/></svg> */}
								<BsGenderMale size="24" />
							</NavLink>
							<div className="">
								<p
									ref={textRef}
									onClick={() => setOpen(!open)}
									className="text-xs sm:text-sm cursor-pointer relative right-2 bottom-0.5 sm:bottom-0"
								>
									Men
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

						{/*<div className="relative left-2 sm:left-36">
              <NavLink to="/Tracking">
                <p className="text-xs sm:text-sm relative left-2">
                  <FaTruckMoving className="relative left-8 " />
                  OrderTrack
                </p>
              </NavLink>
            </div>*/}
						<div className="">
							<NavLink to="/Cart">
								<p className="text-xs sm:text-sm ">
									<AiOutlineShoppingCart size="24" />
									Cart
								</p>
							</NavLink>
						</div>
						<div className="">
							<NavLink to="/Wishlist">
								<p className="text-xs sm:text-sm ">
									{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66Zm-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36Z"/></svg> */}
									<AiOutlineHeart size="24" />
									Wishlist
								</p>
							</NavLink>
						</div>
						<div className="place-self-center">
							<p>
								<NavbarMenuDrawer />
								Menu
							</p>
						</div>
					</div>
				</nav>
			</nav>
		</>
	);
};
export default Navbarr;
