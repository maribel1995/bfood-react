import React from 'react'
import styled from 'styled-components'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonSecondary } from '../styles/styles'

const Input = styled.input`
  border: none;
  font-size: 2rem;
  padding: 15px 14px;
  width: 650px;
  border-radius: 35px;
  padding-left: 60px;
`
const InputField = styled.div`
  position: relative;
`
const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 2rem;
  color: ${props => props.theme.primary};
  top: calc(66px/2 - 1rem);
  left: 30px;
`
const SearchComponent = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
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
  &:hover {
    background-color: #fCfCfC;
  }
`
const SearchInput = styled(Input)`
  margin-bottom: 2rem
`

export default class SearchWidgetComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { search: '', items: [], isLoaded: false, selected: 0 }
    this.handleChange = this.handleChange.bind(this)
    this.selectItem = this.selectItem.bind(this)
    this.getResults = this.getResults.bind(this)
  }

  handleChange (event) {
    this.setState({ search: event.target.value })

    if (event.target.value.length < 4)
      return

    const headers = new Headers()
    headers.set('user-key', '77576b2dae845bf32c1de0795a7753e1')

    fetch(
      `https://developers.zomato.com/api/v2.1/cities?q=${this.state.search}`,
      { headers: headers })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.location_suggestions.map(
              city => <CitiesListItem key={city.id}
                                      onClick={() => this.selectItem(
                                        city)}>{city.name}</CitiesListItem>),
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

  selectItem ({ name, id }) {
    this.setState({ selected: id, search: name })
  }

  getResults () {
    const selected = this.state.selected
    return (
      selected ? null : <CitiesList
        className="cities">{this.state.items}</CitiesList>
    )
  }

  render () {
    return (
      <SearchComponent>
        <InputField>
          <Icon icon={faMapMarkerAlt}/>
          <SearchInput value={this.state.search} onChange={this.handleChange}
                       placeholder="Ex. São Paulo"/>
          {this.getResults()}
        </InputField>
        <ButtonSecondary
          to={{ pathname: `/search/${this.state.selected}` }}>Search</ButtonSecondary>
      </SearchComponent>
    )
  }
}