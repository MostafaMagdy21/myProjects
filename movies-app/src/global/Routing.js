// import ErrorPage from "../components/errorPage/ErrorPage";
import FilmInfo from "../components/filmInfo/FilmInfo";
import MoviesListComponent from "../components/movieComponent/MoviesListComponent";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

// export const Routing = [
// 	{
// 		path: "/",
// 		element: <MoviesListComponent />,
// 		errorElement: <ErrorPage />,
// 	},
// 	{
// 		path: "/movie/:id",
// 		element: <FilmInfo />,
// 		errorElement: <ErrorPage />,
// 	},
// ];

// routing
export const Routing = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<MoviesListComponent />} />
			<Route path="/movie/:id" element={<FilmInfo />} />
		</Route>
	)
);

export default Routing;
