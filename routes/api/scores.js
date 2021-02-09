const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.post('/', scoresCtrl.create);
router.get('/', scoresCtrl.index);


module.exports = router;