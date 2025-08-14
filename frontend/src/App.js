import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
 import Jobs from './pages/Jobs';       // ✅ Added
import Events from './pages/Events';   // ✅ Added
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/Jobs" element={<Jobs />} />       {/* ✅ New route */}
        <Route path="/events" element={<Events />} />   {/* ✅ New route */}
        <Route path="/lan" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
