import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Calendar from "./Calendar";
import Admin from "./Admin";
import AssignTask from "./AssignTask";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Default Page */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Student Dashboard */}
          <Route path="/calendar" element={<Calendar />} />

          {/* Ma'am Dashboard */}
          <Route path="/admin" element={<Admin />} />

          {/* Assign Task */}
          <Route path="/assign" element={<AssignTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;