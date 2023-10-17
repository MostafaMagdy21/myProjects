import React from "react";
import SideBare from "../../component/sideBare/SideBare";
import Header from "../../component/header/Header";

export default function BlockListPage() {
	return (
		<div>
			<div className="fram">
				<SideBare />
				<div className="master-div">
					<Header />
					<div className="body-page"></div>
				</div>
			</div>
		</div>
	);
}
