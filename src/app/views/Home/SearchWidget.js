import React from 'react'
import styled from 'styled-components'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonSecondary } from '../../style/styles'
import { getCities } from '../../repository'

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
const CitiesListItem = styled.li`
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

export default class extends React.Component {
  constructor (props) {
    window.scrollTo(0, 0);
    super(props)
    this.state = { search: '', items: [], isLoaded: false, selected: 0, controller: null }

    this.listCities = this.listCities.bind(this)
    this.selectItem = this.selectItem.bind(this)
    this.getResults = this.getResults.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

  selectItem ({ name, id }) {
    this.setState({ selected: id, search: name })
  }

  listCities (event) {
    this.setState({ search: event.target.value })

    if (this.state.controller) {
      this.state.controller.abort();
    }

    const controller = new AbortController();
    this.setState({ controller: controller });

    getCities(this.state.search, controller.signal).then(res => res.json())
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

  clearInput() {
    this.setState({ search: '', isLoaded: false, selected: 0 })
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
          <SearchInput value={this.state.search} onChange={this.listCities}
                       onClick={this.clearInput}
                       placeholder="Ex. São Paulo" className="cities-input"
                       aria-label="Buscar restaurantes por Cidade"
          />
          {this.getResults()}
        </InputField>
        <ButtonSecondary
          to={{ pathname: `/search/${this.state.selected}` }}>Search</ButtonSecondary>
      </SearchComponent>
    )
  }
}