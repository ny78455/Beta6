import React from 'react';
import './SalesChart.css';

const SalesChart = () => {
  const handleConnectToVR = () => {
    alert('Connecting to VR...');
  };

  const handleFindDuo = () => {
    alert('Finding Duo...');
  };

  return (
    <div className="sales-chart-container">
      {/* Left Image with "Connect to VR" Button */}
      <div className="chart-section">
        <img
          src="src/assets/freepik__candid-image-photography-natural-textures-highly-r__3902-removebg-preview.png"
          alt="Sales Overview VR"
          className="sales-chart-image"
        />
        <button className="action-button" onClick={handleConnectToVR}>
          Connect to VR
        </button>
      </div>

      {/* Right Image with "Find Duo" Button */}
      <div className="chart-section">
        <img
          src="src/assets/freepik__3d-model-octane-render-volumetric-highly-detailed-__61968-removebg-preview.png"
          alt="Find Duo"
          className="sales-chart-image"
        />
        <button className="action-button" onClick={handleFindDuo}>
          Find Duo
        </button>
      </div>
    </div>
  );
};

export default SalesChart;
