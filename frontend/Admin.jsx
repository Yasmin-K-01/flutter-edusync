import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();

  const totalStudents = 30;
  const totalTasks = 18;
  const completedTasks = 12;
  const pendingTasks = 6;

  const progress = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="admin-container">

      {/* Header */}
      <header className="admin-header">
        <h1>Ma'am Dashboard</h1>

        <button onClick={() => navigate("/login")}>
          Logout
        </button>
      </header>

      {/* Statistics */}
      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>{totalStudents}</h2>
          <p>Total Students</p>
        </div>

        <div className="dashboard-card">
          <h2>{totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>{completedTasks}</h2>
          <p>Completed</p>
        </div>

        <div className="dashboard-card">
          <h2>{pendingTasks}</h2>
          <p>Pending</p>
        </div>

      </div>

      {/* Progress */}
      <div className="progress-section">

        <h2>Overall Progress</h2>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

        <p>{progress}% Completed</p>

      </div>

      {/* Actions */}
      <div className="admin-actions">

        <button onClick={() => navigate("/assign")}>
          Assign New Task
        </button>

        <button onClick={() => navigate("/calendar")}>
          View Student Dashboard
        </button>

      </div>

    </div>
  );
}

export default Admin;