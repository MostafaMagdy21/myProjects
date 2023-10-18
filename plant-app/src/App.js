import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./component/footer/Footer";
import Router from "./globalFiles/routing";

function App() {
	const img1 = require("./imges/jazmin-quaynor-8ioenvmof-I-unsplash (1) 1.png"),
		img2 = require("./imges/galina-n-miziNqvJx5M-unsplash 2 (2).png"),
		img3 = require("./imges/stephanie-harvey-vHkj3fX9wCk-unsplash 2 (1).png");

	const [items, setItems] = useState([
		{ id: 1, imge: img1 },
		{ id: 2, imge: img2 },
		{ id: 3, imge: img3 },
		{ id: 4, imge: img1 },
		{ id: 5, imge: img2 },
		{ id: 6, imge: img3 },
		{ id: 7, imge: img1 },
		{ id: 8, imge: img2 },
		{ id: 9, imge: img3 },
	]);

	const getPostId = (postId) => {
		const post = items.filter((post) => post.id == postId);
		if (post.length) {
			return post[0];
		} else {
			return "no posts ";
		}
	};
	return (
		<BrowserRouter>
			<div className="App">
				<Router items={items} getPostId={getPostId} />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
