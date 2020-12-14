import React, { Component } from 'react';
//import { Row, Col } from 'react-bootstrap';

import { Navbar, Nav } from 'react-bootstrap';

import logo from '../../Assets/Images/Header/logo.png';
import aboutUs from '../../Assets/Images/Header/aboutus.png';
import trainingCircuit from '../../Assets/Images/Header/trainingcircuit.png';
import events from '../../Assets/Images/Header/events.png';
import news from '../../Assets/Images/Header/news.png';
import trainings from '../../Assets/Images/Header/trainings.png';
import gallery from '../../Assets/Images/Header/gallery.png';
import contact from '../../Assets/Images/Header/contact.png';
import jobs from '../../Assets/Images/Header/jobs.png';
//import booking from '../../Assets/Images/Header/booking.png';
//import user from '../../Assets/Images/Header/user.png';

import './Header.scss';

export default class Header extends Component {
	render() {
		return (
			<Navbar className="Header" expand="lg">
				<div className="Header__logo">
					<Navbar.Brand href="/#">
						<img className="Header__logoImage" src={logo} alt="" />
					</Navbar.Brand>
				</div>
				<div className="Header__nav">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link className="Header__link" href="/#">
								<div>
									<img className="" src={aboutUs} alt="" />
								</div>
								About Us
							</Nav.Link>
							<Nav.Link className="Header__link" href="/#">
								<div>
									<img className="" src={trainingCircuit} alt="" />
								</div>
								Training circuit
							</Nav.Link>
							<Nav.Link className="Header__link" href="/#">
								<div>
									<img className="" src={events} alt="" />
								</div>
								Events
							</Nav.Link>
							<Nav.Link className="Header__link" href="/#">
								<div>
									<img className="" src={news} alt="" />
								</div>
								News
							</Nav.Link>
							<Nav.Link className="Header__link" href="/#">
								<div>
									<img className="" src={trainings} alt="" />
								</div>
								Trainings
							</Nav.Link>
							<Nav.Link className="Header__link" href="/#">
								<div>
									<img className="" src={gallery} alt="" />
								</div>
								Gallery
							</Nav.Link>
							<Nav.Link className="Header__link" href="/#">
								<div>
									<img className="" src={contact} alt="" />
								</div>
								Contact
							</Nav.Link>
							<Nav.Link className="Header__link" href="/#">
								<div>
									<img className="" src={jobs} alt="" />
								</div>
								Jobs
							</Nav.Link>
							<div className="Header__RedList">
								<Nav.Link className="Header__link Header__RedLink" href="/#">
									<button>Booking</button>
								</Nav.Link>
								<Nav.Link className="Header__link Header__RedLink Header__UserBtn" href="/#">
									<button></button>
								</Nav.Link>
								<Nav.Link className="Header__link Header__RedLink Header__HuBtn" href="/#">
									<button></button>
								</Nav.Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		);
	}
}
