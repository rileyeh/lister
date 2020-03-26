import React, { useState } from 'react'
import Lists from './Lists'
import AuthWrapper from './AuthWrapper'
import AddList from '../Components/AddList'

const Dash = ({ user }) => {   
    const [add, setAdd] = useState(false) 

    return(
        <AuthWrapper>
            <div>
                <h1>welcome to your dashboard</h1>
                <button onClick={() => setAdd(true)}>add new list</button>
                <Lists user={user}/>
                {
                    add
                    &&
                    <AddList setAdd={setAdd}/>
                }
            </div>
        </AuthWrapper>
    )
}

export default Dash