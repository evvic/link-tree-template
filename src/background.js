import React from 'react';
import './App.css'; // Ensure styles for .svg-block and .background are included

function Background() {
  const rectangles = Array.from({ length: 12 }, (_, index) => {
    const sizeFactor = 100 - index * 8; // Decrease size for each rectangle
    const translateFactor = (100 - sizeFactor) / 2; // Translation based on size difference
    let amplifiedTranslateFactor = translateFactor * Math.pow(1.4, index); // Amplify translation for smaller rectangles
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

  return <div className="background">{rectangles}</div>;
}

export default Background;
