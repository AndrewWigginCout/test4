import * as React from "react";
import { render } from "react-dom";
import { Test } from "./Test";
import { App } from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");
render(<App />, rootElement);