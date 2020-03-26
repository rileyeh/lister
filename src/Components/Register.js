import React, { useState } from 'react'
import { Link } from '../Styles/Link'

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
            <p>looking to <Link onClick={() => setForm('login')}>login?</Link></p>
        </div>
    )
}

export default Register