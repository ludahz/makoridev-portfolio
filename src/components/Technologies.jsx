import {
	SiJavascript,
	SiReact,
	SiCss3,
	SiHtml5,
	SiTypescript,
} from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'

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
} from '../styles/components/technologies'

const Technologies = () => {
	return (
		<Section id='tech'>
			<Margin></Margin>
			<SectionTitle>
				<Title>Technologies</Title>
			</SectionTitle>
			<Container>
				<LeftSection>
					<ContentTitle>Technologies Experience</ContentTitle>
					<Content>
						I have strong profeciency in HTML, Javascript and css. I also have
						good experience with react library, nextjs framework. I am looking
						forward to gaining more experience with typescript, python and
						nodejs.
					</Content>
				</LeftSection>
				<RightSection>
					<IconContainer>
						<IconContent>
							<Icon>
								<SiJavascript color='#F0DB4F' size='3rem' />
							</Icon>
							<IconTitle>JavaScript</IconTitle>
						</IconContent>
						<IconContent>
							<Icon>
								<SiTypescript color='#007acc' size='3rem' />
							</Icon>
							<IconTitle>TypeScript</IconTitle>
						</IconContent>
						<IconContent>
							<Icon>
								<SiReact color='#61DBFB' size='3rem' />
							</Icon>
							<IconTitle>Reactjs</IconTitle>
						</IconContent>
						<IconContent>
							<Icon>
								<SiCss3 color='#264de4' size='3rem' />
							</Icon>
							<IconTitle>CSS</IconTitle>
						</IconContent>
						<IconContent>
							<Icon>
								<SiHtml5 color='#e34c26' size='3rem' />
							</Icon>
							<IconTitle>HTML5</IconTitle>
						</IconContent>
						<IconContent>
							<Icon>
								<DiNodejs color='#3C873A' size='3rem' />
							</Icon>
							<IconTitle>Nodejs</IconTitle>
						</IconContent>
					</IconContainer>
				</RightSection>
			</Container>
		</Section>
	)
}

export default Technologies
