import React from "react";

const Svg = ({ text }) => {
  return (
    <div>
      <svg height="100%" width="100%">
        <text x="0" y="15" fill="red">
          {text}
        </text>
      </svg>
    </div>
  );
};

export default Svg;
