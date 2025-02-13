import React from 'react';

const TitleBar = () => {
  return (
    <div className="title-bar">
      <div className="title-bar-text">Pranav Subash Personal Portfolio</div>
      <div className="title-bar-controls">
        <button className="title-bar-button minimize" aria-label="Minimize"></button>
        <button className="title-bar-button maximize" aria-label="Maximize"></button>
        <button className="title-bar-button close" aria-label="Close"></button>
      </div>
    </div>
  );
};

export default TitleBar;