import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-blue-700 to-purple-700 text-white p-6">

      <h1 className="text-2xl font-bold mb-8">
        ✨ Enlight Calendar
      </h1>

      <nav className="space-y-4">

        <Link to="/student" className="block hover:bg-white/20 p-3 rounded-lg">
          🏠 Dashboard
        </Link>

        <Link to="/calendar" className="block hover:bg-white/20 p-3 rounded-lg">
          📅 Calendar
        </Link>

        <Link to="/tasks" className="block hover:bg-white/20 p-3 rounded-lg">
          ✅ Tasks
        </Link>

        <Link to="/login" className="block hover:bg-white/20 p-3 rounded-lg">
          🚪 Logout
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;