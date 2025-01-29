import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/LandingPage.css"

function LandingPage() {
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src="logo.svg" alt="PixelPort Logo" />
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
                        <h3>Archive</h3>
                        <p>Get automated backups of all content you create.</p>
                    </div>
                    <div className="feature">
                        <h3>Analytics</h3>
                        <p>Learn how your content performs on social media.</p>
                    </div>
                    <div className="feature">
                        <h3>Tracking</h3>
                        <p>Find out where and when your content is published.</p>
                    </div>
                    <div className="feature">
                        <h3>Collections</h3>
                        <p>Curate your content privately or share it.</p>
                    </div>
                    <div className="feature">
                        <h3>Newsletter</h3>
                        <p>Let your subscribers know about your new content.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default LandingPage;
