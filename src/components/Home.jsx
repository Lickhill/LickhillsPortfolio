import React from "react";
import { Link } from "react-scroll";
import heroImage from "../assets/hero.jpg";
import plane from "/911.mp4";
import { FaArrowRightLong } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import nav from "./Navbar";

function Home() {
	return (
		<div
			id="Home"
			className="home h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 "
		>
			<div className=" flex flex-col md:flex-row mx-auto max-w-screen-lg h-full items-center justify-center px-4">
				<div className="text-gray-500 pb-8">
					<h1
						className="text-4xl"
						style={{
							paddingTop: "5rem",
							margin: "auto 0",
							fontWeight: "normal",
						}}
					>
						I'm a{" "}
						<span
							className="text-gray-400"
							style={{ color: "", fontWeight: "bold" }}
						>
							{/* Style will be inherited from the parent element */}
							<Typewriter
								words={[
									" Full-Stack Web Developer",
									" Graphic Designer",
								]}
								loop={true}
								cursor
								cursorStyle="|"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quidem, minima omnis! Eveniet eaque tenetur ullam hic.
						Corporis autem beatae pariatur alias sunt. Itaque
						perspiciatis similique harum hic libero in!
					</p>

					<div>
						<Link to="Work" smooth duration={500}>
							<button className="group border-2 text-white px-3 py-1 rounded-2xl mb-20 md:mb-4 mt-4 flex items-center justify-between cursor-pointer hover:bg-white hover:text-black duration-200 ">
								Portfolio
								<span className="group-hover:rotate-45 duration-300 mx-2">
									<FaArrowRightLong />
								</span>
							</button>
						</Link>
					</div>
				</div>

				<div className="group relative">
					<img
						className="rounded-2xl mx-auto w-2/3 md:w-auto "
						src={heroImage}
						alt=""
					/>
					<video
						src={plane}
						alt="Video"
						className="w-2/3 md:w-auto absolute top-0 left-20 md:left-0 opacity-0 group-hover:opacity-100 duration-300 mx-auto rounded-2xl"
						autoPlay
						loop
						muted
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
