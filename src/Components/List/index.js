import React, { useContext, useEffect } from 'react'
import AuthWrapper from '../../Containers/AuthWrapper'
import { ListContext } from '../../Context/lists'
import Item from './Item'

const List = ({ match: { params: {id} }}) => {
    const { getAllItemsByList, items} = useContext(ListContext)
    const getItems = () => getAllItemsByList(id)
    useEffect(getItems, [])
    return (
        <AuthWrapper>
            {
                items
                &&
                items.map(item => <Item item={item} key={item.list_item_id}/>)
            }
        </AuthWrapper>
    )
}

export default List