const router = require("express").Router();
const productController = require("./../controllers/products.controller")

router.get("/",productController.getProducts)
router.put("/:id/buy",productController.buyProduct)

module.exports = router