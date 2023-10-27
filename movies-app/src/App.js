import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesListComponent from "./components/movieComponent/MoviesListComponent";
import FooterComponent from "./components/footerComponent/FooterComponent";
import FilmInfo from "./components/filmInfo/FilmInfo";
import Routing from "./global/Routing";

function App() {
	return (
		<BrowserRouter>
			<div className="App" dir="rtl" lang="ar">
				{/* <Routes>
					<Route path="/" element={<MoviesListComponent />} />
					<Route path="/movie/:id" element={<FilmInfo />} />
				</Routes> */}
				<Routing />
				<FooterComponent />
			</div>
		</BrowserRouter>
	);
}

export default App;
