import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
	const logoImage = require("../../imges/LaVie.png");
	const fluffyLogo = require("../../imges/Branding and Packaging for Planty Plant Based Milk - World Brand Design Society 1 (Traced).png");
	return (
		<div className="footer">
			<div className="row">
				{/* la-vie-footer */}
				<div className="la-vie-footer col-4">
					<h4>
						<img src={logoImage} alt="logo" />
						<img className="fluffy" src={fluffyLogo} alt="logo" />
					</h4>
					<p>
						<span>LA VIE</span> We're dedicated to giving you the very best of
						plants, with a focus on dependability
					</p>
				</div>
				{/* section-footer */}
				<div className="section-footer col-2">
					<h4>Sections</h4>
					<ul>
						<li>
							<Link to="">Home</Link>
						</li>
						<li>
							<Link to="">category</Link>
						</li>
						<li>
							<Link to="">new</Link>
						</li>
						<li>
							<Link to="">request to be seller</Link>
						</li>
					</ul>
				</div>
				{/* contact-us-footer */}
				<div className="contact-us-footer col-2">
					<h4>CONTACT US</h4>
					<p>
						Phone 01244522323 Phone 01331920394 Email : rawan@gmail.com Address
						: 6 October city ,Giza ,egypt
					</p>
				</div>
				{/* sign-for-our-newletter */}
				<div className="sign-for-our-newletter col-3">
					<h4>SIGN FOR OUR NEWLETEER AND GET A 10% DISCOUNT</h4>
					<div className="row div-footer">
						<h6 className="col-6">Your email address</h6>
						<Link to="" className="col-4 btn ">
							submit
						</Link>
					</div>
					<h4>OUR SOCIAL</h4>
					<div className="footer-icons col-4">
						<AiFillFacebook />
						<BsInstagram />
						<AiFillTwitterSquare />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
