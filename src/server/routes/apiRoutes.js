const router = require('express').Router();
const userController = require('../controllers/userController');
const factoryController = require('../controllers/factoryController');
const executiveController = require('../controllers/executiveController');
const cultureController = require('../controllers/cultureController');
const partnerController = require('../controllers/partnerController');
const fabricController = require('../controllers/fabricController');

router.get('/users', userController.get);
router.get('/factories', factoryController.get);
router.get('/executives', executiveController.get);
router.get('/cultures', cultureController.get);
router.get('/partners', partnerController.get);
router.get('/fabrics', fabricController.get);

module.exports = router;