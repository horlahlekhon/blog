import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import { PostList } from "../components"
import MainHeader from "../components/MainHeader"
import { Layout } from "layouts"
import indexHeader from "../images/index_image_header.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Col, Row } from "react-bootstrap"
import NavBar from "../layouts/NavBar"

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0.5rem 1.5rem;
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
`

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Helmet title={"Olalekan - Adebari"} />
      <div className="d-block d-md-none">
    
      <MainHeader title="Home sweet home" headerImage={indexHeader}>Soon, we shall all understand; there is so much bugs
        in softwares that poetry can solve </MainHeader>
        
        <PageNameHolder>
           <span>Home</span>
        </PageNameHolder>
      <PostWrapper>
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node
          const { cover, path, title, date, author, subtitle } = frontmatter
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
              author={author}
              subtitle={subtitle}
            />
          )
        })}
      </PostWrapper>
      </div>
      <Container className="d-none d-md-block" fluid>
  <Row>
    <Col md={4}> 
    <MainHeader title="Home sweet home" headerImage={indexHeader}>Soon, we shall all understand; there is so much bugs
        in softwares that poetry can solve </MainHeader>
        </Col>
    <Col md={8} style={{padding: '0 25px'}}>
    <NavBar />
<div style={{padding: '0 55px'}}>
    <PageNameHolder>
           <span>Home</span>
        </PageNameHolder>
      <PostWrapper>
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node
          const { cover, path, title, date, author, subtitle } = frontmatter
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
              author={author}
              subtitle={subtitle}
            />
          )
        })}
      </PostWrapper>
      </div>
      </Col>
  </Row>

</Container>
    </Layout>
  )
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              subtitle: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            path
            tags
            author
            subtitle
            date(formatString: "MMMM DD, YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
