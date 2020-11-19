import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { BlogList, Header } from "components"
import { Layout } from "layouts"
import devHeader from "../images/tech_page_header.jpg"

const Dev = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Helmet title={"tech - Page"} />
      <Header title="Technologies" headerImage={devHeader}>Software Affinities</Header>
      {edges.map(({ node }) => (
        <BlogList
          key={node.id}
          cover={node.frontmatter.cover.childImageSharp.fluid}
          path={node.frontmatter.path}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          tags={node.frontmatter.tags}
          excerpt={node.excerpt}
        />
      ))}
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {category: {eq: "dev"}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            path
            tags
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
