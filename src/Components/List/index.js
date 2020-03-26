import React, { useContext, useEffect } from 'react'
import AuthWrapper from '../../Containers/AuthWrapper'
import { ListContext } from '../../Context/lists'
import Item from './Item'
import Loading from '../Loading'

const List = ({ match: { params: {id} }}) => {
    const { getAllItemsByList, markItemComplete, markItemIncomplete, items, currentList, getOneList } = useContext(ListContext)
    const effectCallback = () => {
        getAllItemsByList(id)
        getOneList(id)
    }
    useEffect(effectCallback, [])
    console.log(id, currentList)
    return currentList ? (
        <AuthWrapper>
            <h2>{currentList.name}</h2>
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