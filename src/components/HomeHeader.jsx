import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import PropTypes from "prop-types"


const Wrapper = styled.header`
  background-image: url(${props => props.headerImage});
   @media (max-width: ${props => props.theme.breakpoints.s}) {
    -webkit-clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
    clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
  }
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 275px;
  }
  position: relative;
  overflow: hidden;
`

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
`

const HomeHeader = ({ children, title, date, cover, headerImage }) => (
  <Wrapper headerImage={headerImage}>
    <Img fluid={cover || {} || [] || ""} />
    <Text>
      <h1>{title}</h1>
      <h3>{date}</h3>
      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
)

export default HomeHeader

HomeHeader.propTypes = {
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

HomeHeader.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
}