import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const Navbar = ({toggleDarkMode}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();


  
  return (
    <nav className="bg-orange-300 dark:bg-neutral-600  p-4 flex justify-between">
      <Link to="/" className="font-extrabold text-blue-800 dark:text-blue-400 text-4xl">Book<span className="text-black dark:text-white">Hub</span></Link>
      <div className="space-x-4 text-black dark:text-white">
        {user ? (
          <>
            <span className="text-xl text-black font-semibold">Hi, {user.name}</span>
            <button onClick={() => { logout(); navigate("/"); alert("Logged out") }} className="bg-black text-white px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <>
          <button onClick={toggleDarkMode} className="text-md">
            Toggle Theme
          </button>
            <Link to="/login" >Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
