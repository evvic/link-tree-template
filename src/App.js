import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  const rectangles = Array.from({ length: 12 }, (_, index) => {
    const sizeFactor = 100 - index * 8; // Decrease size for each rectangle
    const translateFactor = (100 - sizeFactor) / 2; // Translation based on size difference
    var amplifiedTranslateFactor = translateFactor * Math.pow(1.4, index); // Amplify translation for smaller rectangles
    const offset = index * 1; // Each rectangle starts 1% farther from the top-left corner

    for (let i = index; i >= 11; i--) {
      amplifiedTranslateFactor *= 1.22;
    }

    return (
      <div
        key={index}
        className="svg-block"
        style={{
          zIndex: index === 11 ? 12 : index + 1, // Smallest rectangle stays on top
          width: `${sizeFactor}%`,
          height: `${sizeFactor}%`,
          top: `${offset}%`, // Dynamic top offset
          left: `${offset}%`, // Dynamic left offset
          animationDelay: `${index * 0.05}s`, // Largest rectangle moves first
          '--translate-factor': `${amplifiedTranslateFactor}%`, // Amplified translation factor
        }}
      ></div>
    );
  });

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="background">{rectangles}</div>

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
    </div>
  );
}

export default App;