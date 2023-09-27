import { useState } from "react";
import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";

export const Header = ({ searchBar }) => {
	const [searchByTitle, setSearchByTitle] = useState("");
	return (
		<Row className="m-0">
			<Navbar expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#" className="brand-color">
						قائمة الطعام
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						></Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="ابحث عن اسم الوجبة"
								className="me-2"
								aria-label="Search"
								value={searchByTitle}
								onChange={(e) => setSearchByTitle(e.target.value)}
							/>
							<button
								className="mx-2 btn"
								onClick={() => searchBar(searchByTitle)}
							>
								بحث
							</button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Row>
	);
};
export default Header;
