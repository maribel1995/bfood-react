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

export default class NavComponent extends React.Component {
  render () {
    return (
      <Nav>
        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/promo">Promo</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </NavList>
      </Nav>
    )
  }
}
