import React from 'react'
import { Card } from 'react-bootstrap'

const MediaCard = ({ value, index }) => {
	return (
		<div>
			<Card style={{ width: '18rem' }} key={index}>
				<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${value.poster_path}`} className="" />
			</Card>
		</div>
	)
}

export default MediaCard
