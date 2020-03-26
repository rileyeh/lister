import styled from 'styled-components'
import { darkTheme } from './colors'

const { primary, secondary } = darkTheme

export const Link = styled.span`
    color: ${secondary};
    text-decoration: none;
    margin-right: 20px;

    :hover {
        color: ${primary};
    }
`