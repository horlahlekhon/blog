import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { Header } from "components"
import { Container, Layout } from "layouts"
import styled from "@emotion/styled"
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap"
import profile from "../images/profile.jpg"
import { Create, Email, GitHub, LinkedIn, Twitter } from "@material-ui/icons"

const AboutText = styled.p`
  font-size: 1.25em;
  text-align: end;
`
const SocialList = styled.ul`
a {
margin: 0px 10px;
}
`
const About = center => (
  <Layout>
    <Helmet title={"About - Adebari Olalekan"} />
    <Header title="About Page">Gatsby Tutorial Starter</Header>
    <Container center={center}>
      <h2 style={{ textAlign: "end" }}>
        Adebari Olalekan Oluwaseun
      </h2>
      <AboutText>
        Software developer, functional programming enthusiast, devOps advocate, and an aspiring Software Architect
        Interested and focused on building high throughput systems that powers the fast paced societies of the world.
        I do this daily by building web services that services users From the Fintech industry to other Arena where
        software solution is befitting.
      </AboutText>
      <Row>
        <Col md="5">
          <img alt="" src={profile} />
        </Col>
        <Col md="7" style={{ textAlign: "end" }}>
          <ListGroup>
            <ListGroupItem className="justify-content-end">Scala, Java, Python, Javascript, Golang</ListGroupItem>
            <ListGroupItem className="justify-content-between">FP, OOP</ListGroupItem>
            <ListGroupItem className="justify-content-between">RDBMS, NOSQL</ListGroupItem>
            <ListGroupItem className="justify-content-between">AWS, Docker and Docker swarm, Ansible, Puppet,
              Linux</ListGroupItem>
            <ListGroupItem className="justify-content-between">Camunda BPM</ListGroupItem>
            <ListGroupItem className="justify-content-between">Django, Play framework, Akka, Kafka,
              Flask</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ size: 5 }}>
          <SocialList>
            <ListGroup className="text-md-left " tag="ul" style={{ marginLeft: "0px" }}>
              <ListGroupItem tag="li"><span><GitHub /></span> <a href="https://github.com/horlahlekhon">Github</a>
              </ListGroupItem>
              <ListGroupItem tag="li"><span><Twitter /></span> <a
                href="https://mobile.twitter.com/1nesAndZer0s">Twitter</a> </ListGroupItem>
              <ListGroupItem tag="li"><span><LinkedIn /></span> <a
                href="https://www.linkedin.com/in/olalekan-adebari-41907b9a/">LinkedIN</a> </ListGroupItem>
              <ListGroupItem tag="li"><span><Create /></span><a href="https://horlahlekhon.github.io/rants">Creative
                Writings</a></ListGroupItem>
              <ListGroupItem tag="li"><span><Email /></span><a
                href="mailto: adebari.olalekan.oluwaseun@gmail.com">Contact </a></ListGroupItem>
            </ListGroup>
          </SocialList>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default About

About.propTypes = {
  center: PropTypes.object,
}
