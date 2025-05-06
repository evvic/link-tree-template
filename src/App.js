import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Background from './background'; // Import the Background component
import Footer from './footer'; // Import the Footer component

function App() {
  return (
    <div className="App">
      {/* Animated Background */}
      <Background />

      <div className="container">
        {/* Profile Section */}
        <div className="profile">
          <img
            src="https://i.seadn.io/s/raw/files/b5f14b666829791d1ec5e3c8aac8f584.png?auto=format&dpr=1&w=1400&fr=1"
            alt="Profile"
            className="profile-picture"
          />
          <h1 className="name creator-name">Video Creator</h1>
          <p className="description">Support my social media Journey!</p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>

        {/* Affiliate Link */}
        <div className="links">
          <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="link">
            Shop: Tech gear recommended by my coworker
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;