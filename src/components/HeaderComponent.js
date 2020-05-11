import React from 'react'
import NavComponent from './NavComponent'
import styled from 'styled-components'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '../styles'

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`
const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 `
const Logo = styled(FontAwesomeIcon)`
  font-size: 2rem;
`

export default class HeaderComponent extends React.Component {
  render () {
    return (
        <Header>
          <HeaderContainer>
            <Logo icon={faHamburger} />
            <NavComponent />
          </HeaderContainer>
        </Header>
    )
  }
}