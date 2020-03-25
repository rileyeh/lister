import React, { useState } from 'react' 

    const Item = ({ item : { list_item_id: id, content, complete }}) => {
    //gonna need the id at some point in order to check these off in the db
    const [checked, setChecked] = useState(complete)
    const handleClick = () => setChecked(!checked)
    return (
        <div>
            <input type='checkbox' checked={checked} onChange={handleClick}/>
            <p>{content}</p>
            <p>this is number {id}</p>
        </div>
    )
}

export default Item