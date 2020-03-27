import React, { useContext, useState, useEffect } from 'react'
import { ListContext } from '../../Context/lists'
import './AddListItem.scss'
import axios from 'axios'

const AddListItem = ({ setAddListItem }) => {
    const { currentList, createItem } = useContext(ListContext)
    const [item, setItem] = useState('')
    const [items, setItems] = useState([])

    const submit = () => {
        if (currentList && currentList.length) {
            createItem(currentList[0].list_id, item)
        } else if (currentList && !currentList.length) {
            createItem(currentList.list_id, item)
        }
        setItem('')
    }

    useEffect(() => {
        if (currentList && currentList.length) {
            axios.get(`/api/items/${currentList[0].list_id}`).then(({ data }) => setItems(data))
        } else if (currentList && !currentList.length) {
            axios.get(`/api/items/${currentList.list_id}`).then(({ data }) => setItems(data))
        }
    }, [currentList])

    return (
        <div className='add-item-back'>   
            <div className='add-item-modal'>
                <h2 className='add-item-title'>add items to your list</h2>
                <div className='items-container'>{
                    items
                    &&
                    items.map(item => {
                        return (
                            <div key={item.list_item_id} className='add-item-item'>
                                <span className='add-item-span'>- </span>
                                <span>{item.content}</span>
                            </div>
                        )
                    })
                }</div>
                <form onSubmit={submit} className='add-list-form'>
                    <input 
                        type='text' 
                        className='add-list-input'
                        placeholder='new item' 
                        onChange={e => setItem(e.target.value)}
                        value={item}/>
                    <button className='outline-button' style={style}>add</button>
                </form>
                <button onClick={() => setAddListItem(false)} className='add-list-button'>X</button>
            </div>
        </div>
    )
}

export default AddListItem

const style = {
    width: 60,
    position: 'absolute', 
    bottom: -20,
    right: -10
}