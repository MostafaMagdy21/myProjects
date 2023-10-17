import React from "react";
import "./FilmInfo.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import HeaderComponent from "../headerComponent/HeaderComponent";

const FilmInfo = ({ fetchForSearch, data }) => {
	const { id } = useParams();
	console.log(data[id]);
	return (
		<>
			<HeaderComponent fetchForSearch={fetchForSearch} />
			<div className="film-info">
				<Container>
					<Row className="film-row">
						<Col md={3}>
							<img src="movie-poster.jpg" alt="movie-poster.jpg" />
						</Col>
						<Col md={9} className="film-global-info">
							<h2>{`اسم الفيلم: ${"لتكن مذبحة"}`}</h2>
							<h2>{`تاريخ الفيلم: ${"لتكن مذبحة"}`}</h2>
							<h2>{`عدد المقيمين: ${"لتكن مذبحة"}`}</h2>
							<h2>{`التقييم: ${"لتكن مذبحة"}`}</h2>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="story">
								<h2>القصة:</h2>
								<p>
									{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
								qui similique quo voluptas impedit ratione corporis laborum
								mollitia molestiae, error voluptates aperiam est laudantium quos
								cumque harum placeat deserunt? Porro?`}
								</p>
							</div>
						</Col>
					</Row>
					<div className="buttons">
						<Link to={"/"}>العودة للرئيسية</Link>
						<Link>زيارة الفيلم</Link>
					</div>
				</Container>
			</div>
		</>
	);
};

export default FilmInfo;
