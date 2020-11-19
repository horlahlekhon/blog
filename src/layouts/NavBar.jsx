import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Headroom from "react-headroom"
// import logo from '../../static/logo/header-logo.png';
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"


const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`
const Name = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  margin-top: 35px;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }

`

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    {/* <StyledLink to="/"> */}
    {/* <img src={logo} alt="Gatsby Logo" /> */}
    <Nav><Link to="/"> Olalekan Adebari</Link></Nav>
    {/* </StyledLink> */}
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/dev">Dev</Link>
      <Link to="/rants">Rants</Link>
      <Link to="/about">About</Link>
      <a href="https://github.com/horlahlekhon">
        <GitHubIcon />
      </a>
      <a href="https://mobile.twitter.com/1nesAndZer0s">
        <TwitterIcon />
      </a>
    </Nav>
  </Headroom>
)

export default NavBar
