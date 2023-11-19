const userController = require('../../../controllers/UserController');
const {Router} = require('express');


const router = Router();

router.get('/verify', userController.getAll);
router.get('/:userId/verify', userController.get);
router.post('/verify', userController.create);
router.put('/:userId/verify', userController.update);
router.delete('/:userId/verify', userController.destroy);

module.exports = router;