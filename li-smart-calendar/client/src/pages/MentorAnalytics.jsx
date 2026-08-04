import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CheckCircle, Clock, AlertTriangle, Users } from 'lucide-react';

export default function MentorAnalytics() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/mentor/analytics', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStudents(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching analytics:', error);
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-600">Loading Team Analytics...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Progress Dashboard</h1>
          <p className="text-gray-500">Overview of task completions and deadlines across all 50 students</p>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold">
          <Users className="w-5 h-5" />
          Total Students: {students.length}
        </div>
      </div>

      {/* Analytics Data Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 font-semibold text-gray-700">Student Name</th>
              <th className="p-4 font-semibold text-gray-700">Email</th>
              <th className="p-4 font-semibold text-gray-700">Completed</th>
              <th className="p-4 font-semibold text-gray-700">Pending</th>
              <th className="p-4 font-semibold text-gray-700">Overdue</th>
              <th className="p-4 font-semibold text-gray-700">Overall Progress</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">{student.name}</td>
                <td className="p-4 text-gray-500 text-sm">{student.email}</td>
                <td className="p-4 text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> {student.completed}
                </td>
                <td className="p-4 text-amber-600 font-bold">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {student.pending}</span>
                </td>
                <td className="p-4 text-rose-600 font-bold">
                  <span className="flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> {student.overdue}</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                        style={{ width: `${student.completionRate}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-gray-700 min-w-[35px]">{student.completionRate}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}