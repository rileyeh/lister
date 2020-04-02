import React, { useState } from 'react'
import axios from 'axios'

const ListContext = React.createContext()

const ListProvider = props => {
    const [lists, setLists] = useState([])
    const [items, setItems] = useState([])
    const [currentList, setCurrent] = useState({})

    const listCallback = ({ data: lists  }) => setLists({ lists })
    const itemsCallback = ({ data: items }) => setItems({ items })
    const currentCallback = ({ data: currentList }) => setCurrent({ currentList })
    const errorCallback = err => console.log(`!!!error!!!`, err)

    const methods = {
        getAllUserLists: () => {
            axios.get(`/api/lists`)
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
        },
        createList: name => {
            axios.post('/api/lists', {name})
                .then(currentCallback)
                .catch(errorCallback)
         },
        getOneList: id => {
            axios.get(`/api/lists/${id}`)
                .then(currentCallback)
                .catch(errorCallback)
        },
        createItem: (id, content) => {
            axios.post(`/api/items/${id}`, { content })
                .then(currentCallback)
                .catch(errorCallback)
        },
        deleteItem: (id, list) => {
            axios.delete(`/api/items/${list}/${id}`)
                .then(currentCallback)
                .catch(errorCallback)
        }
    }

    return (
        <ListContext.Provider value={{ ...lists, ...items, ...currentList, ...methods }}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListProvider
export { ListContext, ListProvider }