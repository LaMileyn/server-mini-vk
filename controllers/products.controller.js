const db = require("./../settings/db")

class ProductsController {
    async getProducts(req, res) {
        const data = db.query('SELECT * FROM `shop`', (error, rows, fields) => {
            if (error) {
                console.log(error)
            }else{
               res.status(200).json(rows)
            }
        })
    }
}
module.exports = new ProductsController()