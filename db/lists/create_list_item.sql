INSERT INTO list_items (list_id, content, complete)
VALUES (${list_id}, ${content}, 'false');

SELECT * FROM list
WHERE list_id = ${list_id};