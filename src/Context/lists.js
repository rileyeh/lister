import React, { useState } from 'react'
import axios from 'axios'

const ListContext = React.createContext()

const ListProvider = props => {
    const [lists, setLists] = useState([])

    const successCallback = ({ data: lists }) => setLists({ lists })
    const errorCallback = err => console.log(`!!!error!!!`, err)

    const methods = {
        getAllUserLists: id => {
            axios.get(`/api/lists/${id}`)
                .then(successCallback)
                .catch(errorCallback)
        }
    }

    return (
        <ListContext.Provider value={{ ...lists, ...methods }}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListProvider
export { ListContext, ListProvider }