import React, { useState } from 'react'
import { Link } from '../Styles/Link'

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
                <button disabled={button}>login</button>
            </form>
            <p>need to <Link onClick={() => setForm('reg')}>register?</Link></p>
        </div>
    )
}

export default Login