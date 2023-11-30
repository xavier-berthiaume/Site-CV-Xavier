import { useState } from 'react'

import './App.scss'
import Sidebar from './components/sidebar/Sidebar'
import GreeterLayout from './components/GreeterLayout'
import SkillLayout from './components/SkillLayout'
import ProjectLayout from './components/ProjectLayout'
import ContactLayout from './components/ContactLayout'
import AboutLayout from './components/AboutLayout'

function App() {

  return (
    <>
      <Sidebar />
      <GreeterLayout />
      <AboutLayout />
      <SkillLayout />
      <ProjectLayout />
      <ContactLayout />
    </>
  )
}

export default App;
