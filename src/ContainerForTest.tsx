// https://codesandbox.io/s/usestate-boolean-basic-example-iepcl
import React, { useState } from "react";
import { Test } from "./Test";

export const ContainerForTest = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="ContainerForTest">
      <h2 className="outer">{JSON.stringify(!isOpen)}</h2>
      <Test isOpen={isOpen} setOpen={setOpen}/>
    </div>
  );
};
