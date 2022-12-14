import React from 'react';
import {cleanup, fireEvent, render, screen, waitfor} from '@testing-library/react';
// components
import App from '../App.js';

afterEach(cleanup);


it ('App component should render', async ()=>{
  const app = render(<App />);
  expect(app).toBeTruthy();
})