import React from 'react';
import {cleanup, fireEvent, render, screen, waitfor} from '@testing-library/react';
// components
import Profile from '../App.js';

afterEach(cleanup);


it ('Navbar component should render', async ()=>{
  const profile = render(<Profile />);
  expect(profile).toBeTruthy();
})