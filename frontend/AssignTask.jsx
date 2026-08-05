import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AssignTask.css";

function AssignTask() {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    assignedDate: "",
    deadline: "",
    assignedTo: "",
    priority: "Medium"
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      task.title === "" ||
      task.description === "" ||
      task.assignedDate === "" ||
      task.deadline === "" ||
      task.assignedTo === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    alert("Task Assigned Successfully!");

    setTask({
      title: "",
      description: "",
      assignedDate: "",
      deadline: "",
      assignedTo: "",
      priority: "Medium"
    });
  };

  return (
    <div className="assign-container">

      <div className="assign-box">

        <h1>Assign Task</h1>

        <form onSubmit={handleSubmit}>

          <label>Task Name</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Task Name"
            value={task.title}
            onChange={handleChange}
          />

          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Enter Task Description"
            value={task.description}
            onChange={handleChange}
          ></textarea>

          <label>Assigned Date</label>
          <input
            type="date"
            name="assignedDate"
            value={task.assignedDate}
            onChange={handleChange}
          />

          <label>Deadline</label>
          <input
            type="date"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
          />

          <label>Assign To</label>
          <input
            type="text"
            name="assignedTo"
            placeholder="Student Name"
            value={task.assignedTo}
            onChange={handleChange}
          />

          <label>Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <div className="button-group">

            <button type="submit">
              Assign Task
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin")}
            >
              Back
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AssignTask;