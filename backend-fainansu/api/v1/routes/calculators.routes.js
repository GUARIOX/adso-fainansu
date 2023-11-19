const calculatorController = require('../../../controllers/CalculatorController');
const {Router} = require('express');


const router = Router();

router.get('/verify', calculatorController.getAll);
router.get('/:calculatorId/verify', calculatorController.get);
router.post('/verify', calculatorController.create);
router.put('/:calculatorId/verify', calculatorController.update);
router.delete('/:calculatorId/verify', calculatorController.destroy);

module.exports = router;