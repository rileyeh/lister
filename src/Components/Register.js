import React, { useState } from 'react'

const Register = ({ register, setForm }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [button, setButton] = useState(false)

    const submit = e => {
        e.preventDefault()
        setButton(true)
        register({username, password})
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
                <button disabled={button}>register</button>
            </form>
            <p>looking to <span onClick={() => setForm('login')}>login?</span></p>
        </div>
    )
}

export default Register