import React from "react";
import "./FooterComponent.scss";
import { Col, Container, Row } from "react-bootstrap";

export const FooterComponent = () => {
	return (
		<div className="footer">
			<Container>
				<Row>
					<Col>contact</Col>
					<Col>list</Col>
					<Col>logo</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FooterComponent;
