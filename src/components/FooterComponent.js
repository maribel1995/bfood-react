import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/styles'

const Footer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Section = styled.section`
  padding: 20px 0;
  width: 500px;
`
const SectionFooterMenu = styled(Section)`
  width: 150px
`
const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 `

export default class FooterComponent extends React.Component {
  render () {
    return (
      <Footer>
        <FooterContainer>
          <Section>
            <h4>Title Here</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.</p>
          </Section>
          <SectionFooterMenu>
            <h4>About</h4>
            <ul>
              <li>History</li>
              <li>Our Team</li>
              <li>Brand Guidelines</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </SectionFooterMenu>
          <SectionFooterMenu>
            <h4>Services</h4>
            <ul>
              <li>How to Order</li>
              <li>Our Product</li>
              <li>Order Status</li>
              <li>Promo</li>
              <li>Payment Method</li>
            </ul>
          </SectionFooterMenu>
          <SectionFooterMenu>
            <h4>Other</h4>
            <ul>
              <li>Contact Us</li>
              <li>Help</li>
              <li>Privacy</li>
            </ul>
          </SectionFooterMenu>
        </FooterContainer>
      </Footer>
    )
  }
}
