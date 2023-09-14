const registerController = require('../../../controllers/RegisterController');
const {Router} = require('express');


const router = Router();

router.get('/', registerController.getAll);
router.get('/:userId', registerController.get);
router.post('/', registerController.create);
router.put('/:userId', registerController.update);
router.delete('/:userId', registerController.destroy);

module.exports = router;