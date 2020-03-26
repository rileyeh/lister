import styled from 'styled-components'
import { darkTheme } from './colors'

const { primary, secondary, dark, light } = darkTheme

export const Button = styled.button`
    width: 150px;
    height: 35px;
    font-size: 16px;
    background-color: ${dark};
    color: ${primary};
    border: 3px solid ${primary};
    border-radius: 20px;

    :hover {
        background-color: ${light}; 
        color: ${secondary};
        border: 3px solid ${secondary};
        transform: translateY(-3px);
    }
`