import styled from 'styled-components'
import theme from '../themes/theme'
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100%;
  @media ${theme.breakpoints.md} {
    flex-direction: column;
  }
`

export const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 70vh;
  color: ${theme.colors.typeface};
  @media ${theme.breakpoints.md} {
    margin-left: 10%;
    width: 80%;
    min-height: 70vh;
  }
  @media ${theme.breakpoints.sm} {
    width: 100%;
    min-height: 60vh;
    margin: 0;
  }
`
export const RightSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 70vh;

  color: ${theme.colors.typeface};
  @media ${theme.breakpoints.md} {
    margin-left: 10%;
    width: 80%;
    height: 80vh;
  }
  @media ${theme.breakpoints.sm} {
    width: 100%;
    min-height: 70vh;
    margin: 0;
  }
`
export const LeftContainer = styled.div`
  background: rgb(0, 0, 0, 0.4);
  width: 90%;
  min-height: 60vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-image: ${theme.gradient.linear};
  @media ${theme.breakpoints.lg} {
    min-height: 66vh;
  }
`
export const RightContainer = styled.div`
  position: relative;
  background: rgb(0, 0, 0, 0.4);
  width: 90%;
  min-height: 60vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-image: ${theme.gradient.linear};
`

export const ContactContainer = styled.div`
  position: relative;
  width: 90%;
  min-height: 55vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.4);
  border-radius: 10px;
`

export const Form = styled.form`
  position: relative;
  width: 100%;
`

export const Input = styled.input`
  width: 90%;
  padding: 5px;
  border-width: 0 0 1px 0;
  border-color: ${theme.colors2.accent};
  outline: none;
  background: transparent;
  color: white;
  caret-color: white;
  font-size: 1rem;
  &:focus {
    background-color: rgb(0, 0, 0, 0.1);
  }
  &:focus ::after {
    background: white;
  }
`
export const TextArea = styled.textarea`
  width: 90%;
  height: 120px;
  outline: none;
  font-size: 1rem;
  background: transparent;
  color: white;
  border-width: 0 0 1px 0;
  padding: 10px;
  resize: none;
  border-color: ${theme.colors2.accent};
  @media ${theme.breakpoints.sm} {
    height: 140px;
  }
`

export const Button = styled.button`
  width: 30%;
  height: 30px;
  border: solid 2px ${theme.colors2.accent};
  color: ${theme.colors2.accent};
  border-radius: 5px;
  background: transparent;
`

export const ContentDiv = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`

export const InfoContainer = styled.div`
  position: relative;
  width: 90%;
  min-height: 55vh;
`
export const InfoDiv = styled.div`
  width: 100%;
  position: absolute;
  padding: 0 20px;
  margin: 0 auto;
  bottom: 70px;
`

export const SocialSection = styled.div`
  position: absolute;
  color: ${theme.colors2.accent};
  width: 100%;
  bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const SocialIcon = styled.a`
  color: ${theme.colors2.accent};
`
export const SocialDiv = styled.div`
  color: ${theme.colors2.accent};
  border: solid 2px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 8px 2px 8px;
  border-radius: 50%;
  transform: scale(0.9);
  @keyframes glow {
    0% {
      box-shadow: 0 0 ${theme.colors.secondary1};
      transform: scale(0.8);
    }
    50% {
      background: rgb(0, 0, 0, 1);
      transform: scale(0.9);
    }
    100% {
      box-shadow: 0px 0px 5px 10px transparent;
      border-width: 2px;
      transform: scale(0.9);
    }
  }
  &:hover {
    transition: all 1s ease-in-out;
    animation: glow 3s ease-in-out infinite;
  }
`

export const Line1 = styled.div`
  height: 2px;
  width: 80px;
  border: solid 1px ${theme.colors.secondary1};
  margin: 0 10px;
`
export const Line2 = styled.div`
  height: 2px;
  width: 80px;
  border: solid 1px ${theme.colors.secondary1};
  margin: 0 10px;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`
export const Span = styled.span`
  font-size: 0.9rem;
  margin-left: 10px;
  color: ${theme.colors2.secondary};
`

export const Label = styled.label`
  color: ${theme.colors2.accent};
`
export const LabelDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: left;
`
export const TopDiv = styled.div`
  position: relative;
  height: 170px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MailDiv = styled.div`
  position: absolute;
  transform: rotate(-20deg);
  color: ${theme.colors2.accent};
`
export const CallDiv = styled.div`
  position: absolute;
  margin: 10px;
  transform: rotate(-350deg);
  left: 10px;
  bottom: 30px;
  color: ${theme.colors.secondary1};
`
