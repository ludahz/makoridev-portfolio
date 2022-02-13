import BackgroundAnimation from './BackgroundAnimation'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'

import {
	Section,
	SectionHeader,
	SectionSmallHeader,
	SocialIcons,
	SocialLinks,
	Span,
	LeftSection,
	RightSection,
	Arrow,
} from '../styles/components/intro'

const Intro = () => {
	return (
		<Section id='home'>
			<LeftSection>
				<SectionSmallHeader>
					Hi, I{"'"}m <Span>Makori</Span>
				</SectionSmallHeader>
				<SectionHeader>Web Developer</SectionHeader>
				<SocialLinks>
					<SocialIcons
						href='https://github.com/ludahz'
						target='_blank'
						rel='noopener noreferrer'
					>
						<AiFillGithub size='1.8rem' />
					</SocialIcons>

					<SocialIcons
						href='https://www.linkedin.com/in/lawrence-makori-230bb348/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<AiFillLinkedin size='1.8rem' />
					</SocialIcons>
				</SocialLinks>
			</LeftSection>
			<RightSection>
				<BackgroundAnimation />
			</RightSection>
			<Arrow>
				<Link href='/#about'>
					<a>
						<IoIosArrowDown size='4rem' />
					</a>
				</Link>
			</Arrow>
		</Section>
	)
}

export default Intro
