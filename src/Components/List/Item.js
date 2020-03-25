import React from 'react' 

    const Item = ({ item : { list_item_id: id, content, complete, list_id }, check, uncheck }) => {
    const handleChange = () => {
        return complete ?
        uncheck(id, list_id)
        :
        check(id, list_id)
    }
    return (
        <div>
            <input type='checkbox' checked={complete} onChange={handleChange}/>
            <p>{content}</p>
        </div>
    )
}

export default Item