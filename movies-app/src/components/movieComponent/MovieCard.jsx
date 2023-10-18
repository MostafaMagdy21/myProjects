import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
	return (
		<Col lg={3} md={4} sm={6} xs={12}>
			<div className="content">
				<Card>
					<Card.Img
						variant="top"
						src={`https://images.tmdb.org/t/p/w500${movie.poster_path}`}
					/>
					<Card.Body>
						<h5>{movie.original_title}</h5>
						<h5>{`تاريخ الفيلم: ${movie.release_date}`}</h5>
						<h5>{`عدد المقيمين: ${movie.vote_count}`}</h5>
						<h5>{`التقييم: ${movie.vote_average}`}</h5>

						<Link to={`/movie/${movie.id}`} className="btn">
							Go somewhere
						</Link>
					</Card.Body>
				</Card>
			</div>
		</Col>
	);
};

export default MovieCard;
