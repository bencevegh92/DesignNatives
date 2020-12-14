import React, { Component } from 'react';
import ReactCarousel from 'react-multi-carousel';
import { Col } from 'react-bootstrap';

import 'react-multi-carousel/lib/styles.css';
import './Carousel.scss';

import carousel1 from '../../Assets/Images/Carousel/carousel1.png';
import carousel2 from '../../Assets/Images/Carousel/carousel2.png';
import carousel3 from '../../Assets/Images/Carousel/carousel3.png';

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

export default class Carousel extends Component {
	render() {
		return (
			<div className="Carousel">
				<div className="Carousel--Dotter">
					<div className="Carousel__Wrapper">
						<h1 className="Carousel__Title">SAFETY CAN BE LEARNED!</h1>
						<p className="Carousel__P">
							Accident statistics have shown that even the most experienced of drivers have to become
							familiar with extreme traffic situations and have to learn to apply the rules of proper
							conduct in a routine.
						</p>
						<div className="Carousel__PosWrap">
							<ReactCarousel
								swipeable={true}
								draggable={false}
								responsive={responsive}
								containerClass="carousel-container"
								deviceType={this.props.deviceType}
								className="Carousel__ReactCarousel"
							>
								<Col className="Carousel__Item" xs={12}>
									<div className="Carousel__ItemBackground">
										<div className="Carousel__Buttons">
											<img src={carousel1} alt="" />
											<img className="Carousel__PlayBtn" alt="" />
										</div>
									</div>
									Drivingcamp experience
								</Col>
								<Col className="Carousel__Item" xs={12}>
									<div className="Carousel__ItemBackground">
										<div className="Carousel__Buttons">
											<img src={carousel2} alt="" />
											<img className="Carousel__PlayBtn" alt="" />
										</div>
									</div>
									Drivingcamp experience
								</Col>
								<Col className="Carousel__Item" xs={12}>
									<div className="Carousel__ItemBackground">
										<div className="Carousel__Buttons">
											<img src={carousel3} alt="" />
											<img className="Carousel__PlayBtn" alt="" />
										</div>
									</div>
									Drivingcamp experience
								</Col>
								<Col className="Carousel__Item" xs={12}>
									<div className="Carousel__ItemBackground">
										<div className="Carousel__Buttons">
											<img src={carousel1} alt="" />
											<img className="Carousel__PlayBtn" alt="" />
										</div>
									</div>
									Drivingcamp experience
								</Col>
								<Col className="Carousel__Item" xs={12}>
									<div className="Carousel__ItemBackground">
										<div className="Carousel__Buttons">
											<img src={carousel2} alt="" />
											<img className="Carousel__PlayBtn" alt="" />
										</div>
									</div>
									Drivingcamp experience
								</Col>
								<Col className="Carousel__Item" xs={12}>
									<div className="Carousel__ItemBackground">
										<div className="Carousel__Buttons">
											<img src={carousel3} alt="" />
											<img className="Carousel__PlayBtn" alt="" />
										</div>
									</div>
									Drivingcamp experience
								</Col>
							</ReactCarousel>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
