const registerController = require('../../../controllers/RegisterController');
const {Router} = require('express');


const router = Router();

router.get('/', registerController.getAll);
router.get('/:registerId', registerController.get);
router.post('/', registerController.create);
router.put('/:registerId', registerController.update);
router.delete('/:registerId', registerController.destroy);

module.exports = router;