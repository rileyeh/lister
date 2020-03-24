import React, { useContext } from 'react'
// import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../Context/user'
import Test from './Test'

const Dash = props => {
    const { user, register, login } = useContext(UserContext)
    const user1 = {
        username: 'alex',
        email: 'rileyehatch@gmail.com', 
        password: '123'
    }
    console.log(user)
    return (
        <div>
            <h1>dash</h1>
            <button onClick={() => register(user1)} >register</button>
            <button onClick={() => login(user1)}>login</button>
            <Test />
        </div>    
    )
}

export default Dash