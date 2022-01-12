import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { Layout } from "layouts"
import foadRoshan from "../images/foad-roshan.jpg"
import MainHeader from '../components/MainHeader'
import styled from "@emotion/styled"
import NavBar from "../layouts/NavBar"
import { Container, Row, Col } from "react-bootstrap"

const Categories = ({ data }) => {
  const rants = data.rants.edges
  const techs = data.techs.edges

const CategoryList = styled.div`
font-family: 'Open Sans', sans-serif !important;
font-weight: 300;

    h3{
    text-transform: uppercase;
    text-align: center;
  }

  li{
      margin: 0 !important;
  }


  a{
    font-family: 'Open Sans', sans-serif !important;
    font-weight: 300;
  }

a:hover{
    text-decoration: underline;
}
    
`

const CategoryCard =styled.div`
    border: 1px solid #CBCBCB;
    border-radius: 2px;
    margin-bottom: 30px;
    padding: 14px;
    text-align: center;
    transition: 300ms ease;

    a{
        text-decoration: underline;
    }

    &:hover{
    background: #f8f2e3;
    border: 1px solid #DAB768;

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
`
  return (
    <Layout>
      <Helmet title={"Categories"} />
      <div className="d-block d-md-none">
      <MainHeader title="Categories" headerImage={foadRoshan}>Rants by Categories </MainHeader>
        <PageNameHolder>
           <span>Categories</span>
        </PageNameHolder>
        <Container style={{padding: '30px'}}>
        <CategoryCard>
            <Link to="/rants">Poetry({rants.length} post)</Link>
        </CategoryCard>
        <CategoryCard>
            <Link to="/tags/writing">Writing({rants.length} post)</Link>
        </CategoryCard>
        <CategoryCard>
            <Link to="">Tech({techs.length} post)</Link>
        </CategoryCard>

        <CategoryList>
        <h3>Poetry</h3>
         <ol>
             {rants.map(({ node }) => {
                const { id, frontmatter } = node
                const {title, path} = frontmatter

                return (
                    <li key={id}>
                        <Link to={path}>{title}</Link>
                    </li>
                )
                
             })}
         </ol>
        </CategoryList>

        <CategoryList>
        <h3>Writing</h3>
         <ol>
             {rants.map(({ node }) => {
                const { id, frontmatter } = node
                const {title, path} = frontmatter

                return (
                    <li key={id}>
                        <Link to={path}>{title}</Link>
                    </li>
                )
                
             })}
         </ol>
        </CategoryList>

        <CategoryList>
        <h3>Tech</h3>
         <ol>
             {techs.map(({ node }) => {
                const { id, frontmatter } = node
                const {title, path} = frontmatter

                return (
                    <li key={id}>
                        <Link to={`https://${path}/`}>{title}</Link>
                    </li>
                )
                
             })}
         </ol>
        </CategoryList>
        
        </Container>
      
     
</div>
<Container className="d-none d-md-block" fluid>

<Row>
    <Col md={4}> 
    <MainHeader title="Categories" headerImage={foadRoshan}>Rants by Categories </MainHeader>
        </Col>
    <Col md={8} style={{padding: '0 25px'}}>
    <NavBar />
<div style={{padding: '0 55px'}}>
    <PageNameHolder>
           <span>Categories</span>
        </PageNameHolder>
  <Row>
      <Col md={4}>
      <CategoryCard>
            <Link to="/rants">Poetry({rants.length} post)</Link>
        </CategoryCard>
    
      </Col>
      <Col>
      <CategoryCard>
            <Link to="/tags/writing">Writing({rants.length} post)</Link>
        </CategoryCard>
      </Col>

      <Col>
      <CategoryCard>
            <Link to="">Tech({techs.length} post)</Link>
        </CategoryCard>
        </Col>
      </Row>
      <CategoryList>
        <h3>Poetry</h3>
         <ol>
             {rants.map(({ node }) => {
                const { id, frontmatter } = node
                const {title, path} = frontmatter

                return (
                    <li key={id}>
                        <Link to={path}>{title}</Link>
                    </li>
                )
                
             })}
         </ol>
        </CategoryList>

        <CategoryList>
        <h3>Writing</h3>
         <ol>
             {rants.map(({ node }) => {
                const { id, frontmatter } = node
                const {title, path} = frontmatter

                return (
                    <li key={id}>
                        <Link to={path}>{title}</Link>
                    </li>
                )
                
             })}
         </ol>
        </CategoryList>

        <CategoryList>
        <h3>Tech</h3>
         <ol>
         {techs.map(({ node }) => {
                const { id, frontmatter } = node
                const {title, path} = frontmatter

                return (
                    <li key={id}>
                        <Link to={`https://${path}/`}>{title}</Link>
                    </li>
                )
                
             })}
         </ol>
        </CategoryList>
      </div>
      </Col>
  </Row>

</Container>
    </Layout>
  )
}

export default Categories

Categories.propTypes = {
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
      rants:allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {category: {eq: "rants"}}}){
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
        techs:allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {category: {eq: "tech"}}}) {
          edges {
            node {
              id
              excerpt(pruneLength: 150)
              frontmatter {
                title
                path
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
  