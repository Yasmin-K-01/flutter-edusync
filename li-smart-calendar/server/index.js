const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Register API Routes
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/mentor', require('./routes/mentorRoutes')); // <-- Phase 6 Mentor Analytics Route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});