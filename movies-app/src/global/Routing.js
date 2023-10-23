import ErrorPage from "../components/errorPage/ErrorPage";
import FilmInfo from "../components/filmInfo/FilmInfo";
import MoviesListComponent from "../components/movieComponent/MoviesListComponent";
import { Route, Routes } from "react-router-dom";

// routing

export const Routing = ({
	data,
	getPagesNumberFromApi,
	pageCount,
	fetchForSearch,
}) => {
	<Routes>
		<Route
			path="/"
			element={
				<MoviesListComponent
					data={data}
					getPagesNumberFromApi={getPagesNumberFromApi}
					pageCount={pageCount}
					fetchForSearch={fetchForSearch}
				/>
			}
		/>
		<Route
			path="/movie/:id"
			element={<FilmInfo fetchForSearch={fetchForSearch} />}
		/>
		<Route path="*" element={<ErrorPage />} />
	</Routes>;
};

export default Routing;
