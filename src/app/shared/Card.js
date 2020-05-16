import React from 'react'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { ButtonPrimary } from '../style/styles'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HamburgerIcon = styled(FontAwesomeIcon)`
  font-size: 6rem;
  margin-bottom: 1rem;
`
const Card = styled.li`
  background-color: #fff;
  padding: 15px 10px;
  width: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  box-sizing: border-box;
`
const Price = styled.span`
  font-size: 2rem;
`

export default class extends React.Component {
  render () {
    return <Card>
      <h3>{ this.props.name }</h3>
      <HamburgerIcon icon={faHamburger}/>
      <Price>{ this.props.price }</Price>
      <p>{ this.props.description }</p>
      <ButtonPrimary to={this.props.path}>Order Now</ButtonPrimary>
    </Card>
  }
}