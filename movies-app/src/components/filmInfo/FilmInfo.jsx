import React, { useEffect, useState } from "react";
import "./FilmInfo.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import HeaderComponent from "../headerComponent/HeaderComponent";
import axios from "axios";

const FilmInfo = ({ fetchForSearch }) => {
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	const [flag, setFlag] = useState(false);

	// get movie detiles
	const getMovieDetils = async () => {
		try {
			const movieDetils = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=24aa4a429a94e476299d3bab7767e47d&language=ar`
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

	const onClickFilmDir = () => {
		if (movie.homepage) {
			setFlag(true);
		} else {
			alert("the film has no link");
		}
	};
	return (
		<>
			<HeaderComponent fetchForSearch={fetchForSearch} />
			<div className="film-info">
				<Container>
					<Row className="film-row">
						<Col md={3} className="img">
							<img
								src={`https://images.tmdb.org/t/p/w500${movie.poster_path}`}
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
						<a
							href={movie.homepage}
							onClick={onClickFilmDir}
							target={flag && "blank"}
						>
							زيارة الفيلم
						</a>
					</div>
				</Container>
			</div>
		</>
	);
};

export default FilmInfo;
