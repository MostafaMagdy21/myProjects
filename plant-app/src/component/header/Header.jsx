import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
	let imageName = require("../../imges/LaVie.png");
	let fluffyImage = require("../../imges/Branding and Packaging for Planty Plant Based Milk - World Brand Design Society 1 (Traced).png");
	return (
		<div className="header">
			<div className="logo col-3">
				<img src={fluffyImage} alt="fluffy-logo" className="fluffy" />
				<img src={imageName} alt="logo" className="img-logo" />
			</div>
			<ul className="header-list col-5">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
			<div className="col-2"></div>
			<div className="icons col-2">
				<Link className="login-btn btn" to={"/login-page"}>
					Logout
				</Link>
			</div>
		</div>
	);
};

export default Header;
