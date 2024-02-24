import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: "Home",
		},
		{
			id: 2,
			link: "About",
		},
		{
			id: 3,
			link: "Contact",
		},
		{
			id: 4,
			link: "Work",
		},
		{
			id: 5,
			link: "Experience",
		},
	];

	return (
		<div className="relative ">
			<div className="text-white bg-black flex justify-between items-center w-full h-20 px-4 ">
				<div className="text-3xl ">Likhil</div>
				<div className="flex items-center">
					<ul className="hidden md:flex">
						{links.map(({ id, link }) => (
							<li
								key={id}
								className="mx-4 capitalize font-medium cursor-pointer text-gray-500 hover:scale-110 duration-200"
							>
								<Link to={link} smooth duration={500}>
									{link}
								</Link>
							</li>
						))}
					</ul>
					<div
						onClick={() => setNav(!nav)}
						className=" md:hidden pr-3 text-gray-500 cursor-pointer z-10"
					>
						{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
					</div>
				</div>
			</div>
			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
					{/* <li className="py-6 capitalize text-4xl cursor-pointer">
						home
					</li>
					<li className="py-6 capitalize text-4xl cursor-pointer">
						contact
					</li>
					<li className="py-6 capitalize text-4xl cursor-pointer">
						about
					</li>
					<li className="py-6 capitalize text-4xl cursor-pointer">
						skills
					</li> */}
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="py-6 capitalize text-4xl cursor-pointer"
						>
							<Link
								to={link}
								smooth
								duration={500}
								onClick={() => setNav(!nav)}
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Navbar;
