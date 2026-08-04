import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />

        <Route path="/staff-dashboard" element={<StaffDashboard />} />

        <Route path="/calendar" element={<Calendar />} />

        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;