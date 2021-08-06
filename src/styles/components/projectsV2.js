import styled from 'styled-components'
import theme from '../themes/theme'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  .info::before {
    z-index: -1;
    display: block;
    position: absolute;
    content: ' ';
    width: 100%;
    height: 100%;
    overflow: hidden;
    filter: blur(10px);
    background-size: cover;
    opacity: 0.25;
    transform: translateY(-100%) translateY(88px) translateZ(0);
    transition: transform 0.5s ease-out;
  }
  .card:hover .info,
  .card:hover .info::before {
    transform: translateY(0) translateZ(0);
  }
`
export const Card = styled.div`
  position: relative;
  border-radius: 5px;
  margin: 10px 5px;
  width: 320px;

  height: 236px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  background-size: cover;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
`
export const Img = styled.img`
  width: 100%;
  height: 95%;
  overflow: hidden;
`

export const Info = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: linear-gradient(-120deg, #343a4f, #0f1620);
  transform: translateY(100%) translateY(-110px) translateZ(0);
  transition: transform 0.5s ease-out;
`

export const Title = styled.h1`
  margin: 0;
  padding: 10px 18px;
  font-size: 25px;
  font-weight: 600;
  line-height: 1;
  color: rgba(245, 240, 240, 0.8);
  color: ${theme.colors2.typeface3};
`

export const P = styled.p`
  font-size: 14px;
  color: ${theme.colors2.secondary};
`
export const H3 = styled.h3`
  font-weight: 500;
  margin: 0;

  font-size: 18px;
  color: ${theme.colors2.secondary};
`
export const StackCard = styled.div`
  position: relative;
  padding: 0 20px;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  height: 100px;
`
export const Stack = styled.div`
  border: solid 1px #2d2747;
  border-radius: 3px;
  margin: 0 3px 10px;
  padding: 2px 5px;
  background: rgb(0, 0, 0, 0.1);
`

export const ButtonDiv = styled.div`
  position: relative;
  margin: 22px 0;
  width: 100%;
  text-align: center;
  bottom: 10px;
  z-index: 5;
`
export const Button = styled.button`
  font-weight: 400;
  font-size: 1rem;
  width: 80px;
  height: 35px;
  color: ${theme.colors2.accent};

  background: rgb(0, 0, 0, 0.2);
  border-radius: 3px;
  border: none;
  border: solid 1px ${theme.colors2.accent};
  cursor: pointer;
  transition: all 1s ease;
  &:hover {
    background: ${theme.colors2.accent};
    color: black;
  }
  @keyframes glow {
    0% {
      box-shadow: 0 0 ${theme.colors2.accent2};
    }
    50% {
      background: rgb(0, 0, 0, 1);
    }
    100% {
      box-shadow: 0px 5px 10px 8px transparent;
    }
  }
`

export const Fieldset = styled.fieldset`
  position: relative;
  padding: 0;
  height: 130px;
  background: rgb(0, 0, 0, 0.4);
  margin: 0 2px;
  border: solid 1px ${theme.colors2.accent2};

  border-radius: 3px;
`
export const Legend = styled.legend`
  margin: 0 20px;
  padding: 0 1px;
`
