import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="header">
			<div className="logo">
				Power<span>_Gym</span>
			</div>
			<div className="list">
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a className="nav-link" href="#sec-1">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#sec-2">
							About Us
						</a>
					</li>
					<li class="nav-item">
						<a className="nav-link" href="#sec-3">
							classes
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#sec-4">
							Galliry
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#sec-5">
							Prices
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#sec-6">
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
