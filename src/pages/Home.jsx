import React from "react";
import {Hero,SubCategoryScrollBar,Banners} from "../components";
import GoToTop from "../components/GoToTop";


const Home = () => {
	return (
		<>
		<Banners/>
		<SubCategoryScrollBar/>
		<Hero/>
		<GoToTop />
		</>
	);
};

export default Home;
