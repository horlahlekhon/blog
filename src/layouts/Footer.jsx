import React from "react"
import styled from "@emotion/styled"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"


const FooterDiv = styled.div`
display: block;
margin: 0 auto;
background: transparent;
p{
  word-spacing: 5px;
  text-align: center;
}

p span{
  color: #0d6efd;
  text-decoration: underline;
}

@media screen and (min-width: 768px){
       p, p span, a{
         color: #fff;
         font-size: 16px;
       }
       

  }


`


const Footer = () => (
  <FooterDiv>
    <p>Check Out My <a href="https://github.com/horlahlekhon">Gith<GitHubIcon style={{width: '14px'}}/>b</a> and Follow me on <a href="https://mobile.twitter.com/1nesAndZer0s">T<TwitterIcon style={{width: '14px'}}/>itter</a>
      </p>
    <p>Copyright © 2021. <span>Olalekan Adebari</span> All Rights Reserved</p>
      </FooterDiv>
)
export default Footer
