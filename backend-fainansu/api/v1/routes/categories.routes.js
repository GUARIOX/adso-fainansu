const categoryController = require('../../../controllers/CategoryController');
const {Router} = require('express');


const router = Router();

router.get('/verify', categoryController.getAll);
router.get('/:categoryId/verify', categoryController.get);
router.post('/verify', categoryController.create);
router.put('/:categoryId/verify', categoryController.update);
router.delete('/:categoryId/verify', categoryController.destroy);

module.exports = router;