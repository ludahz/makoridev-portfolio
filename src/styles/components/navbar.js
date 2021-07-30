import styled from 'styled-components'
import theme from '../themes/theme'

export const Nav = styled.nav`
  height: 50px;
  background: rgba(0, 0, 0, 0.4);

  color: ${theme.colors.typeface};

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;
`

export const Logo = styled.div`
  display: none;
  position: absolute;
  left: 20px;
  @media ${theme.breakpoints.md} {
    margin: 0;
  }
  @media ${theme.breakpoints.md} {
    position: absolute;
    left: 10px;
  }
`

export const Span = styled.span`
  font-weight: 500;
  font-size: 2.2rem;
`

export const NavUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 1rem;
  margin: 0 10px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLi = styled.li`
  margin: 10px;
  font-weight: 500;
  font-size: 1.2rem;
`

export const MenuBar = styled.div`
  display: none;
  @media ${theme.breakpoints.md} {
    display: block;
    right: 10px;
    top: 5px;
    width: 45px;
    height: 45px;
    position: absolute;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    transform: scale(0.8);
  }
`
export const Overlay = styled.div`
  height: 100vh;
  position: fixed;
  backdrop-filter: blur(18px);
  top: 0;
  width: 90%;
  background-image: ${theme.gradient.linear};
  z-index: 2;
  /* @media (min-width: 768px) {
    display: none;
  } */
`

export const Menu = styled.div`
  position: relative;
  @media ${theme.breakpoints.sm} {
    margin: 20% 0;
  }
`

export const Line1 = styled.div`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #efe9f4;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  top: 2px;
`
export const Line2 = styled.div`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #efe9f4;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  top: 17px;
`
export const Line3 = styled.div`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #efe9f4;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  top: 32px;
`
export const MenuUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30%;
`
export const MenuLi = styled.li`
  color: ${theme.colors2.primary};
  font-weight: 500;
  font-size: 2rem;
  margin: 10px 0;
`
