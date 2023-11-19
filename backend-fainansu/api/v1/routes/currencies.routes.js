const currencyController = require('../../../controllers/CurrencyController');
const {Router} = require('express');


const router = Router();

router.get('/verify', currencyController.getAll);
router.get('/:currencyId/verify', currencyController.get);
router.post('/verify', currencyController.create);
router.put('/:currencyId/verify', currencyController.update);
router.delete('/:currencyId/verify', currencyController.destroy);

module.exports = router;