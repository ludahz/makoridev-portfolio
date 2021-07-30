import { AiFillGithub, AiOutlineCloudServer } from 'react-icons/ai'
import {
  ProjectsContainer,
  Card,
  ImageContainer,
  Img,
  ContentContainer,
  ProjectTitle,
  ProjectDesc,
  SocialsContainer,
  SocialsDiv,
  CardButton,
  Stack,
  StackCard,
  P,
  TitleDiv,
  DescDiv,
  BottomDiv,
} from '../styles/components/projectCards'
import myProjects from '../constants/projects'
import { AiFillCloseCircle } from 'react-icons/ai'

const ProjectsCard = ({ currentId, state }) => {
  const display = myProjects.filter((project) => project.id === currentId)
  const { id, img, title, tech, despription, git, cloud } = display[0]
  return (
    <ProjectsContainer>
      <Card id={id}>
        <ImageContainer>
          <Img src={img} alt='Projects'></Img>
        </ImageContainer>
        <ContentContainer>
          <TitleDiv>
            <ProjectTitle>{title}</ProjectTitle>
          </TitleDiv>
          <StackCard>
            {tech.map((item, i) => (
              <Stack key={i}>
                <P>{item}</P>
              </Stack>
            ))}
          </StackCard>
          <DescDiv>
            <ProjectDesc>{despription}</ProjectDesc>
          </DescDiv>
          <BottomDiv>
            <SocialsContainer>
              <SocialsDiv>
                <a href={git}>
                  <AiFillGithub size='1.8rem' />
                </a>
              </SocialsDiv>
              <SocialsDiv>
                <a href={cloud}>
                  <AiOutlineCloudServer size='1.8rem' />
                </a>
              </SocialsDiv>
            </SocialsContainer>
          </BottomDiv>
        </ContentContainer>
        <CardButton>
          <AiFillCloseCircle
            size='2rem'
            onClick={() => {
              state(false)
            }}
          />
        </CardButton>
      </Card>
    </ProjectsContainer>
  )
}

export default ProjectsCard
