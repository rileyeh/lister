import React, { useState, useContext } from 'react'
import './Dash.scss'
import Lists from '../Lists/Lists'
import AuthWrapper from '../AuthWrapper'
import Adder from './Adder'
import AddList from '../../Components/AddList/AddList'
import AddListItem from '../../Components/AddListItem/AddListItem'
import { ListContext } from '../../Context/lists'

const Dash = ({ user }) => {   
    const { getOneList } = useContext(ListContext)

    const [addList, setAddList] = useState(false) 
    const [addListItem, setAddListItem] = useState(false)

    const addToList = id => {
        getOneList(id)
        setAddListItem(true)
    }

    return (
        <AuthWrapper>
            <div className='dash-main'>
                <h1 className='dash-h1'>your lists</h1>
                <Adder setAddList={setAddList} setAddListItem={setAddListItem}/>
                <Lists user={user} addToList={addToList}/>
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