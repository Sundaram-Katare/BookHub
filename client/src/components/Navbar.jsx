import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-orange-300 text-white p-4 flex justify-between">
      <Link to="/" className="font-extrabold text-blue-800 text-4xl">Book<span className="text-black">Hub</span></Link>
      <div className="space-x-4">
        {user ? (
          <>
            <span className="text-xl text-black font-semibold">Hi, {user.name}</span>
            <button onClick={() => { logout(); navigate("/"); alert("Logged out") }} className="bg-black text-white px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-black">Login</Link>
            <Link to="/signup" className="text-black">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
