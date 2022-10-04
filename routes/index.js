const router = require("express").Router();
const productsRoute = require("./products.router")

router.use('/products',productsRoute)

module.exports = router