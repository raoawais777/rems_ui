import React from 'react';
import { NavLink } from 'react-router-dom';
import '../AuthPages/style.css';


const SignUp = () => {
  return (
    <form action="#" className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" required />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" required />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" required  />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
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

export default SignUp;
