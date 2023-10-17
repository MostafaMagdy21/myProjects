import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import SideBare from "../../component/sideBare/SideBare";
import Header from "../.././component/header/Header";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaRegChartBar } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";

export default function HomePage() {
	return (
		<div className="home-page">
			<div className="fram">
				<SideBare />
				<div className="master-div">
					<Header />
					<div className="body-page">
						<div className="row-1">
							<div className="row">
								<div className="card-container">
									<div className="earinig-card card-container card-view card-color-1">
										<div className="icon">
											<FaRegChartBar />
										</div>
										<div className="num">
											<p>Today earnings</p>
											<h5>0</h5>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="card-container card-grop-1">
									{/* start card */}
									{/* card one */}
									<div className="card-view card-color-2 col-3">
										<div className="icon">
											<AiOutlineUsergroupDelete />
										</div>
										<div className="para">
											<p>Subscribed clients</p>
											<h5>34</h5>
										</div>
									</div>
									{/* card two */}
									<div className="card-view card-color-3 ml-1 col-3">
										<div className="icon">
											<AiOutlineUsergroupDelete />
										</div>
										<div className="para">
											<p>Daily clients</p>
											<h5>9</h5>
										</div>
									</div>
									{/* card three */}
									<div className="card-view card-color-4 ml-1 col-3">
										<div className="icon">
											<TbActivityHeartbeat />
										</div>
										<div className="para">
											<p>Activities</p>
											<h5>9</h5>
										</div>
									</div>
									{/* card four */}
									<div className="card-view card-color-3 ml-1 col-3">
										<div className="icon">
											<BsCardChecklist />
										</div>
										<div className="para">
											<p>Memberships</p>
											<h5>26</h5>
										</div>
									</div>
									{/* end card */}
								</div>
							</div>
							<div className="row">
								<div className="card-container card-grop-2">
									<div className="card-view col-3">
										<div className="card-content">
											<p>New subscribed clients</p>
											<div className="icon">
												<AiOutlineUsergroupDelete />
											</div>
											<p>Monthly</p>
										</div>
										<div className="num">0</div>
									</div>
									<div className="card-view col-3 ml-1 ">
										<div className="card-content">
											<p>New daily clients</p>
											<div className="icon">
												<AiOutlineUsergroupDelete />
											</div>
											<p>Monthly</p>
										</div>
										<div className="num">0</div>
									</div>
									<div className="card-view col-3 ml-1 ">
										<div className="card-content">
											<p>Users</p>
											<div className="icon">
												<AiOutlineUsergroupDelete />
											</div>
											<p>All users</p>
										</div>
										<div className="num">0</div>
									</div>
									<div className="card-view col-3 ml-1">
										<div className="card-content">
											<p>Money box</p>
											<div className="icon">
												<FcMoneyTransfer />
											</div>
											<p>Total amount in money box</p>
										</div>
										<div className="num">3900.00</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
