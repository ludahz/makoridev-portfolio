import styled from 'styled-components'
import theme from '../themes/theme'

export const RightSection = styled.div`
  width: 100%;
  padding: 0 0 30px 0;
  color: ${theme.colors.typeface};
  @media ${theme.breakpoints.md} {
    width: 100%;
  }
`

export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;

  height: 100vh;
  width: calc(100vw - 15%);
  z-index: 3;
  backdrop-filter: blur(8px);

  overflow: scroll;
  animation: fadeIn 0.3s ease;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @media ${theme.breakpoints.md} {
    width: calc(100vw - 10%);
  }
`
