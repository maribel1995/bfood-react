import React from 'react';
import styled from 'styled-components'

const Input = styled.input`
    border: none;
    font-size: 2rem;
    padding: 15px 14px;
    width: 650px;
    border-radius: 35px;
    padding-left: 44px;
`
const SearchComponent = styled.div`
  position: relative;
`
const CitiesList = styled.ul`
  position: absolute;
  top: 50px;
  width: calc(100% - 70px);
  list-style: none;
  background-color: #f5f5f5;
  padding: 0;
  margin-left: 35px;
`
const CitiesListItem = styled.ul`
  color: #000;
  font-size: 2rem;
  padding: 15px 10px;
`
const SearchInput = styled(Input)`
  margin-bottom: 2rem
`

export default class SearchWidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '', items: [], isLoaded: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
    const headers = new Headers();
    headers.set('user-key', '77576b2dae845bf32c1de0795a7753e1')

    fetch(`https://developers.zomato.com/api/v2.1/cities?q=${this.state.search}`, { headers: headers})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.location_suggestions.map(city => <CitiesListItem key={city.id}>{city.name}</CitiesListItem>)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render () {
    return (
      <SearchComponent>
        <SearchInput value={this.state.search} onChange={this.handleChange} />
        <CitiesList className="cities">
          {this.state.items}
        </CitiesList>
      </SearchComponent>
    )
  }
}