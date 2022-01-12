import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import headerLogo from '../images/header-logo.png'
import Footer from "../layouts/Footer"


const Wrapper = styled.header`
  background-image: url(${props => props.headerImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 250px;
  position: relative;
  overflow: hidden;
  z-index: 1000;

  @media screen and (min-width: 768px){
    top:  0;
    left: 0;
    height: 100%;
    width: 35%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    position: fixed;

    .d-md-block{
      position: absolute;
       bottom: 0 !important;
       color: #fff !important;
    }

  }
`

const Text = styled.div`
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 70rem;
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;

  h1{
    font-family: "Playfair Display",serif;
    color: #ffffff;
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  @media screen and (min-width: 768px){
    top: 25%;
  }

  @media screen and (min-width: 992px){
    h1{
      font-size: 40px !important;
    }
  }

 
`

const Subtitle = styled.p`
  color: #ececec !important;
  text-shadow: 3px 2px 5px #111;
`

const MainHeader = ({ children, title, date, cover, headerImage }) => (
  <Wrapper headerImage={headerImage}>
    <Text>
    <img src={headerLogo} alt="header-logo"/>
      <h1>{title}</h1>
      <h3>{date}</h3>
      {children && <Subtitle>{children}</Subtitle>}
      </Text>
      <div className="d-none d-md-block">
      <Footer/>
      </div>
  </Wrapper>
)

export default MainHeader

MainHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  headerImage: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
}

MainHeader.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
}