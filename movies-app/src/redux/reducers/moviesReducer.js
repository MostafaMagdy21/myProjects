import { ALLMOVIES } from "../types/moviesTypes";

const initState = { allMovies: [], pageCount: 0 };
export const movieReducer = (state = initState, action) => {
	switch (action.type) {
		case ALLMOVIES:
			return { allMovies: action.data, pageCount: action.pages };
		default:
			return state;
	}
};
