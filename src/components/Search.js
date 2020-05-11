import React from 'react';
import { Container } from '../styles'
import styled from 'styled-components'

const Section = styled.section`
  padding: 100px 0;
`

function Search() {
  return (
    <Container>
      <Section>
        <h1>Search</h1>
      </Section>
    </Container>
  );
}

export default Search;
