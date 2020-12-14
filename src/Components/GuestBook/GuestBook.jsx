import React, { Component } from 'react';
import { Container, Row, Button } from 'react-bootstrap';

import './GuestBook.scss';

export default class GuestBook extends Component {
	render() {
		return (
			<Container className="GuestBook">
				<Row>
					<h1 className="GuestBook__Title">GuestBook</h1>
				</Row>
				<Row className="GuestBook__TextRow">
					<p className="GuestBook__P">
						We really enjoyed our stay. It was back then a few years ago and now I stumbled upon your
						website by accident. Brought back some good memories so I thought I leave a guestbook comment,
						my first ever. Hope you don't mind. I'm going to write about my experiences on one of my blogs.
					</p>
					<p className="GuestBook__Author">
						<span className="GuestBook__Author--Bold">- Simon Peterson</span> / General
					</p>
				</Row>
				<Row className="GuestBook__ButtonRow">
					<Button className="GuestBook__Button">write review</Button>
				</Row>
			</Container>
		);
	}
}
