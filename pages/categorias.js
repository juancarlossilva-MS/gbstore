import React, { useState, Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPhonelinkRing, MdSpeakerPhone, MdAttachMoney, MdPeople, MdShowChart } from "react-icons/md";
import Link from 'next/link'

import fire from '../config/fire-config';
import { Fab, Icon } from '@material-ui/core';

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
  Breadcrumb,BreadcrumbItem,
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

  const [blogs, setBlogs] = useState([]);
useEffect(() => {
    fire.firestore()
      .collection('categorias')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogs);
      });
  }, []);

  class ShowCats extends Component {

    render(){
      
        return(
            <div>
               {blogs.map(index => 
                <span>
              <Button color="primary">
               <Icon style={{fontSize:"150px"}}>{index.iconName}</Icon>
               <h4>{index.nome}</h4>

               </Button> 
             
               </span>               )}
               
            </div> 

        );
    };
  }
 
  const fabStyle = { right: 40, top:"80%",position: 'fixed', color:"white", backgroundColor:"primary"}

  return (
    
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      <Navbar color="primary" light expand="md">
        <NavbarBrand className="justify-content-md-center" style={white} href="/">GABRIEL STORE <MdSpeakerPhone style={{fontSize:"32px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse style={white} isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           
           
         
          <NavbarText style={white}>Username</NavbarText>
        
          </Nav>  
           <a onClick={{logout}}>sair </a>
        </Collapse>
      </Navbar>
      <div>
        
        <Breadcrumb>
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/categorias">Categorias</a></BreadcrumbItem>
        </Breadcrumb>
      </div>
     
      <Container>
         <ShowCats/> 
         

      </Container>
      <Link href="/addcategorias">
      <Fab   style={fabStyle}><Icon>add</Icon></Fab>
      </Link>
      </div>
  );
}

export default Example;

