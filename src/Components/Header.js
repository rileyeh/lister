import React from 'react'
import { Logo } from '../Styles/Logo'
import { StyledHeader } from '../Styles/Header'
import { StyledLink } from '../Styles/StyledLink'

const Header = ({ user, logout }) => {
    console.log('user in the header', user)
    return (
        <StyledHeader>
            <Logo>lister</Logo>
            {
                user
                ?
                <button onClick={logout}>logout</button>
                :
                <StyledLink to='/login'>login/register</StyledLink>
            }
        </StyledHeader>
    )
}

export default Header