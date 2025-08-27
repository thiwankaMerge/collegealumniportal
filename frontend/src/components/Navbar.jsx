import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    // <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
    //   <Link to="/" className="text-2xl font-bold">Task Manager</Link>
    //   <div>
    //     {user ? (
    //       <>
    //         <Link to="/tasks" className="mr-4">Tasks</Link>
    //         <Link to="/jobs">Jobs</Link> 
    //         <Link to="/Events">Events</Link> {/* ✅ Added */}
    //         <Link to="/profile" className="mr-4">Profile</Link>
    //         <button
    //           onClick={handleLogout}
    //           className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
    //         >
    //           Logout
    //         </button>
    //       </>
    //     ) : (
    //       <>
    //         <Link to="/login" className="mr-4">Login</Link>
    //         <Link
    //           to="/register"
    //           className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
    //         >
    //           Register
    //         </Link>
    //       </>
    //     )}
    //   </div>
    // </nav>
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
  <Link to="/" className="text-2xl font-bold">College Alumni Portal</Link>
  
  <div className="flex items-center space-x-4">
    {user ? (
      <>
        <Link to="/tasks">Tasks</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/events">Events</Link> {/* 🔄 Lowercase path for consistency */}
        <Link to="/profile">Profile</Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <Link to="/login">Login</Link>
        <Link
          to="/register"
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
        >
          Register
        </Link>
      </>
    )}
  </div>
</nav>

  );
};

export default Navbar;
