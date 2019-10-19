import React from 'react';
import styled from '@emotion/styled';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';




const Wrapper = styled.footer`
  position: relative;
  padding-top: 15px;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  height: 50px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  display: flex-end;
  margin: 0;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  a {
    color: ${props => props.theme.colors.white.base};
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <a href="https://github.com/horlahlekhon">
        <GitHubIcon />
      </a>
      <a href="https://mobile.twitter.com/1nesAndZer0s">
        <TwitterIcon />
      </a>
    </Text>
  </Wrapper>
);
export default Footer;
