import React from "react"
import Helmet from "react-helmet"
import { Layout } from "layouts"
import photoGrapher from "../images/charlie-robert.jpg"
import MainHeader from "../components/MainHeader"
import styled from "@emotion/styled"
import { Container, Row, Col } from "react-bootstrap"
import NavBar from "../layouts/NavBar"


const GalleryContainer = styled.div`
padding: 30px;

@media screen and (min-width: 768px){
  padding:0px 80px;
   
  .images-div{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
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

export default function Gallery() {


  // Map through Images..
  const images = [
  
      {
      "id": 1,
      "image":require("../images/island.jpg")
    },
      {
      "id": 2,
      "image":require("../images/panda.jpg")
    },
      {
      "id": 3,
      "image":require("../images/shore.jpg")
    },
      {
      "id": 4,
      "image":require("../images/female_dress.jpg")
    },
      {
      "id": 5,
      "image":require("../images/wedding_dress.jpg")
      },

      {
        "id": 6,
        "image":require("../images/female_sit.jpg")
      }


  ]

  return (
    <Layout>
      <Helmet title={"Gallery"} />
      <div className="d-block d-md-none">
      <MainHeader title="Gallery" headerImage={photoGrapher}>Life is a point of view</MainHeader>
      <GalleryContainer>
      <PageNameHolder>
           <span>Gallery</span>
        </PageNameHolder>
        <div className="images-div">
         {images.map((item, index) => (
           <div key={index}>
               <img 
           src={item.image}
           alt="gallery_images"
           />
           </div>
          
         ))}
         </div>
      
     
       </GalleryContainer>
</div>

<Container className="d-none d-md-block" fluid>
  <Row>
    <Col md={4}> 
    <MainHeader title="Gallery" headerImage={photoGrapher}>Life is a gallery of experiences</MainHeader>
        </Col>
    <Col md={8} >
    <NavBar />
    <GalleryContainer>
    <PageNameHolder>
           <span>Gallery</span>
      </PageNameHolder>
      <div className="images-div">
      {images.map((item, index) => (
           <div key={index} >
          <img 
           src={item.image}
           alt="gallery_images"
           />
           </div>
          
         ))}
         </div>
      
    </GalleryContainer>
    </Col>
  </Row>
</Container>
 
    </Layout>
  )
}





