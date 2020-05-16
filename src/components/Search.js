import React from 'react'
import { Container } from '../styles/styles'
import styled from 'styled-components'

const Section = styled.section`
  padding: 100px 0;
`

export default class Search extends React.Component {
  render () {
    return (
      <Container>
        <Section>
          <h1>Search</h1>
        </Section>
      </Container>
    )
  }
}