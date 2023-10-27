import axios from "axios";
import { ALLMOVIES, getMovie } from "../types/moviesTypes";

export const getAllMovie = () => {
	return async (dispatch) => {
		const res = await axios.get(getMovie);
		dispatch({ type: ALLMOVIES, data: res.data.results, pages: 500 });
	};
};
