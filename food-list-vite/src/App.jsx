import "./App.css";
import Header from "./components/Header";
import NavComponent from "./components/NavComponent";
import CardComponent from "./components/CardComponent";
import { data } from "./data";
import { useState } from "react";

function App() {
	const [items, setItems] = useState(data);

	// filter by title
	const filterByCategory = (cat) => {
		if (cat === "الكل") {
			setItems(data);
		} else {
			const newArr = items.filter((item) => item.category === cat);
			setItems(newArr);
		}
	};

	// search by title
	const searchBar = (title) => {
		// console.log(title, "from search bar");

		// console.log(newArr);
		if (title === "") {
			setItems(data);
		} else {
			const newArr = items.filter((item) => item.title === title);
			setItems(newArr);
		}
	};
	return (
		<div className="app" dir="rtl" lang="ar">
			<Header searchBar={searchBar} />
			<NavComponent items={items} filterByCategory={filterByCategory} />
			<CardComponent items={items} />
		</div>
	);
}

export default App;
