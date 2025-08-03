import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const BACKEND_URL = import.meta.env.BACKEND_URL || "https://bookhub-1-ijt4.onrender.com";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/login`, {
        email,
        password,
      });
      login(res.data);
      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="bg-orange-100 min-h-screen grid grid-cols-2 justify-center items-center">
    <div className="p-6 max-w-sm mx-auto bg-[#BB6653] min-h-[400px] rounded-lg shadow-lg">
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-orange-300 text-black py-2 rounded">Login</button>
      </form>
    </div>

    <div className="max-w-xl mx-auto">
        <img src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/b4ceb184-f02d-432e-81b5-d4f14439e975.png" alt=""
            className="w-full h-auto rounded-lg shadow-lg"
        />
    </div>
    </div>
  );
};

export default Login;
