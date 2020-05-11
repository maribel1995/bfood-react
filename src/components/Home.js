import React from 'react';
import styled from 'styled-components'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '../styles'

const Section = styled.section`
  padding: 100px 0;
`
const SectionPromotional = styled(Section)`
  background-color: #222323;
  color: #fff;
`
const SectionPromotionalSecondary = styled(Section)`
  background-color: #f6efdf;
`
const SectionSearch = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f74c3c;
  color: #fff;
`
const SectionPackages = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6efdf;
`
const PackageList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const PackageCard = styled.li`
  background-color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 4rem;
`

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <SectionPromotional>
          <Container>
            <h2>Get Cashback up to 50%</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              consectur justo eu nunc consequat.</h3>
            <button>Order Now</button>
          </Container>
        </SectionPromotional>
        <SectionPromotionalSecondary>
          <Container>
            <h2>Big Burger</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur, adispicing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.</h3>
            <button>Order Now</button>
          </Container>
        </SectionPromotionalSecondary>
        <SectionSearch>
          <Container>
            <h2>Search the Best Burguers</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur, adispicing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.</h3>
            <input/>
            <button>Search</button>
          </Container>
        </SectionSearch>
        <SectionPackages>
          <Container>
            <h2>Popular Package</h2>
            <PackageList>
              <PackageCard>
                <h3>Package 1</h3>
                <Icon icon={faHamburger} />
                <span>Price</span>
                <p>Lorem ipsum dolor sit amen, consectetur adispicing elit.</p>
                <button>Order Now</button>
              </PackageCard>
              <PackageCard>
                <h3>Package 2</h3>
                <Icon icon={faHamburger} />
                <span>Price</span>
                <p>Lorem ipsum dolor sit amen, consectetur adispicing elit.</p>
                <button>Order Now</button>
              </PackageCard>
              <PackageCard>
                <h3>Package 3</h3>
                <Icon icon={faHamburger} />
                <span>Price</span>
                <p>Lorem ipsum dolor sit amen, consectetur adispicing elit.</p>
                <button>Order Now</button>
              </PackageCard>
            </PackageList>
          </Container>
        </SectionPackages>
      </div>
    );
  }
}