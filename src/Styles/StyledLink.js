import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { darkTheme } from './colors'

const { primary, secondary } = darkTheme

export const StyledLink = styled(Link)`
    color: ${secondary};
    text-decoration: none;
    margin-right: 20px;

    :hover {
        color: ${primary};
    }
`