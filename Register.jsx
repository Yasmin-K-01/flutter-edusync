import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", form);

      alert("Registration Successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />

        <input
          className="w-full border p-2 mb-3"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <input
          className="w-full border p-2 mb-3"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />

        <select
          className="w-full border p-2 mb-3"
          name="role"
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>

        <button className="bg-blue-600 text-white w-full p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;