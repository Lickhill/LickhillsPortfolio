import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const SocialLinks = () => {
	const list = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={24} className="ml-6" />
				</>
			),
			href: "https://www.linkedin.com/in/likhilnmaiya/",
			style: "rounded-tr-md",
		},
		{
			id: 2,
			child: (
				<>
					GitHub <FaGithub size={24} className="ml-10" />
				</>
			),
			href: "https://www.github.com/lickhill",
			style: "",
		},
		{
			id: 3,
			child: (
				<>
					Twitter <FaTwitter size={24} className="ml-8" />
				</>
			),
			href: "https://www.twitter.com/maiyarse/",
			style: "",
		},
		{
			id: 4,
			child: (
				<>
					Resume <FaFileAlt size={24} className="ml-10" />
				</>
			),
			href: "/resume.pdf",
			style: "",
		},
		{
			id: 5,
			child: (
				<>
					Instagram <FaInstagram size={24} className="ml-4 " />
				</>
			),
			href: "https://instagram.com/maiyarse",
			style: "",
		},
		{
			id: 6,
			child: (
				<>
					Leetcode{" "}
					<TbBrandLeetcode
						size={24}
						className="ml-6
					"
					/>
				</>
			),
			href: "https://leetcode.com/lickhill/",
			style: "rounded-br-md",
		},
	];
	return (
		<div className="hidden lg:flex flex-col top-[35%] left-0 fixed text-white justify-between items-center sm-hidden">
			<ul>
				{list.map(({ id, child, href, style }) => (
					<li
						key={id}
						className={
							"bg-gray-600 h-9 w-40 px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
							" " +
							style
						}
					>
						<a
							href={href}
							className="flex"
							target="_blank"
							rel="noreferrer"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
