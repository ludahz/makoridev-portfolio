import myProjects from '../constants/projects'
import {
  Container,
  Card,
  ImageContainer,
  Img,
  Info,
  Title,
  Fieldset,
  Legend,
  H3,
  Stack,
  StackCard,
  P,
  Button,
  ButtonDiv,
} from '../styles/components/projectsV2'

const ProjectV2 = ({ current, state }) => {
  return (
    <Container>
      {myProjects.map(({ id, img, title, tech }) => (
        <Card key={id} className='card'>
          <ImageContainer>
            <Img src={img} alt='projects'></Img>
          </ImageContainer>
          <Info className='info'>
            <Title className='title'>{title}</Title>
            <Fieldset>
              <Legend>
                <H3 className='description'>Stack</H3>
              </Legend>
              <StackCard>
                {tech.map((item, i) => (
                  <Stack key={i}>
                    <P>{item}</P>
                  </Stack>
                ))}
              </StackCard>
            </Fieldset>

            <ButtonDiv>
              <Button
                id={id}
                onClick={() => {
                  {
                    current((current = id))
                    state(true)
                  }
                }}
              >
                DETAILS
              </Button>
            </ButtonDiv>
          </Info>
        </Card>
      ))}
    </Container>
  )
}

export default ProjectV2
