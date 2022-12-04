import React from "react";
import CanvasComponent from "./Components/Canvas";

const Canvas = ({ text }) => {
  return (
    <div>
      <CanvasComponent text={text} />
    </div>
  );
};

export default Canvas;
