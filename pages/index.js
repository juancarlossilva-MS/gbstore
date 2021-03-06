import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPhonelinkRing, MdSpeakerPhone, MdAttachMoney, MdPeople, MdShowChart } from "react-icons/md";
import Link from 'next/link'

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

  const logout  = {

    
  };
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
        <NavbarBrand className="justify-content-md-center" style={white} href="/">GABRIEL STORE <MdSpeakerPhone style={{fontSize:"32px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse style={white} isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           
           
         
          <NavbarText style={white}>Username</NavbarText>
        
          </Nav>  
           <a onclick={{logout}}>sair</a>
        </Collapse>
      </Navbar>
      <Container>

      <Row  className="justify-content-md-center"   style={{marginTop:"10%"}}>
        <Col xs="6" sm="4">
        <Link href="/categorias">

          <Button color="primary" size="lg" ><MdPhonelinkRing style={{width:"100px",height:"90px"}}/> 
          <h6>Categoria de</h6>
          <h6 style={{marginTop:"-5%"}}>Produtos</h6>
          </Button>
          </Link>
          </Col>
          <Col xs="6" sm="4">
          <Link href="/vendas">
            <Button color="primary"  size="lg" ><MdAttachMoney style={{width:"100px",height:"100px"}}/> 
            <h6>Vendas</h6>
            </Button>
          </Link>
          
          
          </Col>
      </Row>
      <Row  className="justify-content-md-center"   style={{marginTop:"10%"}}>
        <Col xs="6" sm="4">
        <Link href="/clientes">

          <Button color="primary" size="lg" ><MdPeople style={{width:"100px",height:"100px"}}/> 
          <h6>Clientes</h6>
          </Button>
          </Link>
          </Col>
          <Col xs="6" sm="4">
          <Link href="/relatorios">

          <Button color="primary" size="lg" ><MdShowChart style={{width:"100px",height:"100px"}}/> 
          <h6>Relatórios</h6>
          </Button>
          </Link>
          </Col>
      </Row>
      </Container>
      
      </div>
  );
}

export default Example;