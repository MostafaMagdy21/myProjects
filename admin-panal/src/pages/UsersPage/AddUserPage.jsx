import React from "react";
import "./AddUserPage.scss";
import SideBare from "../../component/sideBare/SideBare";
import Header from "../../component/header/Header";

export default function AddUserPage() {
	return (
		<div className="add-user">
			<div className="fram">
				<SideBare />
				<div className="master-div">
					<Header />
					<div className="body-page">
						<h4>Users</h4>
						<div className="search col-5">
							<div class="input-group mb-3 col-6">
								<input
									type="text"
									class="form-control"
									placeholder="type to search..."
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
								<button className="search-icon btn btn-primary">search</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
