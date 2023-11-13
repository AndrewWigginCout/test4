import * as React from "react";
import { useState } from 'react'
//npm install --save-dev @testing-library/react @testing-library/jest-dom jest-environment-jsdom @babel/preset-env @babel/preset-react
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
// npm install --save-dev @testing-library/user-event
import userEvent from '@testing-library/user-event'

import { ContainerForTest } from "./ContainerForTest";

test('2', async ()=>{
// Why don't these lines work?
/*
  const [isOpen, setOpen] = useState(false);
  let container = render(<Test isOpen={isOpen} setOpen={setOpen}/>).container
*/
/* Instead, I can call the component with ordinary variables as props.
   I say I 'can' when really it's more like I 'must'.
*/

  let container = render(<ContainerForTest/>).container
  //screen.debug()
  const outer = container.querySelector('.outer')
  const inner = container.querySelector('.inner')
  expect(outer).toBeDefined()
  expect(inner).toBeDefined()
  expect(outer).toHaveTextContent('true')
  expect(inner).toHaveTextContent('False')
  // screen.debug(outer)
  // screen.debug(inner)

  const button = screen.getByText("click me!")
  expect(button).toBeDefined()

  const user = userEvent.setup()
  await user.click(button)

  expect(outer).toHaveTextContent('false')
  expect(inner).toHaveTextContent('True')
  // screen.debug(outer)
  // screen.debug(inner)

  await user.click(button)

  expect(outer).toHaveTextContent('true')
  expect(inner).toHaveTextContent('False')
  })
