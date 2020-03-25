import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'

const Auth = ({ user, register, login}) => {
    const [form, setForm] = useState('login')

    return user ? 
    <Redirect to='/dash'/>
    :
    (
        <div>
            <h1>auth</h1>
            {
                form === 'login'
                ?
                <Login login={login} setForm={setForm}/>
                :
                <Register register={register} setForm={setForm}/>
            }
        </div>    
    )
}

export default Auth