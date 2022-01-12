import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { Container, Row, Col } from "react-bootstrap"
import MainHeader from '../components/MainHeader'
import config from "../../config/site"
import tagImg from '../images/category_books.jpg'
import NavBar from "../layouts/NavBar"
import { Layout } from "layouts"

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

const Information = styled.div`
margin: 20px 0;
  text-align: center;
  h3 {
    margin-bottom: 1.5rem;
    transition: 300ms;
  }

  h3:hover{
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1)
  return (
    <Layout>
      <Helmet title={`${tagName} | ${config.siteTitle}`} />
      <div className="d-block d-md-none">
      <MainHeader title={upperTag} headerImage={tagImg}>All Tags</MainHeader>
      <div style={{padding: '30px'}}>
      <PageNameHolder>
           <span>Tags</span>
        </PageNameHolder>
        <Information>
          {posts.map((post, index) => (
            <Link key={index} to={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
        </Information>
      </div>
    </div>
    
    <Container className="d-none d-md-block" fluid>
<Row>
<Col md={4}> 
<MainHeader title={upperTag} headerImage={tagImg}>All Tags</MainHeader>
      </Col>
  <Col md={8}>
    <NavBar />
    <PageNameHolder>
           <span>Tags</span>
        </PageNameHolder>
        <Information>
          {posts.map((post, index) => (
            <Link key={index} to={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
        </Information>
  </Col>
</Row>
</Container>
    </Layout>
  )
}

export default Tag

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagName: PropTypes.string,
  }),
}
