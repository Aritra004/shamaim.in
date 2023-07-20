import { Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<>
			<div className=" flex flex-col sm:flex-row">
				<div className="w-full sm:w-3/4  flex-row ">
					{/* Banner 1 Size: 2:1(W:H) */}
					<div className="h-44 sm:h-52 xl:h-60 2xl:h-64 m-1">
						<Carousel >
							<Link to="/subcategory/1">
							<picture>
							<source media="(min-width:520px)" srcSet="src\assets\banner1.1.png"></source>
							<source media="(min-width:320px)" srcSet="src\assets\mobilebanner1.1.png"></source>
							<img
								src="src\assets\banner1.1.png"
								alt="..."
							/>
							</picture>
							</Link>

							<Link to="/subcategory/2">
							<picture>
							<source media="(min-width:520px)" srcSet="src\assets\banner1.2.png"></source>
							<source media="(min-width:320px)" srcSet="src\assets\mobilebanner1.2.png"></source>
							<img
								src="src\assets\banner1.2.png"
								alt="..."
							/>
							</picture>
							</Link>

							<Link to="/subcategory/3">
							<picture>
							<source media="(min-width:520px)" srcSet="src\assets\banner1.3.png"></source>
							<source media="(min-width:320px)" srcSet="src\assets\mobilebanner1.3.png"></source>
							<img
								src="src\assets\banner1.3.png"
								alt="..."
							/>
							</picture>
							</Link>
						</Carousel>
					</div>
					{/* Banner 2 Size: 2:1(W:H) */}
					<div className="h-44 sm:h-52 xl:h-60 2xl:h-64 m-1 ">
						<Carousel >
							<Link to="/subcategory/1">
							<picture>
							<source media="(min-width:520px)" srcSet="src\assets\banner1.1.png"></source>
							<source media="(min-width:320px)" srcSet="src\assets\mobilebanner1.1.png"></source>
							<img
								src="src\assets\banner1.1.png"
								alt="..."
							/>
							</picture>
							</Link>

							<Link to="/subcategory/2">
							<picture>
							<source media="(min-width:520px)" srcSet="src\assets\banner1.2.png"></source>
							<source media="(min-width:320px)" srcSet="src\assets\mobilebanner1.2.png"></source>
							<img
								src="src\assets\banner1.2.png"
								alt="..."
							/>
							</picture>
							</Link>

							<Link to="/subcategory/3">
							<picture>
							<source media="(min-width:520px)" srcSet="src\assets\banner1.3.png"></source>
							<source media="(min-width:320px)" srcSet="src\assets\mobilebanner1.3.png"></source>
							<img
								src="src\assets\banner1.3.png"
								alt="..."
							/>
							</picture>
							</Link>
						</Carousel>
					</div>
				</div>
				{/* Banner 1 Size: 2:1(W:H) */}
				<div className="h-44 sm:h-auto w-auto sm:w-1/4 m-1 rounded-lg relative overflow-hidden" >
					<Link to="/subcategory/4">
							<picture className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
							<source media="(min-width:520px)" srcSet="src\assets\banner1.4.png"></source>
							<source media="(min-width:320px)" srcSet="src\assets\mobilebanner1.3.png"></source>
							<img
								src="src\assets\banner1.4.png"
								alt="..."
							/>
							</picture>
							</Link>
				</div>
			</div>
		</>
	);
};

export default Hero;
