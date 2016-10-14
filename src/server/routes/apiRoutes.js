const router = require('express').Router();
const userController = require('../controllers/userController');
const factoryController = require('../controllers/factoryController');
const executiveController = require('../controllers/executiveController');
const cultureController = require('../controllers/cultureController');
const partnerController = require('../controllers/partnerController');
const fabricController = require('../controllers/fabricController');
const postController = require('../controllers/postController');
const catelogController = require('../controllers/catelogController');
const techniqueController = require('../controllers/techniqueController');
const historyController = require('../controllers/historyController');

router.get('/users', userController.get);
router.get('/factories', factoryController.get);
router.get('/executives', executiveController.get);
router.get('/cultures', cultureController.get);
router.get('/partners', partnerController.get);
router.get('/fabrics', fabricController.get);
router.get('/posts', postController.get);
router.get('/posts/:article', postController.getOne);
router.get('/catelogs', catelogController.get);
router.get('/techniques', techniqueController.get);
router.get('/histories', historyController.get);

module.exports = router;