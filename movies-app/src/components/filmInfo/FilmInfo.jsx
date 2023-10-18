import React, { useEffect, useState } from "react";
import "./FilmInfo.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import HeaderComponent from "../headerComponent/HeaderComponent";
import axios from "axios";

const FilmInfo = ({ fetchForSearch }) => {
	const { id } = useParams();
	console.log(id);
	const [movie, setMovie] = useState([]);

	// get movie detiles
	const getMovieDetils = async () => {
		try {
			const movieDetils = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=9a8b81bb6c9e7baea26bb66ca8665e77&language=ar`
			);
			if (movieDetils) {
				setMovie(movieDetils.data);
			} else {
				throw new Error();
			}
		} catch (e) {
			console.log("error catching");
		}
	};
	// getMovieDetils();
	useEffect(() => {
		getMovieDetils();
	}, []);
	return (
		<>
			<HeaderComponent fetchForSearch={fetchForSearch} />
			<div className="film-info">
				<Container>
					<Row className="film-row">
						<Col md={3}>
							<img
								// src={`https://api.themoviedb.org/3/movie/${id}?api_key=9a8b81bb6c9e7baea26bb66ca8665e77/${movie.poster_path}`}
								alt="movie-poster.jpg"
							/>
						</Col>
						<Col md={9} className="film-global-info">
							<h3>{`اسم الفيلم: ${movie.original_title}`}</h3>
							<h3>{`تاريخ الفيلم: ${movie.release_date}`}</h3>
							<h3>{`عدد المقيمين: ${movie.vote_count}`}</h3>
							<h3>{`التقييم: ${movie.vote_average}`}</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="story">
								<h2>القصة:</h2>
								<p>{movie.overview ? movie.overview : <h4>no story</h4>}</p>
							</div>
						</Col>
					</Row>
					<div className="buttons">
						<Link to={"/"}>العودة للرئيسية</Link>
						<a href={movie.homepage}>زيارة الفيلم</a>
					</div>
				</Container>
			</div>
		</>
	);
};

export default FilmInfo;
