import React, { useState } from "react";
import "../components/style/forgot.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.example.com/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Forgot password request successful:", data);
    } catch (error) {
      console.error(
        "There was an error with the forgot password request:",
        error
      );
    }
  };

  return (
    <div className="wrapper">
      <div className="fp-container">
        <div className="text-section">
          <h2 className="title">Reset Password</h2>
          <p className="para">Enter Your Email to reset the password and After Request Please check Your Email for Reset Link</p>
        </div>

        <form className="fp-form" onSubmit={handleForgotPassword}>
          <div className="fp-input-field">
            <label className="label" htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="icon">&#9993;</span>
          </div>
          <button type="submit" className="btn-fp">
            Send Request
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
