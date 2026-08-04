import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async(e)=>{

    e.preventDefault();

    try{

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );


      localStorage.setItem(
        "token",
        response.data.token
      );


      if(response.data.role==="student"){
        navigate("/student-dashboard");
      }
      else{
        navigate("/staff-dashboard");
      }


    }
    catch(error){

      alert(
        "Login failed"
      );

    }

  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">

      <form 
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >

        <h1 className="text-3xl font-bold text-center text-blue-700">
          Enlight Calendar
        </h1>


        <input
          className="w-full mt-6 p-3 border rounded-lg"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          className="w-full mt-4 p-3 border rounded-lg"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button
          className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg"
        >
          Login
        </button>
        <p className="text-center mt-4">
  Don't have an account?{" "}
  <span
    className="text-blue-600 cursor-pointer"
    onClick={() => navigate("/register")}
  >
    Register
  </span>
</p>


      </form>

    </div>

  );

}

export default Login;