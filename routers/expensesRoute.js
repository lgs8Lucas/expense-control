const { Router } = require('express');
const router = Router();
const expensesController = require('../controllers/expensesController')


//GET, POST, PUT, DELETE
router.get("/expenses", expensesController.search);
router.post("/expenses", expensesController.insert);
router.put("/expense/:id", expensesController.update);
router.delete("/expense/:id", expensesController.remove);

module.exports = router