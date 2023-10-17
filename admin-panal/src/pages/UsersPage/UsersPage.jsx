import React from "react";
import "./UsersPage.scss";
import SideBare from "../../component/sideBare/SideBare";
import Header from "../../component/header/Header";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";

export default function UsersPage() {
	return (
		<div>
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
							<Link className="btn btn-primary col-4" to="/users/add-user">
								<span>+</span> add
							</Link>
						</div>
						<div className="table-data">
							<table class="table">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">NAME</th>
										<th scope="col">EMAIL</th>
										<th scope="col">PHONE NUMBER</th>
										<th scope="col">WORKING FROM</th>
										<th scope="col">WORKING TO</th>
										<th scope="col">ACTION</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">1</th>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
										<td>Otto</td>
										<td>Otto</td>
										<td className="bottons">
											<button className="btn btn-success">
												<AiOutlineEdit />
											</button>
											<button className="btn btn-danger">
												<MdDelete />
											</button>
											<button className="btn btn-danger">
												<BiBlock />
											</button>
										</td>
									</tr>
									<tr>
										<th scope="row">2</th>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
										<td>Otto</td>
										<td>Otto</td>
										<td className="bottons">
											<button className="btn btn-success">
												<AiOutlineEdit />
											</button>
											<button className="btn btn-danger">
												<MdDelete />
											</button>
											<button className="btn btn-danger">
												<BiBlock />
											</button>
										</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td colspan="2">Larry</td>
										<td>@twitter</td>
										<td>Otto</td>
										<td>Otto</td>
										<td className="bottons">
											<button className="btn btn-success">
												<AiOutlineEdit />
											</button>
											<button className="btn btn-danger">
												<MdDelete />
											</button>
											<button className="btn btn-danger">
												<BiBlock />
											</button>
										</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td colspan="2">Larry</td>
										<td>@twitter</td>
										<td>Otto</td>
										<td>Otto</td>
										<td className="bottons">
											<button className="btn btn-success">
												<AiOutlineEdit />
											</button>
											<button className="btn btn-danger">
												<MdDelete />
											</button>
											<button className="btn btn-danger">
												<BiBlock />
											</button>
										</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td colspan="2">Larry</td>
										<td>@twitter</td>
										<td>@twitter</td>
										<td>Otto</td>
										<td className="bottons">
											<button className="btn btn-success">
												<AiOutlineEdit />
											</button>
											<button className="btn btn-danger">
												<MdDelete />
											</button>
											<button className="btn btn-danger">
												<BiBlock />
											</button>
										</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td colspan="2">Larry</td>
										<td>@twitter</td>
										<td>@twitter</td>
										<td>Otto</td>
										<td className="bottons">
											<button className="btn btn-success">
												<AiOutlineEdit />
											</button>
											<button className="btn btn-danger">
												<MdDelete />
											</button>
											<button className="btn btn-danger">
												<BiBlock />
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
