import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesListComponent from "./components/movieComponent/MoviesListComponent";
import FooterComponent from "./components/footerComponent/FooterComponent";
import FilmInfo from "./components/filmInfo/FilmInfo";

function App() {
	// searching function

	return (
		<BrowserRouter>
			<div className="App" dir="rtl" lang="ar">
				<Routes>
					<Route path="/" element={<MoviesListComponent />} />
					<Route path="/movie/:id" element={<FilmInfo />} />
				</Routes>
				<FooterComponent />
			</div>
		</BrowserRouter>
	);
}

export default App;
