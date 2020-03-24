INSERT INTO users (username, email, password)
VALUES (${username}, ${email}, ${hash})
RETURNING *;