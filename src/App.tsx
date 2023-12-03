import { useState } from 'react'

import './App.scss'
import Sidebar from './components/sidebar/Sidebar'
import ContentBlock from './components/ContentBlock'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faHome, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

function App() {

  const block_list = [
    ['greeter', faHome],
    ['about', faUser],
    ['work', faUserGraduate],
    ['skills', faCode],
    ['contact', faEnvelope]
  ]

  return (
    <>
      <Sidebar block_list={block_list} />


      <ContentBlock block_name={block_list[0][0].toString()}>
        <h1>Test?</h1>
      </ContentBlock>
      <ContentBlock block_name={block_list[1][0].toString()}>
        <h1>Test?</h1>
      </ContentBlock>
      <ContentBlock block_name={block_list[2][0].toString()}>
        <h1>Test?</h1>
      </ContentBlock>
      <ContentBlock block_name={block_list[3][0].toString()}>
        <h1>Test?</h1>
      </ContentBlock>
      <ContentBlock block_name={block_list[4][0].toString()}>
        <h1>Test?</h1>
      </ContentBlock>
    </>
  )
}

export default App;
