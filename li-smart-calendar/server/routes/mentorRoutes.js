const express = require('express');
const router = express.Router();
const { getMentorAnalytics } = require('../controllers/mentorController');
const { verifyToken, isMentor } = require('../middleware/auth');

router.get('/analytics', verifyToken, isMentor, getMentorAnalytics);

module.exports = router;