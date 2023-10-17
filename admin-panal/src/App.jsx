import { BrowserRouter } from "react-router-dom";
import "./App.scss";

import { Router } from "./globalFiles/routing";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
}

export default App;
