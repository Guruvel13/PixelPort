import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the authentication token from localStorage
    localStorage.removeItem('token');

    // Optionally clear any other user-related data
    // localStorage.removeItem('userData');

    // Redirect the user to the login page after logout
    navigate('/login');
  }, [navigate]);

  return null; // You can show a "Logging out..." message if desired.
};

export default Logout;
