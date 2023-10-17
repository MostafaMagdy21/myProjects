import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.scss";
import { BiHomeSmile, BiUserCircle, BiBlock } from "react-icons/bi";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdCardMembership } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsPersonSquare } from "react-icons/bs";

export default function SideBare() {
	const [flage1, setFlage1] = useState(false);
	const [flage2, setFlage2] = useState(false);

	return (
		<div className="side-bar">
			<div className="icon">
				<BsPersonSquare />
			</div>
			<div className="description">User Name</div>
			<h2>Power-Gym</h2>
			<ul>
				<li>
					<span className="icon">
						<BiHomeSmile />
					</span>
					<Link to="/">Dashboard</Link>
				</li>
				<li>
					<span className="icon">
						<BiUserCircle />
					</span>
					<Link to="/users">Users</Link>
				</li>
				<li>
					<span className="icon">
						<AiOutlineUsergroupDelete />
					</span>
					<Link onClick={() => setFlage1(!flage1)}>Clients</Link>
					<ul className={flage1 ? "visible" : "hidden"}>
						<li>
							<span className="icon"></span>
							<Link to="/clients/daily-client">Daily clients</Link>
						</li>
						<li>
							<span className="icon"></span>
							<Link to="/clients/subscribed-client">Subscribed clients</Link>
						</li>
					</ul>
				</li>
				<li>
					<span className="icon">
						<TbActivityHeartbeat />
					</span>
					<Link to="/activity">Activities</Link>
				</li>
				<li>
					<span className="icon">
						<MdCardMembership />
					</span>
					<Link to="/memberships">Memberships</Link>
				</li>
				<li>
					<span className="icon">
						<FcMoneyTransfer />
					</span>
					<Link onClick={() => setFlage2(!flage2)}>Money box</Link>
					<ul className={flage2 ? "visible" : "hidden"}>
						<li>
							<span className="icon"></span>
							<Link to="/money-box/deposite">Deposit</Link>
						</li>
						<li>
							<span className="icon"></span>
							<Link to="/money-box/withdrow">Withdraw</Link>
						</li>
						<li>
							<span className="icon"></span>
							<Link to="/money-box/report-money-box">Money Box Report</Link>
						</li>
					</ul>
				</li>
				<li>
					<span className="icon">
						<BiBlock />
					</span>
					<Link to="/block-list">Block List</Link>
				</li>
			</ul>
		</div>
	);
}
