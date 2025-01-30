import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/LandingPage.css"
import PixelPortLogo from '../Img/PixelPort.jpg';

function LandingPage() {
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src={PixelPortLogo} alt="PixelPort Logo" />
                    <h3>PixelPort</h3>
                </div>
                <div className="actions">
                    <Link to="/login">
                        <button className="primary-l">Login</button>
                    </Link>
                    <Link to="/sign-up">
                        <button className="primary">Get Started</button>
                    </Link>
                </div>
            </header>
            <main>
                <h1>Create Your Own FolioByte & Showcase Your Life's Work</h1>
                <p>PixelPort aggregates everything you've ever written or recorded and generates a beautiful portfolio page  so you can showcase, share, and save your life's work.</p>
                <Link to="/sign-up">
                    <button className="cta">Create Your Portfolio</button>
                </Link>
                <p>...or take a look at PixelPort's features:</p>

                <section className="features">
                    <div className="feature">
                        <h3>Portfolio</h3>
                        <p>Get a self-updating portfolio page.</p>
                    </div>
                    <div className="feature">
                        <h3>Skills</h3>
                        <p>Get a self-showcase skills</p>
                    </div>
                    <div className="feature">
                        <h3>Project</h3>
                        <p>Get a self-share of projects</p>
                    </div>
                    <div className="feature">
                        <h3>Tracking</h3>
                        <p>Find out where and when your content is created.</p>
                    </div>
                    <div className="feature">
                        <h3>Account</h3>
                        <p>Secure your content privately .</p>
                    </div>
                    <div className="feature">
                        <h3>UI</h3>
                        <p>Get a user-friendly UI experience.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default LandingPage;
