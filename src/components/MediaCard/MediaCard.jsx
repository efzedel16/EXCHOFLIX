import React from 'react'
import { Card } from 'react-bootstrap'

const MediaCard = ({ value, index }) => {
	return (
		<div>
			<Card style={{ width: '18rem' }} key={index}>
				<Card.Img variant="top" src={value.poster_path} />
			</Card>
		</div>
	)
}

export default MediaCard
