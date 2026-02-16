import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <h1 className="hero-title">Welcome to GitCollab</h1>
                <p className="hero-subtitle">
                    The ultimate platform for seamless developer collaboration.
                    Manage projects, track issues, and ship code faster together.
                </p>
                <button className="cta-button">Get Started Now</button>
            </section>

            <section className="features-section">
                <div className="feature-card">
                    <div className="feature-icon">🚀</div>
                    <h3 className="feature-title">Fast & Efficient</h3>
                    <p className="feature-description">
                        Experience lightning-fast performance with our optimized workflows designed for modern development teams.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🛡️</div>
                    <h3 className="feature-title">Secure by Design</h3>
                    <p className="feature-description">
                        Your code and data are protected with enterprise-grade security protocols and encryption.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🤝</div>
                    <h3 className="feature-title">Real-time Collab</h3>
                    <p className="feature-description">
                        Work together in real-time with live updates, comments, and integrated team communication tools.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;