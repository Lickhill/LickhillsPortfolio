import React from "react";
import digitalclock from "/digitalclock.png";
import insta from "/insta.png";
import javatutor from "/javatutor.png";
import sign from "/sign.png";
import tictactoe from "/tictactoe.png";
import todolist from "/todolist.png";
import { Link } from "react-scroll";

const Work = () => {
	const work = [
		{
			id: 1,
			name: digitalclock,
			demo: "https://lickhill.github.io/digital-clock/",
			link: "https://github.com/Lickhill/digital-clock",
		},
		{
			id: 2,
			name: insta,
			demo: "https://instagram.com/daaeyum.png",
			link: "https://instagram.com/daaeyum.png",
		},
		{
			id: 3,
			name: javatutor,
			demo: "https://lickhill.github.io/find_Teacher_Near_You/",
			link: "https://github.com/Lickhill/find_Teacher_Near_You/",
		},
		{
			id: 4,
			name: todolist,
			demo: "https://github.com/Lickhill/ToDoList-DigClk-Timer",
			link: "https://github.com/Lickhill/ToDoList-DigClk-Timer",
		},
		{
			id: 5,
			name: tictactoe,
			demo: "https://lickhill.github.io/tic-tac-toe/",
			link: "https://github.com/Lickhill/tic-tac-toe/",
		},
		{
			id: 6,
			name: sign,
			demo: "https://signup-page-nodejs-lickhill.onrender.com/",
			link: "https://github.com/Lickhill/signup-page-nodejs",
		},
	];

	return (
		<div
			id="Work"
			className="work bg-gradient-to-b from-black via-black to-gray-900 text-gray-400"
		>
			<div className="flex flex-col justify-center mx-auto max-w-screen-lg w-full h-full p-4">
				<h2 className="text-4xl text-gray-300 inline pb-8">
					<span className="border-b-4 border-gray-600 hover:border-gray-800 duration-200">
						Work
					</span>
				</h2>
				<p>Here take a look at some of my work. </p>
			</div>

			<div className="flex flex-col justify-center mx-auto max-w-screen-lg w-full h-full p-4">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{work.map(({ id, name, demo, link }) => (
						<div
							key={id}
							className="shadow-md shadow-gray-600 rounded-lg"
						>
							<img
								className="rounded-md duration-200 hover:scale-105"
								src={name}
								alt="Project"
							/>
							<div className="flex items-center justify-between ml-8">
								<a
									href={demo}
									className="w-1/2 px-6 py-4 hover:scale-125 duration-300"
									target="_blank"
									rel="noopener noreferrer"
								>
									Demo
								</a>
								<a
									href={link}
									className="w-1/2 px-6 py-4 hover:scale-125 duration-300"
									target="_blank"
									rel="noopener noreferrer"
								>
									Link
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Work;
