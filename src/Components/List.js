import React from 'react'
import AuthWrapper from '../Containers/AuthWrapper'

const List = ({ match: { params: {id} }}) => {
    console.log(44444444444, id)
    return (
        <AuthWrapper>
            <div>List</div>
        </AuthWrapper>
    )
}

export default List