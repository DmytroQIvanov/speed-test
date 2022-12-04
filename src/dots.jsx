import React, { useEffect } from "react";

const Dots = ({ text }) => {
  let textReactNode = [];

  // useEffect(() => {
  for (let i = 0; i <= text.length - 1; i++) {
    textReactNode.push(
      <span>
        {text[i]}
        <span style={{ opacity: 0, position: "absolute", userSelect: "none" }}>
          .
        </span>
      </span>
    );
  }
  // }, []);

  return <div style={{ userSelect: "none" }}>any{textReactNode}</div>;
};

export default Dots;
