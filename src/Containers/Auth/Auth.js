import React, { useState } from 'react'
import './Auth.scss'
import { Redirect } from 'react-router-dom'
import Login from '../../Components/Login'
import Register from '../../Components/Register'

const Auth = ({ user, register, login }) => {
    const [form, setForm] = useState('login')

    return (
        <>
        {
            user ? 
            <Redirect to='/dash'/>
            :
            (
                <div>
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
        </>
    )
}

export default Auth