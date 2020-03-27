import React, { useState } from 'react' 

const Item = ({ item : { list_item_id: id, content, complete, list_id }, check, uncheck }) => {
    const [checked, setChecked] = useState(complete)

    const handleClick = () => {
        if (complete) {
            uncheck(id, list_id)
            setChecked(!checked)
        } else {
            check(id, list_id)
            setChecked(!checked)
        }
    }

    return (
        <div className='item-main' onClick={handleClick}>
            <div className={checked ? 'item-checked' : 'item-uncheck'}></div>
            <p className='item-text'>{content}</p>
        </div>
    )
}

export default Item