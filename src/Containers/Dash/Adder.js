import React, { useState } from 'react'
import './Dash.scss'

const Adder = ({setAddList, setAddListItem}) => {
    const [menu, setMenu] = useState(false)

    const openAddList = () => {
        setMenu(false)
        setAddList(true)
    }

    const openAddListItem = () => {
        setMenu(false)
        setAddListItem(true)
    }

    return (
        <>
        {
            menu ? (
                <div className='adder-open'>
                    <button onClick={openAddList}>add new list</button>
                    <button onClick={openAddListItem}>add new item</button>
                    <button onClick={() => setMenu(false)}>x</button>
                </div>
            ) : ( 
                <button
                    className='adder' 
                    onClick={() => setAddList(true)}>
                +</button>
            )
        }
        </>
    )
}

export default Adder

//full app: change the + onClick to setMenu(true)