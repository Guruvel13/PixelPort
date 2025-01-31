import React, { useState } from 'react';
import { loginUser } from '../api'; 
import '../CSS/Login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error); // Display API error message
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-header">
          <h1>Let's log in to your account</h1>
          <p>You can log in to your PixelPort account below.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="login-input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="e.g., guruvel@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <span className="login-error">{error}</span>}
          <a href="/forgot-password" className="login-forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="login-email-btn">
            Continue with Email
          </button>
          <p>
            Don't have a PixelPort account yet? <a href="/sign-up">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
