import React, { useState } from 'react'
import axios from 'axios'

const ListContext = React.createContext()

const ListProvider = props => {
    const [lists, setLists] = useState([])
    const [items, setItems] = useState([])

    const listCallback = ({ data: lists }) => setLists({ lists })
    const itemsCallback = ({ data: items }) => setItems({ items })
    const errorCallback = err => console.log(`!!!error!!!`, err)

    const methods = {
        getAllUserLists: id => {
            axios.get(`/api/lists/${id}`)
                .then(listCallback)
                .catch(errorCallback)
        },
        getAllItemsByList: id => {
            axios.get(`/api/items/${id}`)
                .then(itemsCallback)
                .catch(errorCallback)
        },
        markItemComplete: (id, list_id) => {
            axios.put(`/api/items/${id}`, {list_id})
                .then(itemsCallback)
                .catch(errorCallback)
        },
        markItemIncomplete: (id, list_id) => {
            axios.put(`/api/items/undo/${id}`, {list_id})
                .then(itemsCallback)
                .catch(errorCallback)
        }
    }

    return (
        <ListContext.Provider value={{ ...lists, ...items, ...methods }}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListProvider
export { ListContext, ListProvider }