// https://codesandbox.io/s/usestate-boolean-basic-example-iepcl
import React, { useState } from "react";

export const Test = ({isOpen, setOpen}) => {

  return (
    <div>
      {isOpen ? "True" : "False"}
      <div>
        <button onClick={() => setOpen(!isOpen)}>click me!</button>
      </div>
    </div>
  );
};
