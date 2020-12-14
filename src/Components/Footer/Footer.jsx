import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import Weather from './Weather/Weather';

import './Footer.scss';

import footer1 from '../../Assets/Images/Footer/footer1.png';
import footer2 from '../../Assets/Images/Footer/footer2.png';
import footer3 from '../../Assets/Images/Footer/footer3.png';
import footer4 from '../../Assets/Images/Footer/footer4.png';
import footer5 from '../../Assets/Images/Footer/footer5.png';
import footer6 from '../../Assets/Images/Footer/footer6.png';
import footer7 from '../../Assets/Images/Footer/footer7.png';
import footer8 from '../../Assets/Images/Footer/footer8.png';

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<Row className="Footer__Row">
					<Col className="Footer__ContactsCol">
						<h1 className="Footer__Title">Contacts</h1>
						<Row>
							<Col>
								<div className="Footer__Item">
									<img src={footer1} alt="" />
									<p>1 Drivingcamp út, 2072 Zsámbék, HU</p>
								</div>
								<div className="Footer__Item">
									<img src={footer2} alt="" />
									<p>+36 23 565 530</p>
								</div>
								<div className="Footer__Item">
									<img src={footer3} alt="" />
									<p>
										E-mail, general information:{' '}
										<span className="Footer__Span">office@drivingcamp.hu</span> E-mail, offers and
										events:
										<span className="Footer__Span">sales@drivingcamp.hu</span>
									</p>
								</div>
								<div className="Footer__Item">
									<img src={footer4} alt="" />
									<p>
										<span className="Footer__Span">drivingcamp.hu</span>{' '}
										<span className="Footer__Span">drivingcampexperience.hu</span>
									</p>
								</div>
							</Col>
							<Col>
								<div className="Footer__Item">
									<img src={footer5} alt="" />
									<p>
										Open hours: due to a training / event every day of the week Office hours:
										weekdays 9-17
									</p>
								</div>
								<div className="Footer__Item">
									<img src={footer6} alt="" />
									<p>Subscribe our newsletter!</p>
								</div>
								<div className="Footer__Item">
									<form className="Footer__Form">
										<input className="Footer__Input" placeholder="Name" />
										<input className="Footer__Input" placeholder="Email" />
										<button className="Footer__InputBtn">Subscribe</button>
									</form>
								</div>
							</Col>
						</Row>
					</Col>
					<Col className="Footer__ContactsCol">
						<h1 className="Footer__Title">Weather</h1>
						<Weather />
					</Col>
				</Row>
				<Row className="Footer__LicenseAre">
					<Col className="Footer__Sub">
						<img src={footer7} alt="" />
						<p>Egyedülálló Közlekedésbiztonsági és Vezetéstechnikai Központ létrehozása Zsámbékon</p>
					</Col>
					<Col className="Footer__Sub">
						<p>
							EMKK Első Magyar Zrt. All Rights Reserved. © 2012-2014{' '}
							<span  className="Footer__Span">Legal Notice and Disclaimer</span> / <span  className="Footer__Span">Terms and Conditions</span>
						</p>
					</Col>
					<Col className="Footer__Sub Footer__Sub--Logo">
						<p>Development & Design:</p>
						<img src={footer8} alt="" />
					</Col>
				</Row>
			</div>
		);
	}
}
