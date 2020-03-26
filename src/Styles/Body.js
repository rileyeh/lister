import styled from 'styled-components'
import { darkTheme } from './colors'

const { dark, light } = darkTheme


export const AppBody = styled.div`
    width: 100vw;
    min-height: calc(100vh - 75px);
    background-color: ${dark};
    color: ${light};`