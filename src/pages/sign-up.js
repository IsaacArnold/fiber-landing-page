import React, { useState } from "react";
import { Link } from "gatsby";
import HidePassword from "../images/svg/hide-password.svg";

import "../styles/normalize.css";
import "../styles/sign-up.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

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
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          E-mail
          <input
            type="text"
            value={email}
            placeholder="john@example.com"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="password">
          Password
          <input
            type={isRevealPwd ? "text" : "password"}
            value={password}
            placeholder="At least 8 characters"
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
            required={true}
            className="password-input"
          />
          <HidePassword
            className="password-svg"
            title={isRevealPwd ? "Hide password" : "Show password"}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          />
        </label>
        <label>
          <input type="checkbox" name="agree" required={true} />
          <p className="terms">
            By creating an account on Fiber, you agree to the{" "}
            <strong>Terms & Conditions.</strong>
          </p>
        </label>
        <button type="submit">Create Fiber Account</button>
      </form>
      <p className="sign-up-footer">
        Already have an account?{" "}
        <Link to="#" className="emph-footer">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
