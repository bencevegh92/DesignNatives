import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Weather.scss';

import weather1 from '../../../Assets/Images/Footer/weather1.png';
import weather2 from '../../../Assets/Images/Footer/weather2.png';
import weather3 from '../../../Assets/Images/Footer/weather3.png';

export default class Weather extends Component {
	render() {
		return (
			<Row className="Weather">
				<Col className="Weather__Col">
					<p className="Weather__Day">wednesday</p>
					<p className="Weather__Type">Clear / Sunny</p>
					<img className="Weather__Image" src={weather1} alt="" />
					<h1 className="Weather__Max">26&#xb0;</h1>
					<h3 className="Weather__Min">14&#xb0;</h3>
				</Col>
				<Col className="Weather__Col">
					<p className="Weather__Day">THURSDAY</p>
					<p className="Weather__Type">Patchy rain nearby</p>
					<img className="Weather__Image" src={weather2} alt="" />
					<h1 className="Weather__Max">24&#xb0;</h1>
					<h3 className="Weather__Min">12&#xb0;</h3>
				</Col>
				<Col className="Weather__Col">
					<p className="Weather__Day">friday</p>
					<p className="Weather__Type">Light rain shower</p>
					<img className="Weather__Image" src={weather3} alt="" />
					<h1 className="Weather__Max">16&#xb0;</h1>
					<h3 className="Weather__Min">11&#xb0;</h3>
				</Col>
				<Col className="Weather__Col">
					<p className="Weather__Day">saturday</p>
					<p className="Weather__Type">Light drizzle</p>
					<img className="Weather__Image" src={weather3} alt="" />
					<h1 className="Weather__Max">14&#xb0;</h1>
					<h3 className="Weather__Min">10&#xb0;</h3>
				</Col>
			</Row>
		);
	}
}
