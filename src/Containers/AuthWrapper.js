import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { Redirect } from 'react-router-dom'

const AuthWrapper = props => {
    const { user } = useContext(UserContext)
    return user
    ?
    <>{props.children}</>
    :
    <Redirect to='/'/>
}

export default AuthWrapper