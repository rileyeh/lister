CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(25),
    email VARCHAR,
    password VARCHAR
);

CREATE TABLE list (
    list_id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(user_id),
    name VARCHAR(50)
);

CREATE TABLE list_items (
    list_item_id SERIAL PRIMARY KEY, 
    list_id INTEGER REFERENCES list(list_id),
    content VARCHAR(300), 
    complete BOOLEAN
);