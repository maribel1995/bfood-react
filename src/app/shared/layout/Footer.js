import React from 'react'
import styled from 'styled-components'
import { Container } from '../../style/styles'
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #222323;
  color: #fff;
  line-height: 2rem;
  font-size: 1.5rem;
  min-height: 500px;
  padding-top: 150px;
`
const Section = styled.section`
  padding: 20px 0;
  width: 500px;
`
const SectionFooterMenu = styled(Section)`
  width: 150px
`
const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`
const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 `
const SocialIcon = styled(FontAwesomeIcon)`
  background: #fff;
  border-radius: 50%;
  width: 2rem !important;
  height: 2rem;
  color: #000;
  padding: 5px;
  &:not(:first-child) {
    margin-left: 5px;
  }
`

export default class extends React.Component {
  render () {
    return (
      <Footer>
        <FooterContainer>
          <Section>
            <h4>Title Here</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
              dignissim enim.</p>
            <div>
              <SocialIcon icon={faInstagram}/>
              <SocialIcon icon={faFacebook}/>
              <SocialIcon icon={faTwitter}/>
              <SocialIcon icon={faWhatsapp}/>
            </div>
          </Section>
          <SectionFooterMenu>
            <h4>About</h4>
            <FooterList>
              <li>History</li>
              <li>Our Team</li>
              <li>Brand Guidelines</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </FooterList>
          </SectionFooterMenu>
          <SectionFooterMenu>
            <h4>Services</h4>
            <FooterList>
              <li>How to Order</li>
              <li>Our Product</li>
              <li>Order Status</li>
              <li>Promo</li>
              <li>Payment Method</li>
            </FooterList>
          </SectionFooterMenu>
          <SectionFooterMenu>
            <h4>Other</h4>
            <FooterList>
              <li>Contact Us</li>
              <li>Help</li>
              <li>Privacy</li>
            </FooterList>
          </SectionFooterMenu>
        </FooterContainer>
      </Footer>
    )
  }
}
