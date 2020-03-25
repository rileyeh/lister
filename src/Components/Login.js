import React, { useState } from 'react'

const Login = ({ login, setForm }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = e => {
        e.preventDefault()
        login({username, password})
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input 
                    type='text' 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    placeholder='username' />
                <input 
                    type='password' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder='password' />
                <button>login</button>
            </form>
            <p>need to <span onClick={() => setForm('reg')}>register?</span></p>
        </div>
    )
}

export default Login