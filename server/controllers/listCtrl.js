module.exports = {
    getListsByUser: async (req, res, next) => {
        try {
            const db = await req.app.get('db')
            const { user_id: id } = req.session.user
            const lists = await db.lists.get_lists_by_user(id)
            res.status(200).send(lists)
        } catch (error) {
            res.status(409).send(`can't find that`)
        }
    },
    getOneList: async (req, res, next) => {
        try {
            const db = await req.app.get('db')
            const { id } = req.params
            const list = await db.lists.get_one_list(id)
            res.status(200).send(list[0])
        } catch (error) {
            res.status(409).send(`can't find that`)
        }
    },
    getAllItemsByList: async (req, res, next) => {
        try {
            const db = await req.app.get('db')
            const { id } = req.params
            const items = await db.lists.get_all_items_by_list(id)
            res.status(200).send(items)
        } catch (error) {
            res.status(409).send(`can't find that`)
        }
    },
    markItemComplete: async (req, res, next) => {
        try {
            const db = await req.app.get('db')
            const { id } = req.params
            const { list_id } = req.body
            const items = await db.lists.mark_item_complete({id, list_id})
            res.status(200).send(items)
        } catch (error) {
            res.status(400).send(`this just did not happen`)
        }
    },
    markItemIncomplete: async (req, res, next) => {
        try {
            const db = await req.app.get('db')
            const { id } = req.params
            const { list_id } = req.body
            const items = await db.lists.mark_item_incomplete({id, list_id})
            res.status(200).send(items)
        } catch (error) {
            res.status(400).send(`this just did not happen`)
        }
    },
    createList: async (req, res, next) => {
        try {
            const db = await req.app.get('db')
            const { user_id } = req.session.user
            const { name } = req.body
            const list = await db.lists.create_list({user_id, name})
            res.status(200).send(list[0])
        } catch (error) {
            res.status(400).send(`unable to make new list`)
        }
    },
    updateListName: async (req, res, next) => {
        //name nad id
        try {
            const db = await req.app.get('db')
            const { id } = req.params
            const { name } = req.body
            const newName = await db.lists.update_list_name({ id, name })
            res.status(200).send(newName)
        } catch (error) {
            res.status(400).send('nope')
        }
    }
}