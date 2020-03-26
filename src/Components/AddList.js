import React, { useState, useContext } from 'react'
import { ListContext } from '../Context/lists'

const AddList = ({ setAdd }) => {
    const { createList, currentList } = useContext(ListContext)
    const [name, setName] = useState('')
    const submit = e => {
        e.preventDefault()
        createList(name)
    }
    console.log(currentList)
    return (
        <div>
            <h2>AddList</h2>
            <form onSubmit={submit}>
                <input 
                    type='text' 
                    placeholder='name' 
                    onChange={e => setName(e.target.value)}
                    value={name}/>
                <button>next</button>
            </form>
            <button onClick={() => setAdd(false)}>close</button>
        </div>
    )
}

export default AddList