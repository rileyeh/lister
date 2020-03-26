import React, { useContext, useEffect, useState } from 'react'
import AuthWrapper from '../../Containers/AuthWrapper'
import { ListContext } from '../../Context/lists'
import Item from './Item'
import Loading from '../Loading'
import AddListItem from '../AddListItem'

const List = ({ match: { params: {id} }}) => {
    const { 
        getAllItemsByList, 
        markItemComplete, 
        markItemIncomplete, 
        items, 
        currentList, 
        getOneList 
        } = useContext(ListContext)

    const [add, setAdd] = useState(false)

    const effectCallback = () => {
        getAllItemsByList(id)
        getOneList(id)
    }

    useEffect(effectCallback, [])

    return currentList ? (
        <AuthWrapper>
            <h2>{currentList.name}</h2>
            <button onClick={() => setAdd(true)}>add new item</button>
            {
                add
                &&
                <AddListItem setAdd={setAdd}/>
            }
            {
                items
                &&
                items.map(item => {
                    return (
                        <Item 
                            item={item} 
                            check={markItemComplete}
                            uncheck={markItemIncomplete}
                            key={item.list_item_id}/>
                    )
                })
            }
        </AuthWrapper>
    ) : <Loading/>
}

export default List