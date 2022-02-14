import { GiSpeedometer } from 'react-icons/gi'
import { DiResponsive } from 'react-icons/di'
import { AiOutlineInteraction } from 'react-icons/ai'
import { FcPositiveDynamic } from 'react-icons/fc'
import { FiChevronsRight } from 'react-icons/fi'

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
	Ul,
	Span,
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
						I am a self taught Web Developer with a computer science background,
						and I am eager to contribute developed knowledge in web development
						role. I have a passion for javascript, and a growing curiosity of
						effects and animations. I have a genuine interest of learning new
						technology, staying updated and always looking for new challenges to
						further develop my skills.
					</Content>
				</LeftSection>
				<RightSection>
					<ContentTitle>My goals</ContentTitle>
					<Content>
						<Ul>
							<li>
								<Span>
									<FiChevronsRight size='1rem' />
								</Span>
								Build applications that are fast, interactive, responsive and
								dynamic.
							</li>
							<li>
								<Span>
									<FiChevronsRight size='1rem' />
								</Span>
								Have well organized content, user friendly site with effective
								calls to action.
							</li>
							<li>
								<Span>
									<FiChevronsRight size='1rem' />
								</Span>
								Improve interaction with existing and potential customers.
							</li>
							<li>
								<Span>
									<FiChevronsRight size='1rem' />
								</Span>
								Providing quality content to websites by regularly adding new
								information and establishing trust.
							</li>
						</Ul>
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
