import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Logout from './Pages/Lougout'; 
import Setting from './Pages/Setting';

// ProtectedRoute component: Only renders the element if authenticated, otherwise redirects to login
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/setting" element={<ProtectedRoute element={<Setting />} />} />
        <Route path="/logout" element={<Logout />} /> {/* The logout route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
