import Link from 'next/link'
import { useState } from 'react'

import {
  Nav,
  Logo,
  Span,
  NavLi,
  NavUl,
  Menu,
  MenuBar,
  MenuLi,
  MenuUl,
  Overlay,
  Line1,
  Line2,
  Line3,
} from '../styles/components/navbar'

const NavBar = () => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    if (active === false) {
      setActive(true)
    } else {
      setActive(false)
    }
  }
  const handleMenu = () => {
    setActive(false)
  }
  return (
    <>
      <Nav>
        <Logo>
          <Link href='/#home'>
            <a onClick={handleMenu}>
              <Span>Makori</Span>
            </a>
          </Link>
        </Logo>
        <NavUl>
          <NavLi>
            <Link href='/#about'>
              <a>About</a>
            </Link>
          </NavLi>
          <NavLi>
            <Link href='/#tech'>
              <a>Technologies</a>
            </Link>
          </NavLi>
          <NavLi>
            <Link href='/#projects'>
              <a>Projects</a>
            </Link>
          </NavLi>
          <NavLi>
            <Link href='/#contact'>
              <a>Contact</a>
            </Link>
          </NavLi>
        </NavUl>

        <MenuBar onClick={handleClick}>
          <Line1 className='line1'></Line1>
          <Line2 className='line2'></Line2>
          <Line3 className='line3'></Line3>
          {active && (
            <style jsx>
              {`
                .line1 {
                  top: 18px;
                  -webkit-transform: rotate(135deg);
                  -moz-transform: rotate(135deg);
                  -o-transform: rotate(135deg);
                  transform: rotate(135deg);
                }
                .line2 {
                  opacity: 0;
                  left: -60px;
                }
                .line3 {
                  top: 18px;
                  -webkit-transform: rotate(-135deg);
                  -moz-transform: rotate(-135deg);
                  -o-transform: rotate(-135deg);
                  transform: rotate(-135deg);
                }
              `}
            </style>
          )}
        </MenuBar>
      </Nav>
      {active && (
        <Overlay>
          <Menu>
            <MenuUl onClick={handleMenu}>
              <MenuLi>
                <Link href='/#about'>
                  <a>About</a>
                </Link>
              </MenuLi>
              <MenuLi>
                <Link href='/#tech'>
                  <a>Technologies</a>
                </Link>
              </MenuLi>
              <MenuLi>
                <Link href='/#projects'>
                  <a>Projects</a>
                </Link>
              </MenuLi>
              <MenuLi>
                <Link href='/#contact'>
                  <a>Contact</a>
                </Link>
              </MenuLi>
            </MenuUl>
          </Menu>
        </Overlay>
      )}
    </>
  )
}

export default NavBar
