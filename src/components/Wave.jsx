// src/components/Wave.jsx
import React from "react";

function Wave({ color = "#F9F4EE", bgColor = "#ffffff", className = "" }) {
  return (
    <div
      className={`wave-container ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 160 1440 160">
          <path
            fill={color}
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,266.7C672,267,768,213,864,202.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Wave;