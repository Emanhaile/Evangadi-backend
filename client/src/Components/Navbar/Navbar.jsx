import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import evangadilogo from '../../Images/0a0679d9-6cde-4a23-a3a5-88617777c215.png';

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Any necessary side effects can be handled here
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <nav className="bg-white border-b border-yellow-500">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="flex items-center">
          <img src={evangadilogo} className="h-10" alt="Evangadi logo" />
        </Link>
        <div className="flex items-center space-x-4 md:space-x-6 ">
          <ul className="flex space-x-5 ">
            <li>
              <Link to="#" className="text-gray-700 hover:text-blue-600 no-underline hover:underline">
                How
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-700 hover:text-blue-600 no-underline hover:underline">
                How it works
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={logout}
            className="px-4 py-2 border bg-blue-600 border-red-600 text-white rounded hover:bg-blue-700 hover:text-white transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
