import React from 'react'
import { Card } from 'react-bootstrap'

import { CardWrapper, CardImage, CardTitle, CardDate, CardOverview } from '../../styles/jsx/MovieTVCard'

const MovieTV = ({ value, index }) => {
	// const releaseDate = new Date(value.release_date)
	// const formatReleaseDate = releaseDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })
	// console.log(formatReleaseDate)

	const date =
		value.media_type === 'tv' ? (
			<CardDate>
				{new Date(value.first_air_date).toLocaleString('en-US', {
					year: 'numeric',
					month: 'long',
					day: '2-digit'
				})}
			</CardDate>
		) : (
			<CardDate>
				{value.release_date ? (
					new Date(value.release_date).toLocaleString('en-US', {
						year: 'numeric',
						month: 'long',
						day: '2-digit'
					})
				) : (
					<span>TBA</span>
				)}
			</CardDate>
		)

	return (
		<div>
			<CardWrapper key={index}>
				<div className="d-flex align-items-center">
					<CardImage variant="top" src={`https://image.tmdb.org/t/p/w92${value.poster_path}`} />
					<Card.Body className="p-2">
						{value.media_type === 'movie' ? (
							<CardTitle>{value.title}</CardTitle>
						) : (
							<Card.Title>{value.name}</Card.Title>
						)}

						{date}
						<CardOverview>{value.overview}</CardOverview>
					</Card.Body>
				</div>
			</CardWrapper>
		</div>
	)
}

export default MovieTV
