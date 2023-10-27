import axios from "axios";
import { ALLMOVIES, getMovie } from "../types/moviesTypes";

export const getAllMovie = () => {
	return async (dispatch) => {
		const res = await axios.get(getMovie);
		dispatch({ type: ALLMOVIES, data: res.data.results, pages: 500 });
	};
};

export const searchMovieAction = (inputSearch) => {
	return async (dispatch) => {
		// console.log(inputSearch);
		const res = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=24aa4a429a94e476299d3bab7767e47d&query=${inputSearch}&include_adult=false&language=en-US&page=1`
		);
		dispatch({ type: ALLMOVIES, data: res.data.results, pages: 500 });
	};
};

export const getPagesNumberFromApi = (numOfPages) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=24aa4a429a94e476299d3bab7767e47d&include_adult=false&include_video=false&language=ar&page=${numOfPages}`
			);
			if (res) {
				dispatch({ type: ALLMOVIES, data: res.data.results, pages: 500 });
			} else {
				throw new Error();
			}
		} catch (e) {
			alert("no internet");
		}
	};
};
