import styled from 'styled-components'
import { darkTheme } from './colors'

export const StyledHeader = styled.header`
    width: 100%;
    height: 75px;
    background-color: ${darkTheme.light};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
`