import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiFillSetting, AiOutlineFullscreenExit } from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdCloudyNight } from "react-icons/io";
import logo from "../../imgs/icon.avif";

export default function Header() {
	const [screenFlag, setScreenFlag] = useState(false);
	const [settingFlag, setSettingFlag] = useState(false);

	const fullScreenFunc = () => {
		if (screenFlag) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen().catch((e) => {
				console.log(e);
			});
		}
		setScreenFlag(!screenFlag);
	};

	return (
		<div className="header">
			<div className="icons">
				<button onClick={() => fullScreenFunc()}>
					{screenFlag ? <AiOutlineFullscreenExit /> : <BsArrowsFullscreen />}
				</button>
				<button onClick={() => setSettingFlag(!settingFlag)}>
					<AiFillSetting />
				</button>
				<Link className="profile" to="/profile">
					<CgProfile />
				</Link>

				<ul className={settingFlag ? "d-block" : "d-none"}>
					<div className="header-nav">
						<h4>User Name</h4>
						<h6>User Auth</h6>
					</div>
					<li>
						<Link to="/profile">
							<span>
								<CgProfile />
							</span>
							Profile
						</Link>
					</li>
					<li>
						<Link>
							<span>
								<IoMdCloudyNight />
							</span>
							Night Mode
						</Link>
					</li>
					<li>
						<Link to="/login">
							<span>
								<BiLogOut />
							</span>
							LogOut
						</Link>
					</li>
				</ul>
			</div>
			<div className="logo">
				<img src={logo} alt="" />
				<span className="text">
					ower<span>-Gym</span>
				</span>
			</div>
		</div>
	);
}
