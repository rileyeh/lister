import React from 'react'

const Test = ({ match: { params: {id} }}) => {
    return (
        <div>
            <h1>{`the id sent on params ${id}`}</h1>
        </div>    
    )
}

export default Test