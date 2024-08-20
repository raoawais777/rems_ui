import React from 'react';
import SignIn from '../Pages/AuthPages/LoginPage';
import SignUp from '../Pages/AuthPages/SignUpPage';
import '../Pages/AuthPages/style.css'; // Import your CSS file

const Login = () => {
  const handleSignUpClick = () => {
    document.querySelector(".container").classList.add("sign-up-mode");
  };

  const handleSignInClick = () => {
    document.querySelector(".container").classList.remove("sign-up-mode");
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <SignIn />
          <SignUp />
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="login.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="reg.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
