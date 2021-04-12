import styled from 'styled-components'
import { Container, Card } from 'react-bootstrap'

export const CardContainer = styled(Container)`
	display: flex;
	overflow-x: auto;
`

export const CardImage = styled(Card.Img)`
	width: 154px;
	border-radius: 12px;
`

export const CardTitle = styled(Card.Text)`
	font-size: 0.85rem;
	margin-bottom: 0px;
`

export const CardDate = styled.p`
	font-size: 0.6rem;
`
