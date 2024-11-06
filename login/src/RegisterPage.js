import React from "react";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2>CODERS & DEVELOPERS CLUB</h2>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Team</li>
          <li>Events</li>
          <li>Verify</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="register-form">
        <h1>REGISTER HERE</h1>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Phone No:</label>
            <input type="text" placeholder="Phone no" />
          </div>
          <div className="form-group">
            <label>College Name:</label>
            <input type="text" placeholder="College Name" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
