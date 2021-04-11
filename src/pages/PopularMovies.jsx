import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import contentAction from '../redux/actions/contentAction'
import MediaCard from '../components/MediaCard/MediaCard'

const PopularMovies = () => {
	const dispatch = useDispatch()
	const content = useSelector((state) => state.popularMovies)

	useEffect(() => {
		dispatch(contentAction.setPopularMovies())
	}, [dispatch])

	return (
		<Container className="popularMoviesContainer">
			{content.map((value, index) => {
				return <MediaCard value={value} key={index} />
			})}
		</Container>
	)
}

export default PopularMovies
