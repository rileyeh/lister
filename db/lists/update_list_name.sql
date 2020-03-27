UPDATE list
SET name = ${name}
WHERE list_id = ${id}
RETURNING *;