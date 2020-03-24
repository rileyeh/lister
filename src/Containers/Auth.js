import React from 'react'
import { Redirect } from 'react-router-dom'

const Auth = ({ user, register, login}) => {
    const user1 = {
        username: 'alex',
        email: 'rileyehatch@gmail.com', 
        password: '123'
    }
    return user ? 
    <Redirect to={`/dash/${user.user_id}`}/>
    :
    (
        <div>
            <h1>auth</h1>
            <button onClick={() => register(user1)} >register</button>
            <button onClick={() => login(user1)}>login</button>
        </div>    
    )
}

export default Auth