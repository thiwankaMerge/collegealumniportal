// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Landing = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     if (user) {
//       navigate('/tasks'); // Redirect to dashboard if logged in
//     } else {
//       navigate('/login'); // Otherwise, prompt login
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
//       <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
//         Welcome to Task Manager
//       </h1>
//       <p className="text-lg text-gray-700 mb-8 max-w-xl">
//         Organize your life by managing tasks, job applications, and events — all in one place.
//       </p>

//       <button
//         onClick={handleGetStarted}
//         className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-200 mb-6"
//       >
//         {user ? 'Go to Dashboard' : 'Get Started'}
//       </button>

//       {!user && (
//         <div className="flex space-x-4">
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Login
//           </Link>
//           <Link to="/register" className="text-blue-600 hover:underline">
//             Register
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Landing;
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Landing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (user) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
        Welcome to Task Manager
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        Organize your life by managing tasks, job applications, and events — all in one place.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <button
          onClick={() => handleNavigate('/tasks')}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Go to Tasks
        </button>
        <button
          onClick={() => handleNavigate('/jobs')}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Go to Jobs
        </button>
        <button
          onClick={() => handleNavigate('/events')}
          className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition"
        >
          Go to Events
        </button>
      </div>

      {!user && (
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="text-blue-600 hover:underline"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Landing;
