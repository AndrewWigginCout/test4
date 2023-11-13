import * as React from "react";
import { useState } from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
//import userEvent from '@testing-library/user-event'

import { Test } from "./Test";

test('2', ()=>{
// Why don't these lines work?
/*
  const [isOpen, setOpen] = useState(false);
  let container = render(<Test isOpen={isOpen} setOpen={setOpen}/>).container
*/
/* Instead, I can call the component with ordinary variables as props.
   I say I 'can' when really it's more like I 'must'.
*/

  let container = render(<Test isOpen={true} setOpen={()=>{}}/>).container
  })
