import styled from 'styled-components'
import theme from '../styles/themes/theme'

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
`
export const SectionTitle = styled.div`
  width: 100%;
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 5rem;
  padding-left: 10px;
  letter-spacing: 0.01rem;
  color: ${theme.colors2.accent};

  @media ${theme.breakpoints.md} {
    font-size: 4rem;
  }
  @media ${theme.breakpoints.sm} {
    font-size: 3rem;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const LeftSection = styled.div`
  width: 100%;
  height: 50%;
  padding: 30px;
  color: ${theme.colors.typeface};
  @media ${theme.breakpoints.md} {
    width: 100%;
  }
`
export const RightSection = styled.div`
  width: 100%;
  padding: 30px;
  color: ${theme.colors.typeface};
  @media ${theme.breakpoints.md} {
    width: 100%;
  }
`

export const ContentTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${theme.colors2.accent2};
  color: #949dff;
`

export const Content = styled.p`
  font-size: 1rem;
  color: ${theme.colors2.typeface3};
  margin: 0 100px;
  padding: 10px 0;

  text-align: center;
  @media ${theme.breakpoints.md} {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
`
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
  margin: 30px;
  @media ${theme.breakpoints.sd} {
    margin: 20px;
  }
  @media ${theme.breakpoints.sm} {
    margin: 10px;
  }
`

export const Icon = styled.div`
  border-radius: 10%;
  margin: 10px;
  border: solid #820263;
  border: solid 1px ${theme.colors.secondary1};
  background: ${theme.colors2.accent2};
  background: #000000;
  height: 100px;
  width: 100px;
  text-align: center;
  padding: 10px;
  color: ${theme.colors.secondary1};
`

export const IconTitle = styled.h3`
  color: ${theme.colors2.accent3};
  color: #fff694;
`
export const Margin = styled.div`
  height: 40px;
`
