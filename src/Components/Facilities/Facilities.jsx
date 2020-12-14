import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Facilities.scss';

import fac1 from '../../Assets/Images/Facilities/fac1.png';
import fac2 from '../../Assets/Images/Facilities/fac2.png';
import fac3 from '../../Assets/Images/Facilities/fac3.png';
import fac4 from '../../Assets/Images/Facilities/fac4.png';

export default class Facilities extends Component {
	render() {
		return (
			<Container className="Facilities">
				<h1 className="Facilities__Title">Our facilities</h1>
				<Row className="Facilities__Row">
					<Col className="Facilities__Item" xs={6} lg={3}>
						<img src={fac1} alt="" />
						<div className="Facilities__Text">
							<h1 className="Facilities__Header">20</h1>
							<p className="Facilities__P">Training Types</p>
						</div>
					</Col>
					<Col className="Facilities__Item" xs={6} lg={3}>
						<img src={fac2} alt="" />
						<div className="Facilities__Text">
							<h1 className="Facilities__Header">6</h1>
							<p className="Facilities__P">Driving modules</p>
						</div>
					</Col>
					<Col className="Facilities__Item" xs={6} lg={3}>
						<img className="Facilities__Item--TopAlign" src={fac3} alt="" />
						<div className="Facilities__Text Facilities__Text--Edited">
							<h1 className="Facilities__Header">1614 <span style={{textTransform: "none"}}>m</span>&#xb2; </h1>
							<p className="Facilities__P">Event  area</p>
						</div>
					</Col>
					<Col className="Facilities__Item" xs={6} lg={3}>
						<img src={fac4} alt="" />
						<div className="Facilities__Text Facilities__Text--Edited">
							<h1 className="Facilities__Header">15</h1>
							<p className="Facilities__P">Professional trainers</p>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}
