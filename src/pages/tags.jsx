import React from "react"
import PropTypes from "prop-types"
import { Container, Layout } from "layouts"
import { Header, TagsBlock } from "components"
import rantHeader from "../images/rant_page_header.jpg"


const Tags = ({ pageContext }) => {
  const { tags } = pageContext

  return (
    <Layout>
      <Header title="Tags Page" headerImage={rantHeader}>Gatsby Tutorial Starter</Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  )
}

export default Tags

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
}
