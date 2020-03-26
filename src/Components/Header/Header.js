import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = ({ user, logout }) => {
    console.log('user in the header', user)
    return (
        <header className='main-header'>
            <p className='logo'>lister</p>
            {
                user
                ?
                <button onClick={logout}>logout</button>
                :
                <Link to='/login' className='styled-link'>login/register</Link>
            }
        </header>
    )
}

export default Header