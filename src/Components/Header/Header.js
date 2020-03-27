import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = ({ user, logout }) => {
    return (
        <header className='main-header'>
            <Link to='/' style={{textDecoration:'none'}}><p className='logo'>lister</p></Link>
            {
                user
                ?
                <div className='right-links'>
                <Link className='your-lists' to='/dash'>your lists</Link>
                <button onClick={logout} className='logout-button'>logout</button>
                </div>
                :
                <Link to='/login' className='styled-link'>login/register</Link>
            }
        </header>
    )
}

export default Header