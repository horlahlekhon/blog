import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import logo from '../../static/logo/header-logo.png';
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import{ Navbar, Container } from 'react-bootstrap'


// const StyledLink = styled(Link)`
//   display: flex;
//   font-weight: 700;
//   align-items: center;
// `

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    text-decoration: none;
    text-align: right;
    width: 100%;
    
  a {
    position: relative;
    font-family: "Playfair Display",serif;
    font-size: 15px;
    text-transform: uppercase;
    color: #333;
    letter-spacing: 3px;
    padding: 7px 11px;
    margin: 0;

  }

span{
  display: none;
}

  @media screen and (min-width: 992px){
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 4rem;

    span{
    display: block;
    height: 7px;
    width: 7px;
    border-radius: 10px;
    background: #DAB768;
    }

    a{
      position: relative;
      transition: all 2s;
    }

    a:after{
      position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: #DAB768;
  height: 2px;
  transition: all 500ms;
    }


  a:hover:after {
  width: 50%;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}
  }


`
// const Name = styled.p`
//   font-weight: 500;
//   font-size: 1.1rem;
//   margin-top: 35px;
//   align-items: center;
//   a {
//     color: ${props => props.theme.colors.white.base};
//     margin-left: 2rem;
//     transition: all ${props => props.theme.transitions.default.duration};
//     &:hover {
//       color: ${props => props.theme.colors.white.grey};
//     }
//   }

// `

const NavBar = () => (
  <Navbar expand="lg" style={{backgroundColor: '#fff', borderBottom: '1px solid #F5F5F5' }}>
  <Container>
    <Navbar.Brand className="d-block d-lg-none"><Link to="/" style={{fontFamily: '"Playfair Display",serif',
    color: '#333',
    fontSize: '20px',}}>LeKode <span role="img" aria-label="emoji">👨‍💻</span></Link></Navbar.Brand>
    <Navbar.Toggle style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
     <Link to="/">Home</Link>
     <span></span>
     <Link to="/dev">Dev</Link>
     <span></span>
     <Link to="/rants">Rants</Link>
     <span></span>
     <Link to="/about">About</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  // <Headroom calcHeightOnResize disableInlineStyles>
  //   {/* <StyledLink to="/"> */}
  //   {/* <img src={logo} alt="Gatsby Logo" /> */}
  //   <Nav><Link to="/"> Olalekan Adebari</Link></Nav>
  //   {/* </StyledLink> */}
  //   <Nav>
  //     <Link to="/">Home</Link>
  //     <Link to="/dev">Dev</Link>
  //     <Link to="/rants">Rants</Link>
  //     <Link to="/about">About</Link>
  //     <a href="https://github.com/horlahlekhon">
  //       <GitHubIcon />
  //     </a>
  //     <a href="https://mobile.twitter.com/1nesAndZer0s">
  //       <TwitterIcon />
  //     </a>
  //   </Nav>
  // </Headroom>
)

export default NavBar
