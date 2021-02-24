import React from "react";

const Button = ({ text, handleFunction }) => (
  <button type="submit" onClick={handleFunction}>
    {text}
  </button>
);

export default Button;
