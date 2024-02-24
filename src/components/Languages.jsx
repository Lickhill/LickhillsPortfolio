import React from "react";
import html from "/public/languages/html.png";
import css from "/public/languages/css.png";
import js from "/public/languages/js.png";
import reactjs from "/public/languages/reactjs.png";
import tailwind from "/public/languages/tailwind.png";
import bootstrap from "/public/languages/bootstrap.png";
import github from "/public/languages/github.png";
import java from "/public/languages/java.png";
import cpp from "/public/languages/cpp.png";
import python from "/public/languages/python.png";
import expressjs from "/public/languages/expressjs.png";
import nodejs from "/public/languages/nodejs.png";
import mondodb from "/public/languages/mondodb.png";
import sql from "/public/languages/sql.png";
import php from "/public/languages/php.png";
import git from "/public/languages/git.png";
import ubuntu from "/public/languages/ubuntu.png";
import rust from "/public/languages/rust.png";

const Languages = () => {
	const list = [
		{
			id: 1,
			name: html,
			style: " shadow-orange-600",
		},
		{
			id: 2,
			name: css,
			style: " shadow-blue-600",
		},
		{
			id: 3,
			name: bootstrap,
			style: " shadow-purple-600",
		},
		{
			id: 4,
			name: expressjs,
			style: " shadow-gray-600",
		},
		{
			id: 5,
			name: git,
			style: " shadow-orange-600 ",
		},
		{
			id: 6,
			name: github,
			style: " shadow-gray-800",
		},
		{
			id: 7,
			name: java,
			style: " shadow-violet-800",
		},
		{
			id: 8,
			name: js,
			style: " shadow-yellow-600",
		},
		{
			id: 9,
			name: mondodb,
			style: " shadow-green-600",
		},
		{
			id: 10,
			name: nodejs,
			style: " shadow-green-800",
		},
		{
			id: 11,
			name: php,
			style: " shadow-purple-300 xl:bg-transparent",
		},
		{
			id: 12,
			name: python,
			style: " shadow-blue-600 ",
		},
		{
			id: 13,
			name: rust,
			style: " shadow-red-600 ",
		},
		{
			id: 14,
			name: sql,
			style: " shadow-violet-600",
		},
		{
			id: 15,
			name: ubuntu,
			style: " shadow-orange-600",
		},
		{
			id: 16,
			name: reactjs,
			style: " shadow-teal-700  ",
		},
		{
			id: 17,
			name: cpp,
			style: " shadow-blue-500",
		},
		{
			id: 18,
			name: tailwind,
			style: " shadow-blue-600",
		},
	];
	return (
		<div
			id="Experience"
			className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 pt-16"
		>
			<div className="flex flex-col justify-center w-full h-full mx-auto p-4 max-w-screen-lg">
				<h2 className="pb-8">
					<span className="border-b-4 border-gray-600 hover:border-gray-800 duration-200 text-4xl ">
						Languages and Frameworks
					</span>
				</h2>
				<p>These are some of the languages and frameworks i know.</p>
			</div>

			<div className="flex flex-col justify-center w-full h-full mx-auto p-4 max-w-screen-lg">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-12 sm:px-0">
					{list.map(({ id, name, style }) => (
						<div
							key={id}
							className={`${style} hover:scale-125  duration-300 shadow-md rounded-lg`}
						>
							<img className="w-20 mx-auto" src={name} alt="" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Languages;
