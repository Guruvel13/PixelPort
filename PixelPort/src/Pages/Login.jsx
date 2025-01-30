import React, { useState } from 'react';
import '../CSS/Login.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Function to handle email input changes
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError(''); // Reset email error when user types
    };

    // Function to handle password input changes
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError(''); // Reset password error when user types
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/dashboard";
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
                            onChange={handleEmailChange} // Function now defined
                            required
                        />
                        {emailError && <span className="login-error">{emailError}</span>}
                    </div>

                    <div className="login-input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            value={password}
                            onChange={handlePasswordChange} // Function now defined
                            required
                        />
                        {passwordError && <span className="login-error">{passwordError}</span>}
                    </div>

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
