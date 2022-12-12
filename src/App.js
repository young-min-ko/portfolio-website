import React from 'react';
import Navbar from './components/navbar/Navbar.js';
import Profile from './components/profile/Profile.js'
const App = ()=>{
  return (
    <div data-testid = 'app'>
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;