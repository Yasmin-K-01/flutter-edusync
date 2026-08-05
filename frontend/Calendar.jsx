import React from "react";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";

function Calendar() {
  const navigate = useNavigate();

  const tasks = [
    {
      id: 1,
      title: "React Login Page",
      deadline: "10 Aug 2026",
      priority: "High",
      status: "Completed",
      assignedBy: "Ma'am"
    },
    {
      id: 2,
      title: "Calendar UI",
      deadline: "12 Aug 2026",
      priority: "Medium",
      status: "Pending",
      assignedBy: "Ma'am"
    },
    {
      id: 3,
      title: "Progress Bar",
      deadline: "15 Aug 2026",
      priority: "Low",
      status: "Upcoming",
      assignedBy: "Ma'am"
    }
  ];

  return (
    <div className="calendar-page">

      <header className="top-bar">
        <h1>Student Dashboard</h1>

        <button onClick={() => navigate("/login")}>
          Logout
        </button>
      </header>

      <section className="calendar-section">

        <h2>August 2026</h2>

        <div className="calendar-grid">

          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>

          <div>8</div>
          <div>9</div>
          <div className="task-day">10</div>
          <div>11</div>
          <div className="task-day">12</div>
          <div>13</div>
          <div>14</div>

          <div className="task-day">15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>

          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>

          <div>29</div>
          <div>30</div>
          <div>31</div>

        </div>

      </section>

      <section className="task-section">

        <h2>Assigned Tasks</h2>

        {tasks.map((task) => (

          <div className="task-card" key={task.id}>

            <h3>{task.title}</h3>

            <p>
              <strong>Deadline:</strong> {task.deadline}
            </p>

            <p>
              <strong>Priority:</strong> {task.priority}
            </p>

            <p>
              <strong>Assigned By:</strong> {task.assignedBy}
            </p>

            <p
              className={
                task.status === "Completed"
                  ? "completed"
                  : task.status === "Pending"
                  ? "pending"
                  : "upcoming"
              }
            >
              <strong>Status:</strong> {task.status}
            </p>

          </div>

        ))}

      </section>

    </div>
  );
}

export default Calendar;