import React from "react";

const Contact = () => {
	return (
		<div
			id="Contact"
			className="bg-gradient-to-b from-black via-black to-gray-900 text-gray-300 pt-8"
		>
			<div className="flex flex-col h-full w-full max-w-screen-lg mx-auto p-4">
				<div>
					<h2 className="text-4xl font-bold pb-8">
						<span className="border-b-4 border-gray-600 hover:border-gray-800 duration-200 ">
							Contact
						</span>
					</h2>
					<p>Fill up this form to contact me.</p>
				</div>

				<div className="flex justify-center">
					<form
						action="https://getform.io/f/penLnYb7"
						method="POST"
						className="flex flex-col  w-full md:w-1/2 "
					>
						<input
							type="text"
							name="Name"
							placeholder="Name"
							className="p-4 mt-4 border-2 bg-transparent rounded-md text-white focus:outline-none focus:shadow-outline"
						/>
						<input
							type="email"
							name="E-mail"
							placeholder="Email"
							className="p-4 my-4 border-2 bg-transparent rounded-md text-white focus:outline-none focus:shadow-outline"
						/>
						<textarea
							name="message"
							id=""
							cols="30"
							rows="10"
							placeholder="Message"
							className="p-4 mb-4 border-2 bg-transparent rounded-md text-white focus:outline-none focus:shadow-outline"
						></textarea>
						<button
							type="submit"
							className="bg-gray-600 text-white rounded-md cursor-pointer inline-block font-sans text-base font-bold leading-tight m-0 max-w-none min-h-11 min-w-2 p-2 relative text-center text-none select-none -webkit-select-none touch-manipulation hover:opacity-75 focus:opacity-75"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
