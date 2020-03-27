import React, { useState } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

const UserProvider = props => {
    const [user, setUser] = useState({})

    const successCallback = ({ data: user }) => setUser({ user })
    const errorCallback = err => console.log(`!!!error!!!`, err)

    const methods = {
        register: userInfo => {
            axios.post(`/auth/register`, userInfo)
                .then(successCallback)
                .catch(errorCallback)
        },
        login: userInfo => {
            axios.post(`/auth/login`, userInfo)
                .then(successCallback)
                .catch(errorCallback)
        },
        getUser: () => {
            axios.get(`/auth/getuser`)
                .then(successCallback)
                .catch(errorCallback)
        },
        logout: () => {
            axios.delete('/auth/logout')
                .then(successCallback)
                .catch(errorCallback)
        }
    }

    return (
        //at some point, i want to test what happens when you remove props.children?
        <UserContext.Provider value={{ ...user, ...methods }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
export { UserContext, UserProvider }