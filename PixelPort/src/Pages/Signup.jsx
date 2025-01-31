import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Signup.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); 

    try {
      const response = await axios.post('https://pixelport-2.onrender.com/api/auth/signup', {
        email,
        password,
        firstName,
        lastName,
      });
      console.log('Signup success:', response.data);
      window.location.href = '/login';
    } catch (error) {
      setIsLoading(false);  
      setError('Signup failed. Please try again later.');
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-heading">
          <h1>Let's get your account set up</h1>
          <p>Creating a portfolio in PixelPort</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="signup-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="guruvel@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="signup-input-group">
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

          <div className="signup-name-inputs">
            <div className="signup-input-group">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Guru"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="signup-input-group">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                placeholder="vel"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          {error && <span className="signup-error">{error}</span>}  
          
          <button type="submit" className="signup-create-btn" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create account'}
          </button>
          
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
