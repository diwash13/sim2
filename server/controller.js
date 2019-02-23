module.exports = {
    getListing: (req, res) => {
        const db = req.app.get('db')

        db.get_listing().then(response => {
            res.status(200).send(response)
        })
    },

    createListing:(req, res) => {
        const db = req.app.get('db')
        const { property_name, address, city, state, zip } = req.body
        db.create_listing([property_name, address, city, state, zip]).then(response => {
            res.status(200).send(response)
        })
    },

    deleteListing: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_listing([id]).then(response => {
            res.status(200).send(response)
        })
    },

    updateListing: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {property_name, address, city, state, zip} = req.body
        db.update_listing([property_name, address, city, state, zip]).then(response => {
            res.status(200).send(response)
        })
    }
}