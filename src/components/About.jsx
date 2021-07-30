import { GiSpeedometer } from 'react-icons/gi'
import { DiResponsive } from 'react-icons/di'
import { AiOutlineInteraction } from 'react-icons/ai'
import { FcPositiveDynamic } from 'react-icons/fc'

import {
  Section,
  SectionTitle,
  Title,
  Container,
  LeftSection,
  ContentTitle,
  Content,
  RightSection,
  Margin,
} from '../styles/globalSections'

import {
  Icon,
  IconContainer,
  IconContent,
  IconTitle,
} from '../styles/components/about'

const About = () => {
  return (
    <Section id='about' className='about'>
      <Margin></Margin>
      <SectionTitle>
        <Title>About</Title>
      </SectionTitle>
      <Container>
        <LeftSection>
          <ContentTitle>About me</ContentTitle>
          <Content>
            I am a self taught Web Developer, and I am eager to contribute
            developed knowledge in Front-End Web Development role.I have a
            passion for javascript, and a growing curiosity of effects and
            animations.
          </Content>
        </LeftSection>
        <RightSection>
          <ContentTitle>My goals</ContentTitle>
          <Content>
            My objective is to build applications that are fast, interactive,
            responsive and dynamic.
          </Content>
          <IconContainer>
            <IconContent>
              <Icon>
                <GiSpeedometer size='4rem' />
              </Icon>
              <IconTitle>Fast</IconTitle>
            </IconContent>
            <IconContent>
              <Icon>
                <DiResponsive size='4rem' />
              </Icon>
              <IconTitle>Responsive</IconTitle>
            </IconContent>
            <IconContent>
              <Icon>
                <AiOutlineInteraction size='4rem' />
              </Icon>
              <IconTitle>Interactive</IconTitle>
            </IconContent>
            <IconContent>
              <Icon>
                <FcPositiveDynamic size='4rem' />
              </Icon>
              <IconTitle>Dynamic</IconTitle>
            </IconContent>
          </IconContainer>
        </RightSection>
      </Container>
    </Section>
  )
}

export default About
