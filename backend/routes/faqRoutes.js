const express = require('express');
const router = express.Router();
const { addFAQ, getFAQs } = require('../controllers/faqController');

router.post('/faqs', addFAQ);
router.get('/faqs', getFAQs);

module.exports = router; 