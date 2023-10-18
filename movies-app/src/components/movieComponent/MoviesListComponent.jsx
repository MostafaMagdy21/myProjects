import React from "react";
import MovieCard from "./MovieCard";
import "./movieList.scss";
import { Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import HeaderComponent from "../headerComponent/HeaderComponent";

export const MoviesListComponent = ({
	data,
	getPagesNumberFromApi,
	pageCount,
	fetchForSearch,
}) => {
	return (
		<>
			<HeaderComponent fetchForSearch={fetchForSearch} />
			<Container>
				<Row>
					<div className="movieList">
						{data.length ? (
							data.map((movie, i) => <MovieCard key={i} movie={movie} />)
						) : (
							<h1>There Are No Movies Now</h1>
						)}
					</div>
				</Row>
				<Row>
					<Navigation
						getPagesNumberFromApi={getPagesNumberFromApi}
						pageCount={pageCount}
					/>
				</Row>
			</Container>
		</>
	);
};

export default MoviesListComponent;
