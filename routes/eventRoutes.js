const express = require('express');
const { createEvent, getEvents, setReminder } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', authMiddleware, getEvents);
router.put('/:id/reminder', authMiddleware, setReminder);

module.exports = router;