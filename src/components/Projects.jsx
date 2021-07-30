import ProjectsCard from './ProjectsCard'
import ProjectV2 from './ProjectsV2'
import { useEffect, useState } from 'react'

import {
  Section,
  SectionTitle,
  Title,
  Container,
  LeftSection,
  ContentTitle,
  Content,
  Margin,
} from '../styles/globalSections'

import {
  RightSection,
  ProjectContainer,
  Overlay,
} from '../styles/components/projects'

const Projects = () => {
  let [currentId, setCurrentId] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    if (isActive === true) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isActive])

  return (
    <Section id='projects' className='project'>
      <Margin></Margin>

      <SectionTitle>
        <Title>Projects</Title>
      </SectionTitle>
      <Container>
        <LeftSection>
          <ContentTitle>My projects</ContentTitle>
          <Content>
            These are some of the projects that I have worked on. I have only
            included big projects. Smaller projects are available in my git
            repositories.
          </Content>
        </LeftSection>
        <RightSection>
          {/* <ContentTitle>Projects</ContentTitle> */}
          <ProjectContainer>
            <ProjectV2 current={setCurrentId} state={setIsActive} />
          </ProjectContainer>
        </RightSection>
      </Container>
      {isActive && (
        <Overlay>
          <ProjectsCard currentId={currentId} state={setIsActive} />
        </Overlay>
      )}
    </Section>
  )
}

export default Projects
