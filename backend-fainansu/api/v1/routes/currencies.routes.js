const currencyController = require('../../../controllers/CurrencyController');
const {Router} = require('express');


const router = Router();

router.get('/', currencyController.getAll);
router.get('/:currencyId', currencyController.get);
router.post('/', currencyController.create);
router.put('/:currencyId', currencyController.update);
router.delete('/:currencyId', currencyController.destroy);

module.exports = router;