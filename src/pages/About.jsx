import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../components/GoToTop";
const About = () => {
	return (
		<>
			<div className=" w-[99%] mx-auto h-44 sm:h-52 xl:h-60 2xl:h-64 rounded-lg">
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
			<div className=" xs:mx-5 sm:mx-10 xl:mx-44 p-1 ">
				<h1 className="text-5xl font-semibold	my-10 ">About Us</h1>

				<h3 className="text-3xl font-medium	text-justify m-2 mb-20 text-secondaryDark">
					We glad to see you here. Let us all step in as guests and leave as
					friends, Welcome to the Galleria.
				</h3>

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

				<h5 className="text-4xl font-semibold text-[#C2954E] my-5 ">
					WHY THE NAME “SHAMAIM Lifestyle” ?
				</h5>

				<p className="text-3xl font-normal	text-justify my-10">
					The name <span className="text-[#C2954E] font-medium ">Shamaim</span>{" "}
					is taken from a Hebrew Word "
					<span className="text-[#82140A]">Shamayim</span>"" which means{" "}
					<span className="text-[#82140A]">Heaven</span>. According to Hebrew
					Tradition the word is constructed of two other words as: Esh(Fire) and
					Mayim(Water). Just Like the heaven we also Doesn't want to limit Our
					customers' choices through giving them a Flawless shopping experience
					. Most Impormant As Heaven's Door is open for all we also strive to
					serve everyone with similar integrity and respect.{" "}
					<span className="text-[#4285F4]">#shamaimforall</span>
				</p>

				<h5 className="text-4xl font-semibold text-[#C2954E] my-5">
					HEADQUARTERS
				</h5>

				<p className="text-3xl font-normal text-justify my-10">
					Feel free to get in touch with us for any assistance Guys. We'd love
					to hear you anytime! Currently we are having our Head Office at 11B,
					Bowali Mondal Road, Kolkata:700026 and that's why we can give you 100%
					assurance on the quality of each of our product that we sell.
				</p>

				<h5 className="text-4xl font-semibold text-[#C2954E] my-5">MISSION</h5>

				<p className="text-3xl font-normal text-justify my-10">
					Our mission is to create a lifestyle Brand that offers superior
					design, quality and value to every consumers. Why to compromise with
					your own tastes and choices, create your own fashion statement with
					Shamaim Lifestyle.
				</p>

				<h5 className="text-4xl font-semibold text-[#C2954E] my-5">VISION</h5>

				<p className="text-3xl font-normal text-justify my-10">
					We strive to be a global leader in fashion Industry through satisfying
					our customers' choices and tastes with unique innovations and designs.
					Our Vision is to be a caring and well-managed organization for our
					business partners, customers and employees, and a responsible
					corporate citizen to our society.
				</p>

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
