import { Container, Row } from "react-bootstrap";

export const NavComponent = ({ filterByCategory, items }) => {
	const arrBTN = ["الكل", ...new Set(items.map((btnItem) => btnItem.category))];
	return (
		<Container>
			<Row className="text-center mb-5">
				<div className="title my-5 ">قائمة الطعام</div>
				<div className="nav justify-content-center">
					{arrBTN.map((item) => (
						<button
							onClick={() => filterByCategory(item)}
							className="nav-btn mx-2 px-2"
							key={item.length}
						>
							{item}
						</button>
					))}
				</div>
			</Row>
		</Container>
	);
};

export default NavComponent;
