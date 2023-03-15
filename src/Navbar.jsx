import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { AuthContext } from './AuthContextProvider';
import { logout } from './redux/userSlice';

const Navbar = () => {
  // const { authData, updateAuthData } = useContext(AuthContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isloggedIn = !!user.name;
  const handleLogout = () => {
    // updateAuthData(null);
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            {isloggedIn ? (
              <li className="nav-item">
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login">
                  <button className="btn btn-outline-secondary">Login</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
