const router = require("express").Router();
const productController = require("./../controllers/products.controller")

router.get("/",productController.getProducts)

module.exports = router