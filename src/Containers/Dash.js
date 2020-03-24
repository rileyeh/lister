import React from 'react'
import { Redirect } from 'react-router-dom'
import List from './List'

const Dash = ({ user }) => {
    if (!user) return <Redirect to='/'/>
    let { user_id: id } = user
    return (
        <div>
            <h1>dash of {id}</h1>
            <List />
        </div>
    )

}

export default Dash