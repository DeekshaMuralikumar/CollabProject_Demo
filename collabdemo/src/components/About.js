import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="about-title">About GitCollab</h1>
                <p className="about-subtitle">
                    This project is created as a team collaboration
                    using React.
                </p>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <h3>Our Mission</h3>
                    <p>
                        Our goal is to build a simple and responsive single-page application
                        where each team member contributes to different sections.
                    </p>

                    <p>
                        We aim to learn teamwork, Git collaboration, and React development
                        by building this project together.
                    </p>
                </div>

                <div className="about-image">
                    <div className="placeholder-img">🌐</div>
                </div>
            </div>

            <div className="team-section">
                <h2 className="team-title">Meet the Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <div className="member-avatar">👩‍💻</div>
                        <h4 className="member-name">Kathir</h4>
                        <p className="member-role">Team Leader</p>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">👨‍💻</div>
                        <h4 className="member-name">Mukilan</h4>
                        <p className="member-role">Home_Page_Designer</p>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">👨‍💻</div>
                        <h4 className="member-name">Kaviyashree</h4>
                        <p className="member-role">About_Page_Designer</p>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">👨‍💻</div>
                        <h4 className="member-name">Deeksha</h4>
                        <p className="member-role">Contact_Page_Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;