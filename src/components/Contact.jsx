import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

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

				<div className="flex flex-col md:flex-row  md:justify-around my-8">
					<a
						href="tel:+919832172970"
						className="mb-4 md:mb-0 md:mr-4 border-2 md:border-0 hover:bg-white hover:text-black rounded-3xl hover:duration-200 text-white  py-2 px-4 md:text-center"
					>
						Call Me Now<br></br>
						<span className="text-black">9832172970</span>
					</a>

					<a
						href="mailto:likhilnm17103@gmail.com"
						className="mb-4 md:mb-0 md:mr-4 border-2 md:border-0 hover:bg-white hover:text-black rounded-3xl hover:duration-200 text-white  py-2 px-4 md:text-center"
					>
						Shoot Me an Email<br></br>
						<span className="text-black">
							likhilnm17103@gmail.com
						</span>
					</a>
					<a
						href="https://wa.me/9832172970"
						className="mb-4 md:mb-0 md:mr-4 border-2 md:border-0 hover:bg-white md:text-center hover:text-black rounded-3xl hover:duration-200 text-white  py-2 px-4 "
					>
						DM on WhatsApp<br></br>
						<span className="text-black">9832172970</span>
					</a>
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

/*<div className="flex flex-col md:flex-row md:justify-around py-5 ">
					<div className="mt-4 border-0 p-1.5 rounded-2xl hover:bg-white hover:text-black hover:duration-200 w-full md:w-auto">
						<a className="h-screen" href="tel:+91983219270">
							Call Me Now
						</a>
					</div>

					<div className="my-4 border-0 p-1.5 rounded-2xl hover:bg-white hover:text-black hover:duration-200 w-full md:w-auto">
						<a className="" href="mailto:likhilnm17103@gmail.com">
							Shoot Me A Mail
						</a>
					</div>

					<div className="mb-4  border-0 p-1.5 rounded-2xl hover:bg-white hover:text-black hover:duration-200 ">
						<a className="md:mt-9" href="https://wa.me/9832172970">
							DM Me on WhatsApp
						</a>
					</div>
				</div>*/
