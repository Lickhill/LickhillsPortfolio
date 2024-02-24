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
		},
		{
			id: 2,
			name: insta,
		},
		{
			id: 3,
			name: javatutor,
		},
		{
			id: 4,
			name: todolist,
		},
		{
			id: 5,
			name: tictactoe,
		},
		{
			id: 6,
			name: sign,
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
					{work.map(({ id, name }) => (
						<div
							key={id}
							className="shadow-md shadow-gray-600 rounded-lg"
						>
							<img
								className="rounded-md duration-200 hover:scale-105"
								src={name} // Use the 'name' property from the 'work' array
								alt="Project"
							/>
							<div className="flex items-center justify-between">
								<button className="w-1/2 px-6 py-4 hover:scale-105 duration-300">
									Demo
								</button>
								<button className="w-1/2 px-6 py-4 hover:scale-105 duration-300">
									Link
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Work;
