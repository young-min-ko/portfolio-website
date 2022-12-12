import React from 'react';
import {cleanup, fireEvent, render, screen, waitfor} from '@testing-library/react';
// components
import Navbar from '../components/navbar/Navbar.js';

afterEach(cleanup);


it ('Navbar component should render', async ()=>{
  const app = render(<Navbar />);
  expect(app).toBeTruthy();
})