import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { Layout } from "layouts"
import styled from "@emotion/styled"
import profile from "../images/profile.jpg"
import { Create, Email, GitHub, LinkedIn, Twitter } from "@material-ui/icons"
import MainHeader from "../components/MainHeader"
import beach from "../images/beach.jpg"
import { Container, Col, Row, ListGroup, ListGroupItem } from "react-bootstrap"
import NavBar from "../layouts/NavBar"


const AboutContainer = styled.div`
  padding: 30px;

  h2{
    text-transform: uppercase;
    text-align: center;
  }

  img{
    display: block;
    margin: 10px auto;
    border-radius: 50%;
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

const AboutText = styled.p`
  font-size: 16px !important;
`
const SocialList = styled.ul`
padding: 0 20px !important;
margin: 0 !important;
a {
margin: 0px 10px;
}
`
const About = (center) => (
  <Layout>
    <Helmet title={"About - Adebari Olalekan"} />
    <div className="d-block d-md-none">
    <MainHeader title="LeKode 👨‍💻" headerImage={beach}>Soon, we shall all understand; there is so much bugs
        in softwares that poetry can solve </MainHeader>
        <PageNameHolder>
           <span>About</span>
        </PageNameHolder>
    <AboutContainer>
      <h2>
        Hi, <span role="img" aria-label="emoji">👋</span> I'm Adebari Olalekan Oluwaseun
      </h2>
      <Row>
        <Col>
          <img alt="" src={profile} />
          <AboutText>
        Software developer, functional programming enthusiast, devOps advocate, and an aspiring Software Architect
        Interested and focused on building high throughput systems that powers the fast paced societies of the world.
        I do this daily by building web services that services users From the Fintech industry to other Arena where
        software solution is befitting.
      </AboutText>
        </Col>
        <Col md="7" style={{ textAlign: "end" }}>
          <ListGroup>
          <h2>Skills</h2>
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
        <Col>
          <SocialList>
          <h2>Check me on</h2>
            <ListGroup tag="ul">
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
    </AboutContainer>
    </div>
  
  
<Container className="d-none d-md-block" fluid>
<Row>
    <Col md={4}> 
    <MainHeader title="LeKode" headerImage={beach}>Soon, we shall all understand; there is so much bugs
        in softwares that poetry can solve </MainHeader>
        </Col>
    <Col md={8} style={{padding: '0 25px'}}>
    <NavBar />
<div style={{padding: '0 55px'}}>
    <PageNameHolder>
           <span>About</span>
        </PageNameHolder>
        <AboutContainer>
      <h2>
        Hi,<span role="img" aria-label="emoji">👋</span> I'm Adebari Olalekan Oluwaseun
      </h2>
      <Row>
        <Col md="5">
          <img alt="" src={profile} />
        </Col>
        <Col md="7" style={{ textAlign: "end" }}>
        <AboutText>
        Software developer, functional programming enthusiast, devOps advocate, and an aspiring Software Architect
        Interested and focused on building high throughput systems that powers the fast paced societies of the world.
        I do this daily by building web services that services users From the Fintech industry to other Arena where
        software solution is befitting.
      </AboutText>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ size: 5 }}>
        <ListGroup  style={{ textAlign: "end", margin: "20px 0" }}>
          <h2>Skills</h2>
            <ListGroupItem className="justify-content-end">Scala, Java, Python, Javascript, Golang</ListGroupItem>
            <ListGroupItem className="justify-content-between">FP, OOP</ListGroupItem>
            <ListGroupItem className="justify-content-between">RDBMS, NOSQL</ListGroupItem>
            <ListGroupItem className="justify-content-between">AWS, Docker and Docker swarm, Ansible, Puppet,
              Linux</ListGroupItem>
            <ListGroupItem className="justify-content-between">Camunda BPM</ListGroupItem>
            <ListGroupItem className="justify-content-between">Django, Play framework, Akka, Kafka,
              Flask</ListGroupItem>
          </ListGroup>
          <SocialList>
            <h2>Check Me On</h2>
            <ListGroup className="text-md-left " tag="ul" >
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
      </AboutContainer>
      </div>
      </Col>
  </Row>

</Container>
  </Layout>
)

export default About

About.propTypes = {
  center: PropTypes.object,
}
