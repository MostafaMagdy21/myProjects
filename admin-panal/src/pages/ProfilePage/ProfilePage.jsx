import React from "react";
import "./ProfilePage.scss";
import SideBare from "../../component/sideBare/SideBare";
import Header from "../../component/header/Header";

export default function ProfilePage() {
	return (
		<div>
			<div className="fram">
				<SideBare />
				<div className="master-div">
					<Header />
					<div className="body-page">Profile Page</div>
				</div>
			</div>
		</div>
	);
}
