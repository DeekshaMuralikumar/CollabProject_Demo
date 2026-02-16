import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    // List of team members for the dropdown
    const teamMembers = [
        { name: "Mukilan", email: "2k22cse091@gmail.com" },
        { name: "Kathirraj", email: "2k22cse071@gmail.com" },
        { name: "Kaviyashree", email: "gkaviyashree01@gmail.com" },
        { name: "Deeksha", email: "deekshamkt@gmail.com" }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        recipient: '' // Default to the first person
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the mailto link
        // encodeURIComponent ensures special characters in the message don't break the link
        const subject = `Message from ${formData.name}`;
        const body = `User Email: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        const mailtoLink = `mailto:${formData.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open Outlook / Default Mail Client
        window.location.href = mailtoLink;

        // Reset message field only (keep name/email if they want to send another)
        setFormData(prev => ({ ...prev, message: '' }));
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-subtitle">Select a team member to send them a direct message.</p>
            </div>

            <div className="contact-content">
                <form onSubmit={handleSubmit}>
                    {/* Recipient Dropdown */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="recipient">Send To</label>
                        {/* <select
                            id="recipient"
                            name="recipient"
                            className="form-input"
                            value={formData.recipient}
                            onChange={handleChange}
                        >
                            {teamMembers.map((member, index) => (
                                <option key={index} value={member.email}>
                                    {member.name} ({member.email})
                                </option>
                            ))}
                        </select> */}
                        <select
                            id="recipient"
                            name="recipient"
                            className="form-input"
                            value={formData.recipient}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select team member</option>
                            {teamMembers.map((member, index) => (
                                <option key={index} value={member.email}>
                                    {member.name} ({member.email})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;