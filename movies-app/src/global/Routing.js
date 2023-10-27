import ErrorPage from "../components/errorPage/ErrorPage";
import FilmInfo from "../components/filmInfo/FilmInfo";
import MoviesListComponent from "../components/movieComponent/MoviesListComponent";
import { Route, Routes } from "react-router-dom";

// routing

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<MoviesListComponent />} />
			<Route path="/movie/:id" element={<FilmInfo />} />
		</Routes>
	);
};

export default Routing;
