import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

import TrainingsDesktop from './TrainingsDesktop/TrainingsDesktop';

import './Trainings.scss';

export default class Trainings extends Component {
	state = {
		windowWidth: window.innerWidth
	};

	render() {
		if (this.state.windowWidth < 769) {
			return (
				<div className="Trainings">
					<div className="Trainings--Dotter">
						<h1 className="Trainings__Title">Trainings</h1>
						<Container className="Trainings__Container">
							<Row>
								<Carousel showArrows={true} className="Trainings__CarouselRoot">
									<Col className="Trainings__Item">
										<Col className="Trainings__ItemHeader">
											<div className="Trainings__Number">1</div>
											<div className="Trainings__ItemTitle">INDIVIDUAL DRIVER PROGRAMS</div>
										</Col>
										<Col className="Trainings__ListArea">
											<ol className="Trainings__List">
												<li className="Trainings__ListItem">Safety car training</li>
												<li className="Trainings__ListItem">Start training</li>
												<li className="Trainings__ListItem">Winter prep training</li>
												<li className="Trainings__ListItem">Eco drive training</li>
												<li className="Trainings__ListItem">Camper van and caravan training</li>
												<li className="Trainings__ListItem">Mercedes-benz training</li>
												<li className="Trainings__ListItem">
													Highway first-aid tuition Traffic law
												</li>
											</ol>
										</Col>
										<Col className="Trainings__Btns">
											<Button className="Trainings__Btn">More</Button>
											<Button className="Trainings__Btn">Book Now</Button>
										</Col>
									</Col>
									<Col className="Trainings__Item">
										<Col className="Trainings__ItemHeader">
											<div className="Trainings__Number">2</div>
											<div className="Trainings__ItemTitle">Special training programs</div>
										</Col>
										<Col className="Trainings__ListArea">
											<ol className="Trainings__List">
												<li className="Trainings__ListItem">Safety car training</li>
												<li className="Trainings__ListItem">Start training</li>
												<li className="Trainings__ListItem">Winter prep training</li>
												<li className="Trainings__ListItem">Eco drive training</li>
												<li className="Trainings__ListItem">Camper van and caravan training</li>
												<li className="Trainings__ListItem">Mercedes-benz training</li>
												<li className="Trainings__ListItem">
													Highway first-aid tuition Traffic law
												</li>
											</ol>
										</Col>
										<Col className="Trainings__Btns">
											<button className="Trainings__Btn">More</button>
											<button className="Trainings__Btn">Book Now</button>
										</Col>
									</Col>
									<Col className="Trainings__Item">
										<Col className="Trainings__ItemHeader">
											<div className="Trainings__Number">3</div>
											<div className="Trainings__ItemTitle">OFF ROAD TRAININGS</div>
										</Col>
										<Col className="Trainings__ListArea">
											<ol className="Trainings__List">
												<li className="Trainings__ListItem">Safety car training</li>
												<li className="Trainings__ListItem">Start training</li>
												<li className="Trainings__ListItem">Winter prep training</li>
												<li className="Trainings__ListItem">Eco drive training</li>
												<li className="Trainings__ListItem">Camper van and caravan training</li>
												<li className="Trainings__ListItem">Mercedes-benz training</li>
												<li className="Trainings__ListItem">
													Highway first-aid tuition Traffic law
												</li>
											</ol>
										</Col>
										<Col className="Trainings__Btns">
											<button className="Trainings__Btn">More</button>
											<button className="Trainings__Btn">Book Now</button>
										</Col>
									</Col>
									<Col className="Trainings__Item">
										<Col className="Trainings__ItemHeader">
											<div className="Trainings__Number">4</div>
											<div className="Trainings__ItemTitle">MOTORCYCLE TRAININGS</div>
										</Col>
										<Col className="Trainings__ListArea">
											<ol className="Trainings__List">
												<li className="Trainings__ListItem">Safety car training</li>
												<li className="Trainings__ListItem">Start training</li>
												<li className="Trainings__ListItem">Winter prep training</li>
												<li className="Trainings__ListItem">Eco drive training</li>
												<li className="Trainings__ListItem">Camper van and caravan training</li>
												<li className="Trainings__ListItem">Mercedes-benz training</li>
												<li className="Trainings__ListItem">
													Highway first-aid tuition Traffic law
												</li>
											</ol>
										</Col>
										<Col className="Trainings__Btns">
											<button className="Trainings__Btn">More</button>
											<button className="Trainings__Btn">Book Now</button>
										</Col>
									</Col>
									<Col className="Trainings__Item">
										<Col className="Trainings__ItemHeader">
											<div className="Trainings__Number">5</div>
											<div className="Trainings__ItemTitle">Additional TRAININGS</div>
										</Col>
										<Col className="Trainings__ListArea">
											<ol className="Trainings__List">
												<li className="Trainings__ListItem">Safety car training</li>
												<li className="Trainings__ListItem">Start training</li>
												<li className="Trainings__ListItem">Winter prep training</li>
												<li className="Trainings__ListItem">Eco drive training</li>
												<li className="Trainings__ListItem">Camper van and caravan training</li>
												<li className="Trainings__ListItem">Mercedes-benz training</li>
												<li className="Trainings__ListItem">
													Highway first-aid tuition Traffic law
												</li>
											</ol>
										</Col>
										<Col className="Trainings__Btns">
											<button className="Trainings__Btn">More</button>
											<button className="Trainings__Btn">Book Now</button>
										</Col>
									</Col>
								</Carousel>
							</Row>
						</Container>
					</div>
				</div>
			);
		} else {
			return (
				<TrainingsDesktop />
			);
		}
	}
}
