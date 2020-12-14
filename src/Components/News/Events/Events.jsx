import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Events.scss';

export default class Events extends Component {
	render() {
		return (
			<div className="Events">
				<h1 className="Events__Title">Events</h1>
				<Col>
					<Row className="Events__Row">
						<Col xs={3} lg="2" className="Events__Date">
							<h2 className="Events__DateTitle">08</h2>
							<p className="Events__DateP">Jun</p>
						</Col>
						<Col className="Events__Text">
							<p className="Events__TextP">SUZUKI LAUNCHED THE NEW VITARA</p>
							<p className="Events__TextP">@ DRIVINGCAMP</p>
						</Col>
					</Row>
					<Row className="Events__Row">
						<Col xs={3} lg="2" className="Events__Date">
							<h2 className="Events__DateTitle">24</h2>
							<p className="Events__DateP">Mar</p>
						</Col>
						<Col className="Events__Text">
							<p className="Events__TextP">MERCEDES-BENZ ROMANIA ENJOYS THE VIP DRIVING EVENT PROGRAM</p>
							<p className="Events__TextP">@ DR</p>
						</Col>
					</Row>
					<Row className="Events__Row">
						<Col xs={3} lg="2" className="Events__Date">
							<h2 className="Events__DateTitle">16</h2>
							<p className="Events__DateP">Feb</p>
						</Col>
						<Col className="Events__Text">
							<p className="Events__TextP">SUZUKI LAUNCHED THE NEW VITARA</p>
							<p className="Events__TextP">@ DRIVINGCAMP</p>
						</Col>
					</Row>
				</Col>
			</div>
		);
	}
}
