import React, { useState, useEffect, useContext } from 'react'
import axios from'axios'
import { ListContext } from '../../Context/lists'

const EditableName = ({ list: { list_id: id, name: listName, user_id } }) => {
    const { getAllUserLists } = useContext(ListContext)

    const [name, setName] = useState('')
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        setName(listName)
    }, [ listName ])

    const saveName = () => {
        axios.put(`/api/lists/name/${id}`, {name})
            .then(({ data }) => {
                setName(data[0].name)
            })
        setEdit(false) 
    }

    const cancel = async () => {
        await getAllUserLists(user_id)
        setName(listName)
        setEdit(false)
    }

    return (
        <>
        {
            edit ? (
                <div className='list-name-editor'>
                    <input 
                        type='text' 
                        value={name} 
                        className='list-name-input'
                        onChange={e => setName(e.target.value)}/>
                    <button className='list-name-button' onClick={saveName}>&#10003;</button>
                    <button className='list-name-button' onClick={cancel}>X</button>
                </div>
            ) : (
                <h2 className='list-name' onClick={() => setEdit(true)}>{name}</h2>
            )
        }
        </>
    )
}

export default EditableName