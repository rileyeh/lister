import React, { useContext } from 'react'
// import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../Context/user'

const Test = props => {
    const { user, getUser, logout } = useContext(UserContext)
    console.log(1111, user)
    return (
        <div>
            <h1>Test</h1>
            <button onClick={getUser}>getuser</button>
            <button onClick={logout}>logout</button>
        </div>    
    )
}

export default Test