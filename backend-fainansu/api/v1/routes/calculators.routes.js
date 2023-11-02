const calculatorController = require('../../../controllers/CalculatorController');
const {Router} = require('express');


const router = Router();

router.get('/', calculatorController.getAll);
router.get('/:calculatorId', calculatorController.get);
router.post('/', calculatorController.create);
router.put('/:calculatorId', calculatorController.update);
router.delete('/:calculatorId', calculatorController.destroy);

module.exports = router;