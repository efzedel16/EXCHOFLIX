import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import contentAction from '../../redux/actions/contentAction'
import MediaCard from '../../components/MediaCard/MediaCard'

const OnTheAirTVShows = () => {
    const dispatch = useDispatch(),
        content = useSelector((state) => state.onTheAirTVShows)

    console.log(content)

    useEffect(() => {
        dispatch(contentAction.setOnTheAirTVShows())
    }, [dispatch])

    return (
        <Container className="onTheAirTVShowsContainer">
            {content.map((value, index) => {
                return <MediaCard value={value} key={index} />
            })}
        </Container>
    )
}

export default OnTheAirTVShows;
