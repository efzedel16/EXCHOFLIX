import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import contentAction from '../../redux/actions/contentAction'
import MediaCard from '../../components/MediaCard/MediaCard'

const AiringTodayTVShows = () => {
    const dispatch = useDispatch()
    const content = useSelector((state) => state.airingTodayTVShows)

    console.log(content)

    useEffect(() => {
        dispatch(contentAction.setAiringTodayTVShows())
    }, [dispatch])

    return (
        <Container className="airingTodayTVShowsContainer">
            {content.map((value, index) => {
                return <MediaCard value={value} key={index} />
            })}
        </Container>
    )
}

export default AiringTodayTVShows;
