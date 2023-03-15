import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthContextProvider';
import { login } from './redux/userSlice';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  // useContext: 好多组件都能用的 useState
  // const { updateAuthData } = useContext(AuthContext);

  const dispatch = useDispatch();

  const from = location.state?.from?.pathname || '/';

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // updateAuthData(username);
    dispatch(login(username))
    navigate(from, { replace: true });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h1>Login</h1>
          <form className="d-grid gap-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
