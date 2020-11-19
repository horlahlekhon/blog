import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Container, Content } from "layouts"
import { Header, SEO, TagsBlock } from "components"
import "../styles/prism"
import PostLayout from "../layouts/PostLayout"

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { html, frontmatter, excerpt } = data.markdownRemark
  const { date, title, tags, path, description } = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid
  const PostImage = styled.div`
        background: url(${image.src}) no-repeat fixed center;
        height: 100%;
        width: 100%;
        position: absolute;
        `
  const PostImageWrapper = styled.div`
    position: relative;
    width: 956px;
    height: 400px;
    display: flex;
    justify-content: center;
`
  const Title = styled.p`
    text-align: center;
    color: white;
    display: block;
    
    font-size: 40px;
    font-stretch: expanded;
    font-weight: lighter;
`
  const TitleWrapper = styled.div`
    position: absolute;
    top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    height: 200px;
`
  const Subtitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: antiquewhite;
    
    
`
  const postDate = new Date(date)
  return (
    <PostLayout postImage={image.src}>
      <SEO
        title={title}
        description={description || excerpt || " "}
        banner={image}
        pathname={path}
        article
      />
      <Header title={title} date={date} cover={image.src} />
      <Container>
        <PostImageWrapper>
          <TitleWrapper>
            <Title>
              {title}
            </Title>
            <Subtitle>
              <span> {postDate.toLocaleString("default", { month: "long" })} {postDate.getDate()}, {postDate.getFullYear()}</span>
              <span style={{ margin: "0px 5px" }}>|</span>
              <span>4 minutes</span>
            </Subtitle>
          </TitleWrapper>
          <PostImage />
        </PostImageWrapper>
        <Content input={html} />
        <TagsBlock list={tags || []} />
      </Container>
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

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
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
