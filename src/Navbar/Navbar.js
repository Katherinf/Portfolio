import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="MFlix">
                <h2>About Me</h2>
            </div>
            <div className="Login">
                <h4>Login</h4>
                <h4>Sign up</h4>
            </div>
        </div>
    );
}