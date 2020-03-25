import React from 'react' 

    const Item = ({ item : { list_item_id: id, content, complete, list_id }, check, uncheck }) => {
    //gonna need the id at some point in order to check these off in the db
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
            <p>this is number {id}</p>
        </div>
    )
}

export default Item