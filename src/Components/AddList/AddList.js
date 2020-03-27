import React, { useState, useContext } from 'react'
import './AddList.scss'
import { ListContext } from '../../Context/lists'

const AddList = ({ setAddList, setAddListItem }) => {
    const { createList, currentList } = useContext(ListContext)
    const [name, setName] = useState('')
    const submit = e => {
        e.preventDefault()
        createList(name)
        setAddList(false)
        setAddListItem(true)
    }

    return (
        <div className='add-list-back'>
            <div className='add-list-modal'>
                <h2 className='add-list-title'>give your new list a name</h2>
                <form onSubmit={submit} className='add-list-form'>
                    <input 
                        type='text' 
                        className='add-list-input'
                        placeholder='name' 
                        onChange={e => setName(e.target.value)}
                        value={name}/>
                    <button className='outline-button' style={style}>next</button>
                </form>
                <button onClick={() => setAddList(false)} className='add-list-button'>X</button>
            </div>
        </div>
    )
}

export default AddList

const style = {
    width: 60,
    position: 'absolute', 
    top: 10,
    right: -10
}