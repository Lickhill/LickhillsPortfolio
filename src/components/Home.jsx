import React from "react";
import { Link } from "react-scroll";
import heroImage from "../assets/hero.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
	return (
		<div
			id="Home"
			className="home h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 "
		>
			<div className=" flex flex-col md:flex-row mx-auto max-w-screen-lg h-full items-center justify-center px-4">
				<div className="text-gray-500">
					<h2 className="text-4xl sm:text-7lg text-white">
						I am a Full Stack Developer
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quidem, minima omnis! Eveniet eaque tenetur ullam hic.
						Corporis autem beatae pariatur alias sunt. Itaque
						perspiciatis similique harum hic libero in!
					</p>

					<div>
						<Link to="Work" smooth duration={500}>
							<button className="group bg-gradient-to-b from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-md my-4 flex items-center justify-between cursor-pointer">
								Portfolio
								<span className="group-hover:rotate-90 duration-300 mx-2">
									<FaArrowRightLong />
								</span>
							</button>
						</Link>
					</div>
				</div>
				<div>
					<img
						className="rounded-2xl mx-auto w-2/3 md:w-auto"
						src={heroImage}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
