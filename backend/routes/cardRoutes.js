const express = require('express');
const router = express.Router();
const {createCard, getAll, getCard} = require('../controllers/cardController');

router.post('/cards', createCard);
router.get('/cards', getAll);
router.get('/cards/:title', getCard);

module.exports = router;