import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import TechList from "../components/TechList"
import { Layout } from "layouts"
import devHeader from "../images/tech_page_header.jpg"
import MainHeader from "../components/MainHeader"
import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../layouts/NavBar"
import styled from "@emotion/styled"



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

const Dev = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Helmet title={"Tech"} />
      <div className="d-block d-md-none">
      <MainHeader title="Technologies" headerImage={devHeader}>Software Affinities</MainHeader>
      <div style={{padding: '30px'}}>
      <PageNameHolder>
           <span>Techs</span>
        </PageNameHolder>
     
     {/* here this component map out all the techs */}
      {edges.map(({ node }) => (
        <TechList
          key={node.id}
          cover={node.frontmatter.cover.childImageSharp.fluid}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          database={node.frontmatter.database}
          languages={node.frontmatter.languages}
        />
      ))}
       </div>
</div>


       <Container className="d-none d-md-block" fluid>
         <Row>
           <Col md={4} style={{zIndex: '1000'}}>
           <MainHeader title="Technologies" headerImage={devHeader}>Software Affinities</MainHeader>
           </Col>
           <Col md={8}>
           <NavBar />
           <PageNameHolder>
           <span>Techs</span>
        </PageNameHolder>
           <div style={{padding: '30px'}}>

     
{edges.map(({ node }) => (
  <TechList
    key={node.id}
    cover={node.frontmatter.cover.childImageSharp.fluid}
    title={node.frontmatter.title}
    date={node.frontmatter.date}
    path={node.frontmatter.path}
    database={node.frontmatter.database}
    languages={node.frontmatter.languages}
  />
))}
 </div>
           </Col>
         </Row>
       </Container>
    </Layout>
  )
}

export default Dev

Dev.propTypes = {
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
              languages: PropTypes.string.isRequired,
              database: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
}

export const query = graphql`
{
  allMarkdownRemark(limit: 6, sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {category: {eq: "tech"}}}) {
    edges {
      node {
        id
        excerpt(pruneLength: 150)
        frontmatter {
          title
          path
          languages
          database
          date(formatString: "MMMM DD, YYYY")
          cover {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90, traceSVG: {color: "#2B2B2F"}) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}

`
