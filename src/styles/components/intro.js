import styled from 'styled-components'
import theme from '../themes/theme'
export const Section = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const LeftSection = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  line-height: 1.5;
  background: rgb(0, 0, 0, 0.8);
  @media ${theme.breakpoints.sm} {
    width: 100%;
    height: 200px;
    padding: 10px;
  }
`

export const SectionSmallHeader = styled.h3`
  color: ${theme.colors.typeface};
  font-size: 30px;
  font-weight: 500;
  transition: 1s ease all;
  animation: fadeIn ease 4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media ${theme.breakpoints.sd} {
    font-size: 21px;
  }
  @media ${theme.breakpoints.sm} {
    font-size: 21px;
  }
`

export const Span = styled.span`
  color: ${theme.colors2.secondary2};
`

export const SectionHeader = styled.h1`
  color: ${theme.colors2.primary};

  font-size: 100px;
  text-align: center;
  line-height: normal;
  animation-name: fadeInLeft;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 3s;
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translatex(-100px);
      -moz-transform: translatex(-100px);
      -o-transform: translatex(-100px);
      transform: translatex(-100px);
    }
    to {
      opacity: 1;
      -webkit-transform: translatex(0);
      -moz-transform: translatex(0);
      -o-transform: translatex(0);
      transform: translatex(0);
    }
  }
  @media ${theme.breakpoints.lg} {
    font-size: 95px;
  }
  @media ${theme.breakpoints.md} {
    font-size: 70px;
  }
  @media ${theme.breakpoints.sd} {
    font-size: 48px;
  }
  @media ${theme.breakpoints.sm} {
    font-size: 38px;
  }
  @media ${theme.breakpoints.ml} {
    font-size: 42px;
  }
  @media ${theme.breakpoints.mm} {
    font-size: 35px;
  }
  @media ${theme.breakpoints.ms} {
    font-size: 32px;
  }
`

export const SocialLinks = styled.div`
  width: 140px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  cursor: pointer;
  z-index: 1;
`

export const SocialIcons = styled.a`
  border: solid 2px ${theme.colors2.compliment};
  color: ${theme.colors2.compliment};
  display: flex;
  padding: 8px;
  border-radius: 50%;
  transform: scale(0.8);
  @keyframes glow {
    0% {
      box-shadow: 0 0 2px 2px ${theme.colors2.compliment};
    }
    50% {
      box-shadow: 0 0 2px 5px ${theme.colors2.compliment};
    }
    100% {
      box-shadow: 0 0 2px 10px transparent;
    }
  }
  &:hover {
    animation: glow 2s ease;
  }
`

export const RightSection = styled.div`
  /* border: solid; */
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 80%;
  @media ${theme.breakpoints.sd} {
    top: 20px;
    right: 1px;
    width: 60%;
  }
`

export const Arrow = styled.div`
  position: relative;
  bottom: -90px;
  color: ${theme.colors2.accent};

  width: 100%;
  text-align: center;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: pulse;
  @keyframes pulse {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @media ${theme.breakpoints.lg} {
    bottom: -30px;
  }
  @media ${theme.breakpoints.md} {
    bottom: -60px;
  }
  @media ${theme.breakpoints.sd} {
    bottom: -170px;
  }
  @media ${theme.breakpoints.sm} {
    bottom: -120px;
  }
`
