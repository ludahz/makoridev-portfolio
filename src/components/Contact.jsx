import {
  Section,
  SectionTitle,
  Title,
  ContentTitle,
  Margin,
} from '../styles/globalSections'

import {
  Container,
  LeftSection,
  LeftContainer,
  InfoContainer,
  TopDiv,
  MailDiv,
  InfoDiv,
  Info,
  Span,
  RightSection,
  RightContainer,
  SocialDiv,
  SocialIcon,
  SocialSection,
  Line1,
  Line2,
  ContactContainer,
  ContentDiv,
  Form,
  Label,
  LabelDiv,
  TextArea,
  Button,
  Input,
} from '../styles/components/contact'

import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import { FiPhoneIncoming } from 'react-icons/fi'
import { RiMailSendLine } from 'react-icons/ri'
import { FaUserEdit } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiMessage2Fill } from 'react-icons/ri'
import { useFormspark } from '@formspark/use-formspark'
import { useState } from 'react'

const Contact = () => {
  const [submit, submitting] = useFormspark({
    formId: process.env.FORMSPARK_FORM_ID,
  })

  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    await submit({ message })
    alert('Form submitted')
  }
  return (
    <Section id='contact'>
      <Margin></Margin>

      <SectionTitle>
        <Title>Contact</Title>
      </SectionTitle>
      <Container>
        <LeftSection>
          <LeftContainer>
            <ContentTitle>Contact Info</ContentTitle>
            <InfoContainer>
              <TopDiv>
                <MailDiv>
                  <RiMailSendLine size='4rem' />
                </MailDiv>
              </TopDiv>
              <InfoDiv>
                <Info>
                  <AiOutlineMail size='1.2rem' />
                  <Span> ludahmaxs@gmail.com</Span>
                </Info>
                <Info>
                  <FiPhoneIncoming size='1.2rem' />
                  <Span> +919986628817</Span>
                </Info>
              </InfoDiv>

              <SocialSection>
                <Line1></Line1>
                <SocialDiv>
                  <SocialIcon href='https://www.linkedin.com/in/lawrence-makori-230bb348/'>
                    <AiFillLinkedin size='1.5rem' />
                  </SocialIcon>
                </SocialDiv>
                <Line2></Line2>
              </SocialSection>
            </InfoContainer>
          </LeftContainer>
        </LeftSection>
        <RightSection>
          <RightContainer>
            <ContentTitle>Contact Me</ContentTitle>
            <ContactContainer>
              <Form action='https://submit-form.com/XS1q10g4'>
                <ContentDiv>
                  <LabelDiv>
                    <Label htmlFor='name'>Name</Label>
                  </LabelDiv>
                  <Input type='hidden' name='_feedback.dark' value='true' />

                  <Input type='text' name='name'></Input>
                </ContentDiv>
                <ContentDiv>
                  <LabelDiv>
                    <Label htmlFor='email'>E-Mail</Label>
                  </LabelDiv>
                  <Input type='email' name='email' required={true}></Input>
                </ContentDiv>
                <ContentDiv>
                  <LabelDiv>
                    <Label htmlFor='message'>Your Message</Label>
                  </LabelDiv>

                  <TextArea
                    type='text'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></TextArea>
                </ContentDiv>
                <ContentDiv>
                  <Button type='submit' disabled={submitting}>
                    Send
                  </Button>
                </ContentDiv>
              </Form>
            </ContactContainer>
          </RightContainer>
        </RightSection>
      </Container>
      <style>
        {`
          input:-webkit-autofill,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus, 
          input:-webkit-autofill:active  {
            -webkit-text-fill-color: #ffffff;
            -webkit-box-shadow: 0 20px 10px 10px black inset !important;
          }
        `}
      </style>
    </Section>
  )
}

export default Contact
