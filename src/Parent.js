import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF")

  function handleColorChange(newChildColor) {
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)
    setChildColor(newChildColor)
  }


  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleColorChange} color={childColor}/>
      <Child onChangeColor={handleColorChange} color={childColor}/>
    </div>
  );
}

export default Parent;
