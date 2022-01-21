import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import MainHeader from "../components/MainHeader"
import { Layout } from "layouts"
import FourZeroFour from '../images/404-error.png'
import NavBar from "../layouts/NavBar"
import { Col, Row, Container } from "react-bootstrap"

const ErrorPage = center => (
  <Layout>
    <Helmet title={"404"} />
    <MainHeader title="404"  headerImage={FourZeroFour} >Ok!, why would you type ou;/t your own link</MainHeader>
    <Container className="d-block d-md-none" fluid style={{padding: '50px 30px', textAlign: 'center'}}>
      <h1>W<span role="img" aria-label="emoji">😐</span><span role="img" aria-label="emoji">😬</span>ps, something went wrong.</h1>
      <br />
      <h3>This page does not exist or is no longer reachable.</h3>
      <br />
      <h3>
        You can return to the <Link to="/">Homepage</Link>.
      </h3>
    </Container>

<Container className="d-none d-md-block" fluid>

<Row>
    <Col md={4}> 
    <MainHeader title="404"  headerImage={FourZeroFour} >Ok!, why would you type out your own link</MainHeader>
        </Col>
    <Col md={8} style={{padding: '0 25px'}}>
    <NavBar />
    <Container style={{padding: '50px 30px', textAlign: 'center'}}>
      <h1>W<span role="img" aria-label="emoji">😐</span><span role="img" aria-label="emoji">😬</span>ps, something went wrong.</h1>
      <br />
      <h3>This page does not exist or is no longer reachable.</h3>
      <br />
      <h3>
        You can return to the <Link to="/">Homepage</Link>.
      </h3>
    </Container>
      </Col>
  </Row>

</Container>    
  </Layout>
)

export default ErrorPage

ErrorPage.propTypes = {
  center: PropTypes.object,
}
