SELECT * FROM list_items
WHERE list_id = $1
AND complete = false;