import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import AboutUs from "../aboutPage/AboutUs";
import Header from "../../component/header/Header";

const HomePage = () => {
	let imge7 = require("../../imges/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office 1.png");
	// for popular categories section
	let imge1 = require("../../imges/image 49.png"),
		imge2 = require("../../imges/image 65.png"),
		imge3 = require("../../imges/image 64.png"),
		// for best seler section
		imge4 = require("../../imges/image 75.png"),
		imge5 = require("../../imges/image 71.png"),
		imge6 = require("../../imges/image 77.png"),
		// for blog section
		imge8 = require("../../imges/jazmin-quaynor-8ioenvmof-I-unsplash (1) 1.png"),
		imge9 = require("../../imges/galina-n-miziNqvJx5M-unsplash 2 (2).png"),
		imge10 = require("../../imges/stephanie-harvey-vHkj3fX9wCk-unsplash 2 (1).png");

	const [items, setItems] = useState([
		// for popular categories section
		{ id: 1, img: imge1, name: "Tools" },
		{ id: 2, img: imge2, name: "Seeds" },
		{ id: 3, img: imge3, name: "Low Light Plants" },
		{ id: 4, img: imge1, name: "Bright Light Plants" },
	]);
	const [items2, setItems2] = useState([
		// for best seler section
		{ id: 1, img: imge4, name: "SPIDER PLANT", salary: "190 EGP" },
		{ id: 2, img: imge5, name: "JUNIPER BONSAI", salary: "100 EGP" },
		{ id: 3, img: imge6, name: "SNAKE PLANT", salary: "180 EGP" },
		{ id: 4, img: imge4, name: "SNAKE PLANT", salary: "70 EGP" },
	]);
	const [items3, setItems3] = useState([
		// for best seler section
		{ id: 1, img: imge8, name: "SPIDER PLANT", timespen: "2 days ago" },
		{ id: 2, img: imge9, name: "JUNIPER BONSAI", timespen: "2 days ago" },
		{ id: 3, img: imge10, name: "SNAKE PLANT", timespen: "2 days ago" },
	]);
	return (
		<div className="home-page">
			<Header />
			{/* perfect way to planet in home */}
			<div className="perfect-way-to-planet-in-home">
				<div className="parant">
					<div className="child-1">
						<div className="image col-6"></div>
					</div>
				</div>

				<div className="paragraph col-6">
					<div className="info">
						<div className="info-icon">
							<Link to="/about" title="It is a long established fact that">
								?
							</Link>
						</div>
					</div>
					<div className="content">
						<h3>Perfect Way To Planet In Home</h3>
						<p>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using 'Content here,
							content here', making it look like readable English. Many desktop
							publishing packages and web page editors now use Lorem Ipsum as
							their default model text, and a search for 'lorem ipsum' will
							uncover many web sites still in their infancy. Various versions
							have evolved over the years, sometimes by accident, sometimes on
							purpose (injected humour and the like).
						</p>
						<button className="btn btn-explore">Explore Now</button>
					</div>
				</div>
			</div>
			{/* popular categories section */}
			<div className="popular-categories">
				<h4 className="popular-categories-h4">Popular ___ Categories</h4>
				<div className="popular-categories-cards">
					{items.map((card) => (
						<div className="card">
							<div class="card-body">
								<img src={card.img} class="card-img-top" alt="..." />
							</div>
							<Link to={"/blog"}>
								<h4>{card.name}</h4>
							</Link>
						</div>
					))}
				</div>
			</div>
			{/* best seller section */}
			<div className="best-seller">
				<Link to="">
					<h4 className="best-seller-h4">Best seller ___</h4>
				</Link>
				<div className="best-seller-cards">
					<div className="row">
						{items2.map((card, i) => (
							<div className={`card col-3 ${i % 2 === 0 && "card-2"}`}>
								<div className="card-body">
									<img src={card.img} className="card-img-top" alt="..." />
									<Link to="">
										<h4>{card.name}</h4>
										<h5>{card.salary}</h5>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Blogs section */}
			<div className="blogs">
				<Link to={"/blog"}>
					<h2>Blogs ____</h2>
				</Link>
				<div className="row">
					{items3.map((card) => (
						<div class="card col-4">
							<img src={card.img} class="card-img-top" alt="..." />
							<div class="card-body">
								<h6 class="card-title">2 days ago</h6>
								<h4>5 Simple Tips treat plant </h4>
								<p class="card-text">
									leaf, in botany, any usually flattened green outgrowth from
									the stem of
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* about us section */}
			{/* <AboutUs /> */}
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

export default HomePage;
