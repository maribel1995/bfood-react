import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = styled.ul`
  width: 40%;
`
const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  
`

export default class NavComponent extends React.Component {
  render () {
    return (
      <Nav>
        <NavList>
          <li>
            <NavItem to="/">Home</NavItem>
          </li>
          <li>
            <NavItem to="/search">Search</NavItem>
          </li>
          <li>
            <NavItem to="/promo">Promo</NavItem>
          </li>
          <li>
            <NavItem to="/about">About</NavItem>
          </li>
          <li>
            <NavItem to="/contact">Contact</NavItem>
          </li>
        </NavList>
      </Nav>
    )
  }
}
