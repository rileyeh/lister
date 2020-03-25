UPDATE list_items
SET complete = false
WHERE list_item_id = ${id};

SELECT * FROM list_items
WHERE list_id = ${list_id};