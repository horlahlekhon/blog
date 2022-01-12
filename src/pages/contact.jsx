import React from "react"
import Helmet from "react-helmet"
import { Layout } from "layouts"
import contactImg from "../images/architecture.jpg"
import MainHeader from "../components/MainHeader"
import styled from "@emotion/styled"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import NavBar from "../layouts/NavBar"


const ContactContainer = styled.div`
padding: 30px;

p{
    font-size: 16px;
}



@media screen and (min-width: 768px){
  padding:0px 80px;
   
  form{
      margin:0 35px;
  }
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

export default function Contact() {

  return (
    <Layout>
      <Helmet title={"Contact"} />
      <div className="d-block d-md-none">
      <MainHeader title="Contact" headerImage={contactImg}>Holla at me..Please No Spam!</MainHeader>
      <ContactContainer>
      <PageNameHolder>
           <span>Contact</span>
        </PageNameHolder>
        <p>Hi <span role="img" aria-label="emoji">👋</span>, It is me again Lekan, so fill the form if you want to talk about business, Please <span role="img" aria-label="emoji">🙂</span>nly business! Thank You...</p>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="name" placeholder="John Doe" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="johndoe@gmail.com" />
  </Form.Group>


  <Form.Group>
    <Form.Control as="textarea" placeholder="Enter your message"/>
  </Form.Group>
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
     
       </ContactContainer>
</div>

<Container className="d-none d-md-block" fluid>
  <Row>
    <Col md={4}> 
    <MainHeader title="Contact" headerImage={contactImg}>Holla at me..Please No Spam!</MainHeader>
        </Col>
    <Col md={8} >
    <NavBar />
    <ContactContainer>
    <PageNameHolder>
           <span>Contact</span>
      </PageNameHolder>
      <p>Hi <span role="img" aria-label="emoji">👋</span>, It is me again Lekan, so fill the form if you want to talk about business, Please <span role="img" aria-label="emoji">🙂</span>nly business! Thank You...</p>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="name" placeholder="John Doe" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="johndoe@gmail.com" />
  </Form.Group>


  <Form.Group>
    <Form.Control as="textarea" placeholder="Enter your message"/>
  </Form.Group>
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
    </ContactContainer>
    </Col>
  </Row>
</Container>
 
    </Layout>
  )
}





