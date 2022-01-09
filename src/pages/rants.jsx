import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { BlogList } from "components"
import { Layout } from "layouts"
import rantHeader from "../images/rant_page_header_cut.jpg"
import MainHeader from '../components/MainHeader'
import styled from "@emotion/styled"
import NavBar from "../layouts/NavBar"
import { Container, Row, Col } from "react-bootstrap"

const Rants = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  const BlogWrapper = styled.div`
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
  return (
    <Layout>
      <Helmet title={"Rants"} />
      <div className="d-block d-md-none">
      <MainHeader title="Rants about Life and beyond" headerImage={rantHeader}>"wait! Its only an illusion; the die is never
        cast” </MainHeader>
        <PageNameHolder>
           <span>Rants</span>
        </PageNameHolder>
        <BlogWrapper>
      {edges.map(({ node }) => (
        <BlogList
          key={node.id}
          cover={node.frontmatter.cover.childImageSharp.fluid}
          path={node.frontmatter.path}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          author={node.frontmatter.author}
          tags={node.frontmatter.tags}
          excerpt={node.excerpt}
        />
      ))}
      </BlogWrapper>
</div>
<Container className="d-none d-md-block" fluid>

<Row>
    <Col md={4}> 
    <MainHeader title="Rants about Life and beyond" headerImage={rantHeader}>"wait! Its only an illusion; the die is never
        cast” </MainHeader>
        </Col>
    <Col md={8} style={{padding: '0 25px'}}>
    <NavBar />
<div style={{padding: '0 55px'}}>
    <PageNameHolder>
           <span>Rants</span>
        </PageNameHolder>
        <BlogWrapper>
        {edges.map(({ node }) => (
        <BlogList
          key={node.id}
          cover={node.frontmatter.cover.childImageSharp.fluid}
          path={node.frontmatter.path}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          author={node.frontmatter.author}
          tags={node.frontmatter.tags}
          excerpt={node.excerpt}
        />
      ))}
      </BlogWrapper>

      </div>
      </Col>
  </Row>

</Container>
    </Layout>
  )
}

export default Rants

Rants.propTypes = {
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
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {category: {eq: "rants"}}}){
        edges {
          node {
            id
            excerpt(pruneLength: 200)
            frontmatter {
              title
              path
              tags
              author
              date(formatString: "MM.DD.YYYY")
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
  