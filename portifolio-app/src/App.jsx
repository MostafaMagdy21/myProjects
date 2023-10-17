import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./HomePage/HomePage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<HomePage />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
