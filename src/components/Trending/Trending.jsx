import React from 'react'
import { Container } from 'react-bootstrap'

import HelperAPI from '../../API/HelperAPI'
import MediaCard from '../MediaCard/MediaCard'

const Trending = () => {
	return (
		<Container>
			{HelperAPI.map((value, index) => {
				return <MediaCard value={value} key={index} />
			})}
		</Container>
	)
}

export default Trending
