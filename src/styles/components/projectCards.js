import styled from 'styled-components'
import theme from '../themes/theme'

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  position: relative;
  top: 20px;
`

export const Card = styled.div`
  min-height: 100vh;
  width: 400px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 40px;
  @media ${theme.breakpoints.sm} {
    width: 90%;
  }
  @media ${theme.breakpoints.md} {
    width: 330px;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 35vh;
  @media ${theme.breakpoints.sm} {
    height: 35vh;
  }
  @media ${theme.breakpoints.md} {
    height: 200px;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all ease-in 1s;
  border-radius: 10px 10px 0 0;
`

export const ContentContainer = styled.div`
  position: relative;
  background-image: linear-gradient(-120deg, #343a4f, #0f1620);
  min-height: 0vh;
  border-radius: 0 0 12px 12px;
`
export const ProjectTitle = styled.h2`
  color: ${theme.colors2.primary};
  font-weight: 600;
  font-size: 1.8rem;
  padding: 5px 24px;
  @media ${theme.breakpoints.md} {
    font-size: 1.6rem;
  }
`
export const ProjectStack = styled.h4`
  color: #f5e2c8;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 500;
  padding: 0 20px 5px;
`
export const ProjectDesc = styled.p`
  color: #f7fff7;
  font-weight: 400;
  font-size: 0.9rem;
  padding: 10px 20px;
  ul {
    padding: 0 10px 0 30px;
  }
`
export const SocialsContainer = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  padding: 12px 0;
  margin-left: 18px;
  border-radius: 8px;
  background: ${theme.gradient.linear};
`
export const SocialsDiv = styled.div`
  border: solid 1px;
  width: 120px;
  border-radius: 4px;
  margin: 0 auto;

  &:nth-child(1) {
    display: flex;
    justify-content: center;
    padding: 4px;
    transition: all ease-in 1s;
    color: ${theme.colors2.accent};
    background: rgb(0, 0, 0, 1);
    &:hover {
      background: ${theme.colors2.accent};
      color: black;
    }
  }
  &:nth-child(2) {
    display: flex;
    justify-content: center;
    padding: 4px;
    transition: all ease-in 1s;
    color: ${theme.colors2.accent};
    background: rgb(0, 0, 0, 1);

    &:hover {
      background: ${theme.colors2.accent};
      color: black;
    }
  }
`
export const CardButton = styled.span`
  top: 1px;
  right: 1px;
  position: absolute;
  :hover {
    cursor: pointer;
  }
`
export const StackCard = styled.div`
  position: relative;
  padding: 20px 20px;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  height: 40px;
  width: 100%;
  @media ${theme.breakpoints.sm} {
    display: none;
  }
  @media ${theme.breakpoints.sd} {
    display: none;
  }
`
export const Stack = styled.div`
  border: solid 1px #2d2747;
  border-radius: 3px;
  margin: 5px 3px;
  padding: 2px 5px;
  background: rgb(0, 0, 0, 0.4);
`
export const P = styled.p`
  font-size: 14px;
  color: ${theme.colors2.accent2};
`
export const TitleDiv = styled.div`
  max-width: 100%;
  @media ${theme.breakpoints.sm} {
    padding: 2px 0;
  }
`
export const DescDiv = styled.div`
  margin-bottom: 20px;
  @media ${theme.breakpoints.sm} {
    padding: 5px 0;
  }
`
export const BottomDiv = styled.div`
  position: relative;
  width: 100%;
  bottom: 10px;
  padding: 10px 0;
`
