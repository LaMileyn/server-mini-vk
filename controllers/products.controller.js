const db = require("./../settings/db")

class ProductsController {
    async getProducts(req, res) {
        db.query('SELECT * FROM `shop`', (error, rows, fields) => {
            if (error) {
                console.log(error)
            }else{
               res.status(200).json(rows)
            }
        })
    }
    async buyProduct(req,res) {
        db.query(`
        UPDATE shop
        SET remainder = remainder - 1
        WHERE id = ${req.params.id}
        `, (error,rows,fields) =>{
            if (error){
                console.log(error)
            }else{
                res.status(200).json("success")
            }
        })
    }
}
module.exports = new ProductsController()