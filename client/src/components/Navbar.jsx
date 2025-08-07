import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GitHubIcon from "./GithubIcon";
import LogoutModal from "./LogoutModal";
import toast from "react-hot-toast";
import Logo from "./Logo";
import { useState } from "react";
const Navbar = ({ toggleDarkMode }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    logout();
    navigate("/");
    setShowLogoutModal(false);
    toast.success("Logged out successfully");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <nav className="bg-orange-300 dark:bg-neutral-600 p-4 flex justify-between">
        <Logo classname={"font-extrabold text-blue-800 text-4xl"} />
        <div className="space-x-4 text-black dark:text-white">
          {user ? (
            <>
              <Link
                to="/favorites"
                className="text-black hover:text-blue-800 font-semibold transition-colors"
              >
                Favorites
              </Link>
              <span className="text-xl text-black font-semibold">
                Hi, {user.name}
              </span>
              <button
                onClick={handleLogoutClick}
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

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
    </>
  );
};

export default Navbar;
