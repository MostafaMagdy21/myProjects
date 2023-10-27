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

	return (
		<BrowserRouter>
			<div className="App" dir="rtl" lang="ar">
				<Routes>
					<Route
						path="/"
						element={
							<MoviesListComponent
								getPagesNumberFromApi={getPagesNumberFromApi}
								pageCount={pageCount}
							/>
						}
					/>
					<Route path="/movie/:id" element={<FilmInfo />} />
				</Routes>
				<FooterComponent />
			</div>
		</BrowserRouter>
	);
}

export default App;
