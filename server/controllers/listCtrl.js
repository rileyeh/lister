module.exports = {
    getListsByUser: async (req, res, next) => {
        try {
            const db = await req.app.get('db')
            const { id } = req.params
            const lists = await db.lists.get_lists_by_user(id)
            res.status(200).send(lists)
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
    }
}