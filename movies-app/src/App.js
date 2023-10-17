import "./App.css";
import FooterComponent from "./components/footerComponent/FooterComponent";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	useParams,
} from "react-router-dom";
// import Routing from "./global/Routing";
import { useEffect, useState } from "react";
import axios from "axios";
import MoviesListComponent from "./components/movieComponent/MoviesListComponent";
import FilmInfo from "./components/filmInfo/FilmInfo";
import ErrorPage from "./components/errorPage/ErrorPage";

function App() {
	// array of all movies
	const [data, setData] = useState([]);
	const [pageCount, setPageCount] = useState(0);

	// fetching data from api
	const fetchingData = async () => {
		// fetching data from api
		try {
			const res = await axios.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=9a8b81bb6c9e7baea26bb66ca8665e77&include_adult=false&include_video=false&language=ar"
			);

			if (res) {
				const allMovies = res.data.results;
				setData(allMovies);
				setPageCount(500);
			} else {
				throw new Error();
			}
		} catch (e) {
			console.log("no data");
		}
	};
	useEffect(() => {
		fetchingData();
	}, []);

	// get pages from api
	const getPagesNumberFromApi = async (numOfPages) => {
		// fetching data from api
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=9a8b81bb6c9e7baea26bb66ca8665e77&include_adult=false&include_video=false&language=ar&page=${numOfPages}`
			);
			if (res) {
				const allMovies = res.data.results;
				setData(allMovies);
			} else {
				throw new Error();
			}
		} catch (e) {
			alert("no internet");
		}
	};

	// searching function
	const fetchForSearch = async (inputSearch) => {
		try {
			if (inputSearch) {
				const searchingData = await axios.get(
					`https://api.themoviedb.org/3/search/movie?api_key=9a8b81bb6c9e7baea26bb66ca8665e77&query=${inputSearch}&include_adult=false&language=en-US&page=1`
				);
				setData(searchingData.data.results);
			} else {
				fetchingData();
			}
		} catch (e) {
			console.log(e);
			throw new Error(e);
		}
	};
	// routing
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
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
					element={<FilmInfo data={data} fetchForSearch={fetchForSearch} />}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Route>
		)
	);
	// const er = useParams();
	// console.log(er);
	return (
		<div className="App" dir="rtl" lang="ar">
			{/* <HeaderComponent fetchForSearch={fetchForSearch} /> */}
			<RouterProvider router={router} />
			<FooterComponent />
		</div>
	);
}

export default App;
