import React from "react";

const Input = ({labelText, handleFunction, value}) => {
    return(
        <div>
        {labelText}: <input onChange={handleFunction} value={value} />
      </div>
    )
  
};

export default Input;
