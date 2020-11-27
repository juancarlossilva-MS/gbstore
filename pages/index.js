import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { MdPhonelinkRing } from "react-icons/md";

import {
  Collapse,Container, Row, Col,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const mystyle = {
   
    display: 'inline-block',
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "9px",
    width: '40px'
  };
  const white = {
    color:"white"
  }
  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand style={white} href="/">GBSTORE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse style={white} isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Container>

      <Row style={{marginTop:"10%",marginLeft:"5%"}}>
        <Col xs="6" sm="4">
          <Button color="primary" size="lg" ><MdPhonelinkRing style={{width:"200px",height:"200px"}}/> 
          <h5>Categoria de Produtos</h5>
          </Button>
          
          </Col>
        <Col xs="6" sm="4"></Col>
        <Col sm="4">.col-sm-4</Col>
      </Row>
      </Container>
      
      </div>
  );
}

export default Example;