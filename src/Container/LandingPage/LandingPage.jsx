import React, { Component } from 'react';

import Header from '../../Components/Header/Header';
import Carousel from '../../Components/Carousel/Carousel';
import Facilities from '../../Components/Facilities/Facilities';
import News from '../../Components/News/News';
import Trainings from '../../Components/Trainings/Trainings';
import GuestBook from '../../Components/GuestBook/GuestBook';
import Partners from '../../Components/Partners/Partners';
import Footer from '../../Components/Footer/Footer';

export default class LandingPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<Carousel />
				<Facilities />
				<News />
				<Trainings />
				<GuestBook />
				<Partners />
				<Footer />
			</div>
		);
	}
}
