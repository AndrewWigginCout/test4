import * as React from "react";
import { render } from "react-dom";
import { Test } from "./Test";

export const App = () =>{
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2 className="outer">{JSON.stringify(!isOpen)}</h2>
      <h2>Start editing to see some magic happen!</h2>
      <Test isOpen={isOpen} setOpen={setOpen}/>
    </div>
  );
}