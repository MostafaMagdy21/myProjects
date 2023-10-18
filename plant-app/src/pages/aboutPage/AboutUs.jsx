import React from "react";
import "./AboutUs.scss";
import Header from "../../component/header/Header";
export const AboutUs = () => {
	// for about us section
	let imge7 = require("../../imges/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office 1.png");

	return (
		<div>
			<Header />
			<div className="about-us">
				<h2>About Us ____</h2>
				<div className="row">
					<p className="col-6">
						Welcome to La Vie, your number one source for planting. We're
						dedicated to giving you the very best of plants, with a focus on
						dependability, customer service and uniqueness. Founded in 2020, La
						Vie has come a long way from its beginnings in a home office our
						passion for helping people and give them some advices about how to
						plant and take care of plants. We now serve customers all over
						Egypt, and are thrilled to be a part of the eco-friendly wing
					</p>
					<div className="col-6 about-us-img">
						<img src={imge7} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
