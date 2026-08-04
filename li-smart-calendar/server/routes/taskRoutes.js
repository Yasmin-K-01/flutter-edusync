// Test route: Force set due dates to past date for testing overdue
router.put('/test-make-overdue/:taskId', async (req, res) => {
  try {
    const Task = require('../models/Task');
    // Task-oda due date-a 2 naalaikku munnadi maathuroam
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 2);

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      { dueDate: pastDate },
      { new: true }
    );

    res.json({ message: "Task due date set to past successfully!", updatedTask });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});