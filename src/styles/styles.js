import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin: 0 auto;
  min-width: 1160px;
  width: 1160px;
`;

export const ButtonPrimary = styled(Link)`
  background-color: ${props => props.theme.primary};
  display: inline-block;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 45px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
`
