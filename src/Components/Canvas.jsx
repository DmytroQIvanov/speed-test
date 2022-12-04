import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function wrapText(context, text, marginLeft, marginTop, maxWidth, lineHeight) {
  var words = text.split(" ");
  var countWords = words.length;
  var line = "";
  for (var n = 0; n < countWords; n++) {
    var testLine = line + words[n] + " ";
    var testWidth = context.measureText(testLine).width;
    if (testWidth > maxWidth) {
      context.fillText(line, marginLeft, marginTop);
      line = words[n] + " ";
      marginTop += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, marginLeft, marginTop);
}
const CanvasComponent = ({ draw, height, width, text }) => {
  const canvas = useRef();
  useEffect(() => {
    const context = canvas.current.getContext("2d");
    context.font = "18px serif";
    // context.fillText(text, 50, 50);
    wrapText(context, text, 20, 20, 1300, 20);
  });

  return <canvas ref={canvas} height={1600} width={1400} />;
};
CanvasComponent.propTypes = {
  // draw: PropTypes.func.isRequired,
  // height: PropTypes.number.isRequired,
  // width: PropTypes.number.isRequired,
};
export default CanvasComponent;
