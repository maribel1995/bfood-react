import React from 'react'
import NavComponent from './Nav'
import styled from 'styled-components'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '../../style/styles'

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  line-height: 6.25rem;
  background: linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,0));
`
const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 `
const Logo = styled(FontAwesomeIcon)`
  font-size: 3.25rem;
`

export default class extends React.Component {
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
