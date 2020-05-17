import React from 'react'
import { Container } from '../../style/styles'
import styled from 'styled-components'
import { withRouter } from "react-router";
import Card from '../../shared/Card'

const Section = styled.section`
  padding: 100px 0;
  background-color: ${props => props.theme.secondary};
`
const RestaurantsList = styled.section`
  display: flex;
  flex-wrap: wrap;
`
class Search extends React.Component {
  constructor (props) {
    const { match } = props;
    super(props)
    this.state = { restaurants: [], isLoaded: false, city: match.params.city }
  }

  getRestaurants(search) {
    const headers = new Headers()
    headers.set('user-key', '77576b2dae845bf32c1de0795a7753e1')

    return fetch(
      `https://developers.zomato.com/api/v2.1/search?city_id=${search}`,
      { headers: headers })
  }

  buildRestaurantCard({ name, id, location: { address } }) {
    return(<Card name={name} description={address} path="/" key={id} />);
  }

  componentDidMount () {
    this.getRestaurants(this.state.city).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            restaurants: result.restaurants.map(({restaurant}) => this.buildRestaurantCard(restaurant))
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        },
      )
  }

  render () {
    return (
      <Section>
        <Container>

          <h1>Results For: </h1>
          <RestaurantsList>
            {this.state.restaurants}
          </RestaurantsList>
        </Container>
      </Section>
    )
  }
}

export default withRouter(Search)