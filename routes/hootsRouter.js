const express = require('express');
const hootsCtrl = require('../controllers/hootsCtrl');

const router = express.Router();

router.post('/', hootsCtrl.create);

module.exports = router;
