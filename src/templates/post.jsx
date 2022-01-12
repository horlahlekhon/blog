import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { SEO, TagsBlock } from "components"
import MainHeader from "../components/MainHeader"
import "../styles/prism"
import PostLayout from "../layouts/PostLayout"
import {Content } from "layouts"
import NavBar from "../layouts/NavBar"
import { Col, Container, Row } from "react-bootstrap"

const SmContainer = styled.div`
  padding: 30px;
`

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex: 1 1;
  background: #f2f2f2;
 margin: 1rem 0;
 padding: 20px;
 border-radius: 2px;
`
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;


  h3{
    font-size: 18px !important;
    font-family: "Playfair Display", serif;
  }

  h3:hover{
    text-decoration: underline;
  }
`


const PageNameHolder = styled.div`
display: inline-block;
    background: #DAB768;
    padding: 10px 40px;
    border-radius: 2px;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #333;
    margin: 30px 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Playfair Display", serif;
`

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { html, frontmatter, excerpt } = data.markdownRemark
  const { date, title, tags, subtitle, path, description, author } = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid


const Title = styled.h1`
    text-align: center;
    font-size: 28px !important;

  @media screen and (min-width: 992px){
    font-size: 44px !important;
  }
`

const TitleWrapper = styled.div`
display: block;
`

const Subtitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: antiquewhite;

  p{
  font-size: 16px !important;
  word-spacing: 3px;
 padding: 5px;

  }

p:nth-child(1){
  flex: 3 0;
}
p:nth-child(2){
  flex: 2 0;
 
}

p a{
  color: #DAB768;
  letter-spacing: 5px;
  font-family: 'Open Sans', sans-serif;
}

p a:hover{
  text-decoration: underline #111;
}

    
`
  // const postDate = new Date(date)
  return (
    <PostLayout>
      <SEO
        title={title}
        description={description || excerpt || " "}
        banner={image}
        pathname={path}
        article
      />
     <div className="d-block d-md-none">
      <MainHeader title={title} headerImage={image.src}>
        {subtitle}
      </MainHeader>
      <SmContainer>
      <PageNameHolder>
           <span>Rant</span>
        </PageNameHolder>
          <TitleWrapper>
            <Title>
              {title}
            </Title>
            <Subtitle>
            <p>Posted on <span>{date}</span> by <Link to="/about">{author}</Link></p>
            <p>Reading Time: 4 mins</p>
            </Subtitle>
          </TitleWrapper>
        
        <Content input={html} />
        <TagsBlock list={tags || []} />
      
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
      </SmContainer>
      </div>

      <Container className="d-none d-md-block" fluid>
  <Row>
    <Col md={4}> 
    <MainHeader title={title} headerImage={image.src}>
        {subtitle}
      </MainHeader>
        </Col>
    <Col md={8} style={{padding: '0 25px'}}>
    <NavBar />
<div style={{padding: '0 55px'}}>
<PageNameHolder>
           <span>Rant</span>
        </PageNameHolder>

        <TitleWrapper>
            <Title>
              {title}
            </Title>
            <Subtitle>
            <p>Posted on <span>{date}</span> by <Link to="/about">{author}</Link></p>
            <p>Reading Time: 4 mins</p>
            </Subtitle>
          </TitleWrapper>
        <Content input={html} />
        <TagsBlock list={tags || []} />
      
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
      </div>
      </Col>
  </Row>
</Container>
    </PostLayout>
  )
}

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
}

// duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }

export const query = graphql`
query ($pathSlug: String) {
  markdownRemark(frontmatter: {path: {eq: $pathSlug}, category: {eq: "rants"}}) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      tags
      subtitle
      author
      cover {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
          resize(width: 956, height: 400, quality: 90) {
            src
          }
        }
      }
    }
  }
}

`
