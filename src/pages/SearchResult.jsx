import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Nav, Container, Row, Col } from 'react-bootstrap'

import contentAction from '../redux/actions/contentAction'
import MovieTV from '../components/SearchResultCard/MovieTV'
import People from '../components/SearchResultCard/People'

const SearchResult = () => {
	const dispatch = useDispatch()
	const searchResult = useSelector((state) => state.searchResult)

	console.log(searchResult)

	useEffect(() => {
		dispatch(contentAction.setSearchResult())
	}, [dispatch])

	return (
		<Container>
			<Row>
				<Col sm={2}>
					<Nav variant="pills" defaultActiveKey="/home" className="flex-column">
						<Nav.Item>
							<Nav.Link href="/home">Movie</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-1">TV</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-2">People</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>

				<Col>
					{searchResult &&
						searchResult.map((value, index) => {
							return value.media_type === 'movie' || value.media_type === 'tv' ? (
								<MovieTV value={value} index={index} />
							) : (
								<People value={value} index={index} />
							)
						})}
				</Col>
			</Row>
		</Container>
	)
}

export default SearchResult
