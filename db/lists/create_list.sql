INSERT INTO list (user_id, name)
VALUES (${user_id}, ${name})
RETURNING *;