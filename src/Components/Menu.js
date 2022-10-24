import React from "react";

import Color from "./Color";

/* Add any imports you think you might need here! */
//Thank you: https://stackoverflow.com/questions/52792923/react-can-you-pass-state-handler-down-multiple-child-component-layers
const Menu = ({ click }) => {
  return (
    <div className="colorOptions">
      <Color color="red" handleClick={click}></Color>
      <Color color="pink" handleClick={click}></Color>
      <Color color="blue" handleClick={click}></Color>
      <Color color="green" handleClick={click}></Color>
    </div>
  );
};

export default Menu;
