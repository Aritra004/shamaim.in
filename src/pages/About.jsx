import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../components/GoToTop";
import aboutus from '../assets/aboutus.png';
import mission from '../assets/mission.png';
import vision from '../assets/vision.png';
import whythename from '../assets/whythename.jpg';
const About = () => {
	return (
		<>
			<div className="ml-2 w-[99%] mx-auto h-44 sm:h-52 xl:h-60 2xl:h-64 rounded-lg">
				<picture>
					<source
						media="(min-width:520px)"
						srcset="src\assets\banner1.2.png"
					></source>
					<source
						media="(min-width:320px)"
						srcset="src\assets\mobilebanner1.2.png"
					></source>
					<img
						className="h-44 sm:h-52 xl:h-60 container mx-auto 2xl:h-64  rounded-lg"
						src="src\assets\banner1.2.png"
						alt="..."
					/>
				</picture>
			</div>
			<div className="ml-2 p-5 w-full ">
				{/* <h1 className="text-5xl font-semibold	my-10 ">About Us</h1> */}

				<img src={aboutus} alt="About us" />

				<h5 className="text-4xl font-semibold text-[#C2954E] my-5 ">
					WHO ARE WE ?
				</h5>

				<p className="text-3xl font-normal	text-justify my-10">
					We, Shamaim Lifestyle are a Lifestyle brand Created and Crafted by
					passionate Youngsters with diverse ideologies, interests and
					principles, who love to create Unique and comfortable Fashion- wear.{" "}
					<span className="text-[#82140A]">
						We come from the "City of Joy" Kolkata, India with a Aim to bring a
						smile on every face with our efforts & offerings.
					</span>{" "}
					We are a Self-Governing Lifestyle brand, Offer Our Own products
					directly to the customer without any third party on our Ecommerce
					Website. We also have 2 offline stores in Kolkata and soon will be at
					your city too.
				</p>

				<img src={whythename} alt="Why the name shamaim" className="pt-5" />

				<h5 className="text-4xl font-semibold text-[#C2954E] my-5">
					HEADQUARTERS
				</h5>

				<p className="text-3xl font-normal text-justify my-10">
					Feel free to get in touch with us for any assistance Guys. We'd love
					to hear you anytime! Currently we are having our Head Office at 11B,
					Bowali Mondal Road, Kolkata:700026 and that's why we can give you 100%
					assurance on the quality of each of our product that we sell.
				</p>

				<img src={mission} alt="Missiom" />

				<img src={vision} alt="Vision" className="pt-5" />

				<h5 className="text-4xl font-semibold text-[#C2954E] my-5">
					OFFLINE STORES
				</h5>

				<p className="text-3xl font-normal text-justify my-10 mb-24">
					<p className="font-medium my-5">Kolkata</p>
					<ul className="list-disc mx-10">
						<li>11, Ramlal Bazar Road, Kolkata 700078</li>
						<li>11B, Bowali Mondal Road, Kolkata:700026</li>
					</ul>
					<p className="font-medium my-5">Landmark</p>
					<ul className="list-disc mx-10">
						<li>
							Bank of Baroda, Tollygunge Branch, Rabindra Sarovar Metro Station
						</li>
					</ul>
				</p>
				<GoToTop />
			</div>
		</>
	);
};

export default About;
