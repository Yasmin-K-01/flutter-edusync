const User = require('../models/User');
const StudentTaskProgress = require('../models/StudentTaskProgress');

exports.getMentorAnalytics = async (req, res) => {
  try {
    // 1. Fetch all student accounts
    const students = await User.find({ role: 'student' }).select('name email');

    // 2. Aggregate completion metrics per student
    const analytics = await Promise.all(
      students.map(async (student) => {
        const progressRecords = await StudentTaskProgress.find({ studentId: student._id });

        const total = progressRecords.length;
        const completed = progressRecords.filter(r => r.status === 'Completed').length;
        const inProgress = progressRecords.filter(r => r.status === 'In Progress').length;
        const notStarted = progressRecords.filter(r => r.status === 'Not Started').length;
        const overdue = progressRecords.filter(r => r.status === 'Overdue').length;

        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

        return {
          _id: student._id,
          name: student.name,
          email: student.email,
          totalAssigned: total,
          completed,
          pending: inProgress + notStarted,
          overdue,
          completionRate
        };
      })
    );

    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};