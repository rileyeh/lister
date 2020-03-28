import React, { useEffect, useContext } from 'react'
import './Lists.scss'
import { ListContext } from '../../Context/lists'
// import { Link } from 'react-router-dom'
import List from '../../Components/List/index'

const Lists = ({ user: { user_id: id }, addToList }) => {
    const { getAllUserLists, lists } = useContext(ListContext)
    const getLists = () => getAllUserLists(id)
    useEffect(getLists, [])
    return (
        <div className='lists-main'>
            {
                lists
                ?
                lists.map(({list_id}) => {
                    return (
                        <List
                            id={list_id} 
                            key={list_id}
                            addToList={addToList}/>
                    )
                })
                :
                null
            }
        </div>
    )
}

export default Lists


// const Lists = ({ user: { user_id: id } }) => {
//     const { getAllUserLists, lists } = useContext(ListContext)
//     const getLists = () => getAllUserLists(id)
//     useEffect(getLists, [])
//     return (
//         <div className='lists-main'>
//             {
//                 lists
//                 &&
//                 lists.map(({list_id, name}) => {
//                     return (
//                         <Link
//                             to={`/list/${list_id}`} 
//                             key={list_id}>
//                             {name}
//                             </Link>
//                     )
//                 })
//             }
//         </div>
//     )
// }