import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  margin: 10px 0;
  border-radius: 2px;
  max-width: 100%;
    width: 100%;
    height: 200px;
`

const StyledLink = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  width: 100%;
  z-index: 50;


  @media screen and (min-width: 768px){
    margin: 15px;
  }

`

const Image = styled.div`
  display: block;
  margin: 20px 0;
  border-radius: 2px;

  img{ 
    width: 100% !important;
    height: 200px !important;
    border-radius: 2px;

  }

`

const Info = styled.div`
display: block;
p{
  text-align: center;
  word-spacing: 3px;
}

p a{
  color: #DAB768;
  letter-spacing: 5px;
  font-family: 'Open Sans', sans-serif;
}

p a:hover{
  text-decoration: underline #111;
}

p span{
border-bottom: 1px dashed #555;
}
`

const Title = styled.h1`
text-align: center;

&:hover{
  text-decoration: underline;
}
`

const TechList = ({cover, title, date, path, languages, database }) => (

<div className="d-block d-lg-flex m-auto">
  <Wrapper>
    <Image>
      <Img fluid={cover} />
      </Image>
   
  </Wrapper>
   <StyledLink>
   <Info>
     {/* the path will link to the website You hosted already I.E Live WebApps */}
     <Title><a href={`https://${path}/`}target="_blank" rel="noopener noreferrer">{title}</a></Title>
     <p>Made live on <span>{date}</span> </p>
     <p>Languages: {languages}</p>
     <p>Database: {database}</p>
   </Info>
 </StyledLink>
 </div>


)

export default TechList

TechList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  languages: PropTypes.string,
  database: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  
}
