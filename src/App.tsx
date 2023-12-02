import { useState } from 'react'

import './App.scss'
import Sidebar from './components/sidebar/Sidebar'
import ContentBlock from './components/ContentBlock'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

function App() {

  return (
    <>
      <Sidebar />



      <ContentBlock block_name="greeter">
      </ContentBlock>
      <ContentBlock block_name="about">
      </ContentBlock>
      <ContentBlock block_name="skill">
      </ContentBlock>
      <ContentBlock block_name="project">
      </ContentBlock>
      <ContentBlock block_name="contact">
      </ContentBlock>
    </>
  )
}

export default App;
