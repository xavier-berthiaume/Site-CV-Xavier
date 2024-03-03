import './App.scss'
import Sidebar from './components/sidebar/Sidebar'
import ContentBlock from './components/ContentBlock'
import { faCode, faEnvelope, faHome, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import InfoBox from './components/info-box/InfoBox'
import ImageGlow from './components/image-glow/ImageGlow'

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
        <h1 className="greeter-title">Hi there, <br />&ensp;I'm Xavier</h1>
      </ContentBlock>
      <ContentBlock block_name={block_list[1][0].toString()}>
        <h1 className="about-title">A bit about me</h1>
      </ContentBlock>
      <ContentBlock block_name={block_list[2][0].toString()}>
        <h1 className="work-title">My Experience</h1>
        <div className="centering-div">
          <InfoBox box_name="test" box_width={16}>
            <ImageGlow
              src="https://picsum.photos/230/345?random=0"
              alt="Glowing Image"
              width={230}
              height={345}
            />
            <h1>Test</h1>
            <p>test further content</p>
          </InfoBox>
          <InfoBox box_name="test2" box_width={25}>
            <h1>Test</h1>
            <p>test further content</p>
          </InfoBox>
          <InfoBox box_name="test3" box_width={35}>
            <h1>Test</h1>
            <p>test further content</p>
          </InfoBox>
        </div>
      </ContentBlock>
      <ContentBlock block_name={block_list[3][0].toString()}>
        <h1 className="skills-title">My Skills</h1>
      </ContentBlock>
      <ContentBlock block_name={block_list[4][0].toString()}>
        <h1 className="contact-title">Contact Me</h1>
      </ContentBlock>
    </>
  )
}

export default App;
