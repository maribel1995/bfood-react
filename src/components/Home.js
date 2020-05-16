import React from 'react'
import styled from 'styled-components'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonPrimary, Container } from '../styles/styles'
import SearchWidgetComponent from './SearchWidgetComponent'

const Section = styled.section`
  min-height: 800px;
`
const SectionPromotional = styled(Section)`
  min-height: 600px;
  padding: 100px 0;
  color: #fff;
  background-image: url("/home-background.jpg");
  background-position: right;
  background-repeat: no-repeat;
  background-color: rgba(24,20,21,0.99);
`
const PromotionalWrapper = styled.div`
  width: 600px;
  padding: 100px 0;
`
const SectionMainProduct = styled(Section)`
  color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("/food-background1.jpg");
`
const MainProductContainer = styled(Container)`
  display: flex;
`
const SectionSearch = styled(Section)`
  background-color: ${props => props.theme.primary};
  color: #fff;
  padding-top: 100px; 
`
const SearchWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const SectionPackages = styled(Section)`
  display: flex;
  color: ${props => props.theme.primary};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: url("/food-background2.jpg");
`
const PackageList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
`
const PackageCard = styled.li`
  background-color: #fff;
  
  padding: 15px 10px;
  width: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  box-sizing: border-box;
`
const HamburgerIcon = styled(FontAwesomeIcon)`
  font-size: 6rem;
  margin-bottom: 1rem;
`
const Price = styled.span`
  font-size: 2rem;
`
const BurgerImage = styled.img`
  border-radius: 50%
`
export default class Home extends React.Component {

  render () {
    return (
      <div>
        <SectionPromotional>
          <Container>
            <PromotionalWrapper>
              <h2>Get Cashback up to 50%</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse
                consectur justo eu nunc consequat.</h3>
              <ButtonPrimary to="/">Order Now</ButtonPrimary>
            </PromotionalWrapper>
          </Container>
        </SectionPromotional>
        <SectionMainProduct>
          <MainProductContainer>
            <div>
              <h2>Big Burger</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur, adispicing elit.
                Vivamus
                lacinia odio vitae vestibulum vestibulum.</h3>
              <ButtonPrimary to="/">Order Now</ButtonPrimary>
            </div>
            <BurgerImage src="/hamburger-photo.jpg"/>
          </MainProductContainer>
        </SectionMainProduct>
        <SectionSearch>
          <SearchWrapper>
            <h2>Search the Best Burguers</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur, adispicing elit.
              Vivamus
              lacinia odio vitae vestibulum vestibulum.</h3>
            <SearchWidgetComponent/>
          </SearchWrapper>
        </SectionSearch>
        <SectionPackages>
          <Container>
            <h2>Popular Package</h2>
            <PackageList>
              <PackageCard>
                <h3>Package 1</h3>
                <HamburgerIcon icon={faHamburger}/>
                <Price>$ 10.00</Price>
                <p>Lorem ipsum dolor sit amen, consectetur adispicing elit.</p>
                <ButtonPrimary to="/">Order Now</ButtonPrimary>
              </PackageCard>
              <PackageCard>
                <h3>Package 2</h3>
                <HamburgerIcon icon={faHamburger}/>
                <Price>$ 20.00</Price>
                <p>Lorem ipsum dolor sit amen, consectetur adispicing elit.</p>
                <ButtonPrimary to="/">Order Now</ButtonPrimary>
              </PackageCard>
              <PackageCard>
                <h3>Package 3</h3>
                <HamburgerIcon icon={faHamburger}/>
                <Price>$ 30.00</Price>
                <p>Lorem ipsum dolor sit amen, consectetur adispicing elit.</p>
                <ButtonPrimary to="/">Order Now</ButtonPrimary>
              </PackageCard>
            </PackageList>
          </Container>
        </SectionPackages>
      </div>
    )
  }
}
