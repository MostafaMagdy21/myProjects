import React from "react";
import SideBare from "../../component/sideBare/SideBare";
import Header from "../../component/header/Header";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";

export default function DailyClientPage() {
	return (
		<div>
			<div className="fram">
				<SideBare />
				<div className="master-div">
					<Header />
					<div className="body-page">
						<div className="search col-5">
							<div class="input-group mb-3">
								<input
									type="text"
									class="form-control"
									placeholder="type to search..."
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
								<button className="search-icon btn btn-primary">search</button>
							</div>
							<button className="btn btn-primary">
								<span>+</span> add
							</button>
						</div>
						<div className="filter">
							<form action="">
								<div className="filter col-3">
									<div class="input-group mb-3">
										<input
											type="date"
											class="form-control"
											placeholder="type to search..."
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>
										<span className="icon"></span>
									</div>
								</div>
								{/* ---------------------------- */}
								<div className="filter col-3">
									<div class="input-group mb-3">
										<input
											type="date"
											class="form-control"
											value="to"
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>
										<span className="icon"></span>
									</div>
								</div>
								<button className="btn btn-primary">
									<span>+</span> add
								</button>
							</form>
						</div>
						<div className="table-data">
							<table class="table">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Name</th>
										<th scope="col">Price</th>
										<th scope="col">Action</th>
										<th scope="col">#</th>
										<th scope="col">Name</th>
										<th scope="col">Price</th>
										<th scope="col">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">1</th>
										<td>Mark</td>
										<td>Otto</td>
										<th scope="col">#</th>
										<th scope="col">Name</th>
										<th scope="col">Price</th>
										<th scope="col">Action</th>
										<td>
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
										<th scope="col">#</th>
										<th scope="col">Name</th>
										<th scope="col">Price</th>
										<th scope="col">Action</th>
										<td>
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
										<td colspan="2">Larry the Bird</td>
										<th scope="col">#</th>
										<th scope="col">Name</th>
										<th scope="col">Price</th>
										<th scope="col">Action</th>
										<td>
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
