import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import{ Navbar, Container } from 'react-bootstrap'


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
    justify-content: center;
    padding: 0.5rem 0rem;

    span{
    display: block;
    height: 6px;
    width: 6px;
    border-radius: 10px;
    background: #DAB768;
    }

    a{
      position: relative;
      transition: all 2s;
      margin: 0 11px;

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
  width: 30%;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}
  }


`


const NavBar = () => (
  <Navbar expand="lg" style={{backgroundColor: '#fff', borderBottom: '1px solid #F5F5F5', position: 'sticky',
  top: '0', zIndex: '100' }}>
  <Container>
    <Navbar.Brand className="d-block d-lg-none"><Link to="/" style={{fontFamily: '"Playfair Display",serif',
    color: '#333',
    fontSize: '20px',}}>LeKode <span role="img" aria-label="emoji">👨‍💻</span></Link></Navbar.Brand>
    <Navbar.Toggle style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
     <Link to="/">Home</Link>
     <span></span>
     <Link to="/categories">Categories</Link>
     <span></span>
     <Link to="/gallery">Gallery</Link>
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

)

export default NavBar
