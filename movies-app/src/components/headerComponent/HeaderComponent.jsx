import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, InputGroup, Row, Container, Col } from "react-bootstrap";
import "./HeaderComponent.scss";
import { AiOutlineSearch } from "react-icons/ai";
import logo2 from "../../imges/logo2.png";
import { useDispatch } from "react-redux";
import {
	searchMovieAction,
	getAllMovie,
} from "../../redux/actions/movieListAction";
export const HeaderComponent = () => {
	const [searchType, setSearchType] = useState("");
	const dispatch = useDispatch();

	const fetchForSearch = (searchType) => {
		if (searchType) {
			dispatch(searchMovieAction(searchType));
		} else {
			dispatch(getAllMovie());
		}
	};
	useEffect(() => {
		fetchForSearch(searchType);
	}, [searchType]);

	return (
		<div className="header">
			<Container>
				<Row>
					<Col md={2}>
						<div className="logo">
							<Link to={"/"}>
								<img src={logo2} alt="logo2" />
							</Link>
						</div>
					</Col>
					<Col md={10} sm={12} xs={12}>
						<InputGroup className="mb-3" col="10">
							<Form.Control
								placeholder="ابحث عن اسم الفيلم ..."
								aria-label="Username"
								aria-describedby="basic-addon1"
								value={searchType}
								onChange={(e) => setSearchType(e.target.value)}
							/>
							<InputGroup.Text id="basic-addon1">
								<button
									type="button"
									class="btn btn-link"
									onClick={() => fetchForSearch(searchType)}
								>
									<AiOutlineSearch />
								</button>
							</InputGroup.Text>
						</InputGroup>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HeaderComponent;
