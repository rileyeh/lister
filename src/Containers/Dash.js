import React from 'react'
import Lists from './Lists'
import AuthWrapper from './AuthWrapper'

const Dash = ({ user }) => {    
    return(
        <AuthWrapper>
            <div>
                <h1>welcome to your dashboard</h1>
                <Lists user={user}/>
            </div>
        </AuthWrapper>
    )
}

export default Dash