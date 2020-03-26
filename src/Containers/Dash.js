import React, { useState } from 'react'
import Lists from './Lists'
import AuthWrapper from './AuthWrapper'
import AddList from '../Components/AddList'
import AddListItem from '../Components/AddListItem'

const Dash = ({ user }) => {   
    const [addList, setAddList] = useState(false) 
    const [addListItem, setAddListItem] = useState(false)

    return(
        <AuthWrapper>
            <div>
                <h1>welcome to your dashboard</h1>
                <button onClick={() => setAddList(true)}>add new list</button>
                <button onClick={() => setAddListItem(true)}>add new item</button>
                <Lists user={user}/>
                {
                    addList
                    &&
                    <AddList setAddList={setAddList}/>
                }
                {
                    addListItem
                    &&
                    <AddListItem setAddListItem={setAddListItem} setAddList={setAddList}/>
                }
            </div>
        </AuthWrapper>
    )
}

export default Dash