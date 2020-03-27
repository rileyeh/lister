import React, { useState } from 'react'
import './Dash.scss'
import Lists from '../Lists/Lists'
import AuthWrapper from '../AuthWrapper'
import Adder from './Adder'
import AddList from '../../Components/AddList/AddList'
import AddListItem from '../../Components/AddListItem'

const Dash = ({ user }) => {   
    const [addList, setAddList] = useState(false) 
    const [addListItem, setAddListItem] = useState(false)

    return(
        <AuthWrapper>
            <div className='dash-main'>
                <h1 className='dash-h1'>your lists</h1>
                <Adder setAddList={setAddList} setAddListItem={setAddListItem}/>
                <Lists user={user}/>
                {
                    addList
                    &&
                    <AddList setAddList={setAddList} setAddListItem={setAddListItem}/>
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