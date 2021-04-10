import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const HomePageSearch = () => {
	return (
		<Jumbotron>
			<h2>Welcome.</h2>
			<h3>
				Enjoy exclusive Exchoflix as well as popular movies and TV shows. Join now for USD 5.99 per month.
				Cancel anytime.
			</h3>
			<Button variant="primary" className="mt-4">
				Start your free trial
			</Button>
		</Jumbotron>
	)
}

export default HomePageSearch
