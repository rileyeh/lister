import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user, logout }) => {
    console.log('user in the header', user)
    return (
        <header>
            <h2>header</h2>
            {
                user
                ?
                <button onClick={logout}>logout</button>
                :
                <Link to='/login'>login/register</Link>
            }
        </header>
    )
}

export default Header