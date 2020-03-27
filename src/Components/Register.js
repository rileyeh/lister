import React, { useState } from 'react'

const Register = ({ register, setForm }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const submit = e => {
        e.preventDefault()
        setDisabled(true)
        register({username, password})
    }

    return (
        <div className='auth'>
        <form onSubmit={submit} className='auth-form'>
            <input
                className='auth-input' 
                type='text' 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                placeholder='username' 
                disabled={disabled}/>
            <input
                className='auth-input' 
                type='password' 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder='password' 
                disabled={disabled}/>
            <button 
                className='outline-button' 
                disabled={disabled}>
                    {disabled ? 'logging you in...' : 'register'}
            </button>
        </form>
        <p>looking to
            <span 
                className='span-link' 
                onClick={() => setForm('login')}> login</span>
        ?</p>
        </div>
    )
}

export default Register