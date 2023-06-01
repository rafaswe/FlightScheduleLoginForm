// import React from 'react'

import { Container, Navbar } from "react-bootstrap";
import logo from '../assets/Logo.png';

const HeaderSection = () => {
  return (
    <Container>
         <Navbar bg="transperarent">
      
          <Navbar.Brand href="#home" >
            <img
              src={logo}
              
              className="d-inline-block align-top mt-1"
              alt="React Bootstrap logo"
              width={"180px"}
            />
          </Navbar.Brand>

      </Navbar>
    </Container>
  )
}

export default HeaderSection