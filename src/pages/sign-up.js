import React, { useState } from "react";
import { Link } from "gatsby";

import "../styles/normalize.css";
import "../styles/sign-up.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-up-layout">
      <h1>
        <Link to="/" className="link">
          Fiber
        </Link>
      </h1>
      <h2>Create your Fiber account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            type="text"
            value={name}
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          E-mail
          <input
            type="text"
            value={email}
            placeholder="john@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            placeholder="At least 8 characters"
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="agree"
            placeholder="At least 8 characters"
            required="true"
          />
          By creating an account on Fiber, you agree to the Terms & Conditions.
        </label>
        <button type="submit">Create Fiber Account</button>
      </form>
      <p>Already have an account? Sign in</p>
    </div>
  );
};

export default SignUp;
