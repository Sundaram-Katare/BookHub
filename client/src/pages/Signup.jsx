import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.BACKEND_URL || "https://bookhub-1-ijt4.onrender.com";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/api/auth/signup`, form);
      alert("Signup successful! You can now login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="bg-orange-100 min-h-screen grid grid-cols-2 justify-center items-center">
    <div className="p-6 max-w-sm mx-auto bg-[#BB6653] min-h-[400px] rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" required className="w-full p-2 border rounded"
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" required className="w-full p-2 border rounded"
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" required className="w-full p-2 border rounded"
          value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="w-full bg-orange-300 text-black py-2 rounded">Signup</button>
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

export default Signup;
