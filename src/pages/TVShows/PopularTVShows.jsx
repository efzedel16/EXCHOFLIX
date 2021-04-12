import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import contentAction from '../../redux/actions/contentAction'
import MediaCard from '../../components/MediaCard/MediaCard'

const PopularTVShows = () => {
    const dispatch = useDispatch(),
        content = useSelector((state) => state.popularTVShows)

    console.log(content)

    useEffect(() => {
        dispatch(contentAction.setPopularTVShows())
    }, [dispatch])

    return (
        <Container className="popularTVShowsContainer">
            {content.map((value, index) => {
                return <MediaCard value={value} key={index} />
            })}
        </Container>
    )
}

export default PopularTVShows;
