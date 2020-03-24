SELECT * FROM list_items
WHERE list_id = $1;

-- select 
--     li.list_item_id, 
--     li.content, 
--     li.complete, 
--     li.list_id, 
--     l.list_id,
--     l.name
-- from 
--     list_items li
-- inner join list l on li.list_id = l.list_id
-- where l.user_id = 1;