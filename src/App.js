import React from 'react';
import Navbar from './components/navbar/Navbar.js';
import Profile from './components/profile/Profile.js'
import Projects from './components/projects/Projects.js'
import TechStack from './components/techStack/TechStack.js'
import Contact from './components/contact/Contact.js'


const App = ()=>{
  return (
    <div data-testid = 'app'>
      <Navbar />
      <Profile />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  )
}

export default App;