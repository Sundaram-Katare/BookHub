import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GitHubIcon from "./GithubIcon";

const Navbar = ({ toggleDarkMode }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-orange-300 dark:bg-neutral-600 p-4 flex justify-between">
      <Link to="/" className="font-extrabold text-blue-800 dark:text-blue-400 text-4xl">
        Book<span className="text-black dark:text-white">Hub</span>
      </Link>
      <div className="space-x-4 text-black dark:text-white">
        {user ? (
          <>
            <span className="text-xl text-black font-semibold">
              Hi, {user.name}
            </span>
            <button
              onClick={() => {
                logout();
                navigate("/");
                alert("Logged out");
              }}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={toggleDarkMode} className="text-md">
              Toggle Theme
            </button>
            <Link to="/login" className="text-black dark:text-white">
              Login
            </Link>
            <Link to="/signup" className="text-black dark:text-white">
              Signup
            </Link>
          </>
        )}
        <a
          href="https://github.com/Sundaram-Katare/BookHub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          title="View on GitHub"
        >
          <GitHubIcon className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
