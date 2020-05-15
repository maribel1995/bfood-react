import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    min-width: 1160px;
    width: 1160px;
`;

export const ButtonPrimary = styled.button`
    background-color: ${props => props.theme.primary};
    color: white;
    border: none;
    border-radius: 19px;
    padding: 8px 39px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
`

export const ButtonSecondary = styled(ButtonPrimary)`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
`
