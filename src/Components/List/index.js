import React, { useContext, useEffect, useState } from 'react'
import AuthWrapper from '../../Containers/AuthWrapper'
import { ListContext } from '../../Context/lists'
import Item from './Item'
import Loading from '../Loading'
import './List.scss'
import axios from 'axios'
import EditableName from './EditableName'

const List = ({ id, addToList }) => {
    const { 
        markItemComplete, 
        markItemIncomplete,
        lists
        } = useContext(ListContext)

    const [currentList, setCurrentList] = useState([])
    const [items, setItems] = useState([])

    const effectCallback = () => {
        axios.get(`/api/lists/${id}`).then(({ data }) => setCurrentList(data))
        axios.get(`/api/items/${id}`).then(({ data }) => setItems(data))
    }

    useEffect(effectCallback, [lists])

    return (
        <>
        {
            currentList ? (
                <AuthWrapper>
                    <div className='list-main'>
                        <header className='list-header'>
                            <EditableName list={currentList}/>
                            <button className='list-add' onClick={() => addToList(id)}>+</button>
                        </header>
                        <section className='list-items'>{
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
                        }</section>
                    </div>
                </AuthWrapper>
            ) : <Loading/>
        }
        </>
    )
}

export default List

// // const List = ({ match: { params: {id} }}) => {
//     const List = ({ id }) => {
//         const { 
//             getAllItemsByList, 
//             markItemComplete, 
//             markItemIncomplete, 
//             items, 
//             currentList, 
//             getOneList 
//             } = useContext(ListContext)
    
//         const [add, setAdd] = useState(false)
    
//         const effectCallback = () => {
//             getAllItemsByList(id)
//             getOneList(id)
//         }
    
//         useEffect(effectCallback, [])
    
//         return currentList ? (
//             <AuthWrapper>
//                 <div className='list-main'>
//                 <h2>{currentList.name}</h2>
//                 <button onClick={() => setAdd(true)}>add new item</button>
//                 {
//                     add
//                     &&
//                     <AddListItem setAdd={setAdd}/>
//                 }
//                 {
//                     items
//                     &&
//                     items.map(item => {
//                         return (
//                             <Item 
//                                 item={item} 
//                                 check={markItemComplete}
//                                 uncheck={markItemIncomplete}
//                                 key={item.list_item_id}/>
//                         )
//                     })
//                 }
//                 </div>
//             </AuthWrapper>
//         ) : <Loading/>
//     }