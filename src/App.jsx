import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Work from "./components/Work";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Images from "./components/Images";

const App = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<SocialLinks />
			<Images />
			<About />
			<Work />
			<Languages />
			<Contact />
		</div>
	);
};

export default App;
