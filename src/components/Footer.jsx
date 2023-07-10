import React from 'react'
import styled from 'styled-components'

function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <Copyright>
        <a href='https://github.com/AkaraTawng'>Christopher Chamberlain</a> &copy; {currentYear} 
      </Copyright>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem; 
  color: darkgrey;
`;

const Copyright = styled.a`
 
`;

export default Footer