import React, { useEffect, useContext } from 'react'
import { ListContext } from '../Context/lists'
import { Link } from 'react-router-dom'

const Lists = ({ user: { user_id: id } }) => {
    const { getAllUserLists, lists } = useContext(ListContext)
    const getLists = () => getAllUserLists(id)
    useEffect(getLists, [])
    return (
        <div>
            {
                lists
                &&
                lists.map(({list_id, name}) => {
                    return (
                        <Link
                            to={`/list/${list_id}`} 
                            key={list_id}>
                            {name}
                            </Link>
                    )
                })
            }
        </div>
    )
}

export default Lists