import React, { useState } from 'react'

const Login = ({ login, setForm }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [button, setButton] = useState(false)

    const submit = e => {
        e.preventDefault()
        setButton(true)
        login({username, password})
    }

    return (
        <div className='auth'>
            <form onSubmit={submit} className='auth-form'>
                <input
                    className='auth-input' 
                    type='text' 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    placeholder='username' />
                <input
                    className='auth-input' 
                    type='password' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder='password' />
                <button 
                    className='outline-button' 
                    disabled={button}>
                        login
                </button>
            </form>
            <p>need to
                <span 
                    className='span-link' 
                    onClick={() => setForm('reg')}>register</span>
            ?</p>
        </div>
    )
}

export default Login