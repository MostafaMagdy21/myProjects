import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MoviesListComponent from "./components/movieComponent/MoviesListComponent";
import FooterComponent from "./components/footerComponent/FooterComponent";
import FilmInfo from "./components/filmInfo/FilmInfo";

function App() {
	const [pageCount, setPageCount] = useState(0);
	const [data, setData] = useState([]);

	// get pages from api
	const getPagesNumberFromApi = async (numOfPages) => {
		// fetching data from api
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=24aa4a429a94e476299d3bab7767e47d&include_adult=false&include_video=false&language=ar&page=${numOfPages}`
			);
			if (res) {
				setData(res.data.results);
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
					`https://api.themoviedb.org/3/search/movie?api_key=24aa4a429a94e476299d3bab7767e47d&query=${inputSearch}&include_adult=false&language=en-US&page=1`
				);
				setData(searchingData.data.results);
			}
			// } else {
			// 	fetchingData();
			// }
		} catch (e) {
			console.log(e);
			throw new Error(e);
		}
	};

	return (
		<BrowserRouter>
			<div className="App" dir="rtl" lang="ar">
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
				</Routes>
				<FooterComponent />
			</div>
		</BrowserRouter>
	);
}

export default App;
