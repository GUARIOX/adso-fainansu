const currencyController = require('../../../controllers/CurrencyController');
const {Router} = require('express');


const router = Router();

router.get('/', currencyController.getAll);
router.get('/:userId', currencyController.get);
router.post('/', currencyController.create);
router.put('/:userId', currencyController.update);
router.delete('/:userId', currencyController.destroy);

module.exports = router;