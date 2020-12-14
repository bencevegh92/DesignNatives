import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Partners.scss';

import partner1 from '../../Assets/Images/Partners/partner1.png';
import partner2 from '../../Assets/Images/Partners/partner2.png';
import partner3 from '../../Assets/Images/Partners/partner3.png';
import partner4 from '../../Assets/Images/Partners/partner4.png';

export default class Partners extends Component {
	render() {
		return (
			<div className="Partners">
				<h1 className="Partners__Title">Our Partners</h1>
				<Row className="Partners__Row">
					<Col className="Partners__Item">
						<img className="Partners__Img" src={partner1} alt="" />
					</Col>
					<Col className="Partners__Item">
						<img className="Partners__Img" src={partner2} alt="" />
					</Col>
					<Col className="Partners__Item">
						<img className="Partners__Img" src={partner3} alt="" />
					</Col>
					<Col className="Partners__Item">
						<img className="Partners__Img" src={partner4} alt="" />
					</Col>
				</Row>
			</div>
		);
	}
}
