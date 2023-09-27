import { Card, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";

export const CardComponent = ({ items }) => {
	return (
		<Container className="mb-5">
			<Row>
				{items.length ? (
					items.map((item) => {
						return (
							<Zoom key={item.id}>
								<Card
									className="mb-3 d-flex flex-row p-0"
									style={{ borderColor: "#b45b43" }}
								>
									<Card.Img variant="top" src={item.img} className="post-img" />
									<Card.Body>
										<Card.Title className="d-flex justify-content-between">
											{item.title}
											<p className="brand-color">{item.price}</p>
										</Card.Title>
										<Card.Text>{item.discription}</Card.Text>
									</Card.Body>
								</Card>
							</Zoom>
						);
					})
				) : (
					<h2>لا يوجد اصناف الان</h2>
				)}
			</Row>
		</Container>
	);
};

export default CardComponent;
