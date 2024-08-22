import React from 'react';
import { NavLink } from 'react-router-dom';
import '../AuthPages/style.css';

const SignIn = () => {
  return (
    <form action="#" className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" required />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" required  />
      </div>
      <NavLink to="/forgot-password" className="forgot">
         Forgot Password
        </NavLink>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <NavLink to="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </NavLink>
        <NavLink to="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </NavLink>
        <NavLink to="#" className="social-icon">
          <i className="fab fa-google"></i>
        </NavLink>
        <NavLink to="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </NavLink>
      </div>
    </form>
  );
};

export default SignIn;
