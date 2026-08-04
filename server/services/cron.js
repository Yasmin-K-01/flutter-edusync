const cron = require('node-cron');
const Task = require('../models/Task');

// Every day at midnight (00:00) check for overdue tasks
const startCronJobs = () => {
  cron.schedule('0 0 * * *', async () => {
    try {
      const now = new Date();
      const overdueTasks = await Task.updateMany(
        { dueDate: { $lt: now }, status: { $ne: 'completed' } },
        { $set: { status: 'overdue' } }
      );
      console.log(`Cron Job executed: ${overdueTasks.modifiedCount} tasks updated to overdue.`);
    } catch (err) {
      console.error('Cron job error:', err);
    }
  });
};

module.exports = startCronJobs;