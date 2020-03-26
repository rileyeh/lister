SELECT 
    li.list_item_id, 
    li.content, 
    li.complete, 
    li.list_id, 
    l.list_id,
    l.name
FROM 
    list_items li
INNER JOIN list l ON li.list_id = l.list_id
WHERE l.list_id = $1;