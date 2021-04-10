import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row } from 'react-bootstrap'

import contentAction from '../../redux/actions/contentAction'
import MediaCard from '../MediaCard/MediaCard'
import ScrollingContainer from '../styles/ScrollingContainer'

const Trending = () => {
	const dispatch = useDispatch()
	const content = useSelector((state) => state.content)

	console.log(content)

	useEffect(() => {
		dispatch(contentAction.setTrending())
	}, [dispatch])

	return (
		<Container>
			{content.map((value, index) => {
				return <MediaCard value={value} key={index} />
			})}
		</Container>
	)
}

export default Trending
