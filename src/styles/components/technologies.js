import styled from 'styled-components'
import theme from '../themes/theme'
export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  @media ${theme.breakpoints.sd} {
    margin: 20px;
  }
  @media ${theme.breakpoints.sm} {
    margin: 10px;
  }
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  margin: 10px;
  background: ${theme.gradient.linear};
  height: 100px;
  width: 100px;
  padding: 10px;
  color: ${theme.colors.secondary1};
`

export const IconTitle = styled.h3`
  font-size: 1rem;
  color: ${theme.colors2.compliment};
`
