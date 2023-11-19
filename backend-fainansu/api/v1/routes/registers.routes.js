const registerController = require('../../../controllers/RegisterController');
const {Router} = require('express');


const router = Router();

router.get('/verify', registerController.getAll);
router.get('/:registerId/verify', registerController.get);
router.post('/verify', registerController.create);
router.put('/:registerId/verify', registerController.update);
router.delete('/:registerId/verify', registerController.destroy);

module.exports = router;