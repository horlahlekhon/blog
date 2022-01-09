import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  text-align: ${props => (props.center ? "center" : "")};
  margin: auto;
  padding: 30px;
  width: 60%;
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
  }
`

// const BG = styled.section`
//   background-image: url(${props => props.postImage});
//   position: relative;
//   width: 100%;
//   height: 100%;

// `

const Container = ({ children, type, className, center }) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>

)

export default Container

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object,
}
