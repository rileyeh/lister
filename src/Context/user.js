import React from 'react'
import axios from 'axios'

const UserContext = React.createContext()

const initialState = {
    user: {}
}

export default class UserProvider extends React.Component {
    state = initialState

    successCallback = ({ data: user }) => this.setState({ user })
    errorCallback = err => console.log(`!!!error!!!`, err)

    methods = {
        register: userInfo => {
            axios.post(`/auth/register`, userInfo)
                .then(this.successCallback)
                .catch(this.errorCallback)
        },
        login: userInfo => {
            axios.post(`/auth/login`, userInfo)
                .then(this.successCallback)
                .catch(this.errorCallback)
        },
        getUser: () => {
            axios.get(`/auth/getuser`)
                .then(this.successCallback)
                .catch(this.errorCallback)
        }
    }

    render() {
        return (
            <UserContext.Provider value={{ ...this.state, ...this.methods }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export { UserContext, UserProvider }