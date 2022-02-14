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
						As a Web Developer I must continue learning about the latest
						technologies, be able to use better programming practices and
						explore new fields.
						<br />I am constantly developing personal and code along projects in
						order to sharpen my skills.
						<br />
						Some of the projects I have worked on are listed below.
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
