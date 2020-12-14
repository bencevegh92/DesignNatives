import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactCarousel from 'react-multi-carousel';

import Events from './Events/Events';

import './News.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1024, min: 425 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 425, min: 0 },
		items: 1
	}
};

export default class News extends Component {
	render() {
		return (
			<div className="News">
				<div className="News__Background">
					<Container>
						<Row className="News__QueryColumn">
							<Col className="Col__fix">
								<h1 className="News__Title">News</h1>
								<div className="News__Column">
									<ReactCarousel
										swipeable={true}
										draggable={false}
										showDots={true}
										responsive={responsive}
										removeArrowOnDeviceType={[ 'tablet', 'mobile' ]}
										containerClass="carousel-container"
										deviceType={this.props.deviceType}
										className="Carousel__ReactCarousel"
									>
										<Col className="News__Col" md={12}>
											<Col className="News__HiddenCol">
												<div className="News__Wrapper">
													<div className="News__Time">
														<p className="News__P">6 May 2015</p>
													</div>
													<div>
														EASTER PACKAGES <br /> @DRIVINGCAMP
													</div>
													<button classname="News__Button">More</button>
												</div>
											</Col>
										</Col>
										<Col className="News__Col" md={12}>
											<Col className="News__HiddenCol">
												<div className="News__Wrapper">
													<div className="News__Time">
														<p className="News__P">12 May 2015</p>
													</div>
													<div>
														Private training <br />Dates in 2015
													</div>
													<button classname="News__Button">More</button>
												</div>
											</Col>
										</Col>
									</ReactCarousel>
								</div>
							</Col>
							<Col className="Col__fix">
								<Events />
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}
