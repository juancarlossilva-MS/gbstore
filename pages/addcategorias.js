import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '@material-ui/core/Icon';
import fire from '../config/fire-config';

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
  
  var x = [];
    const [icons, setIcons] = useState([]);
    const [iconsToShow, setIconsToShow] = useState([]);

    useEffect(() => {
      let ref = fire.database().ref('/icones');
      ref.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          // key will be "ada" the first time and "alan" the second time
          
          const name = childSnapshot.key;
          setIcons(old => [...old,  name]);
      });
     

      });
      }, []);

      const postsPerPage = 7;
      let arrayForHoldingPosts = [];

      const [postsToShow, setPostsToShow] = useState([]);
      const [next, setNext] = useState(3);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  const loopWithSlice = (start, end) => {
    const slicedPosts = icons.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setIconsToShow(old => [...old,  ...arrayForHoldingPosts]);
  };
  class ShowIcons extends Component {
      render(){
        return (
          <div>
            
          {iconsToShow.map(ind =>
              <Button color="primary">
              {ind} <Icon>{ind}</Icon>
               </Button>
          )}
          </div>
        );
    }
  }

  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      <Navbar color="primary" light expand="md">
        <NavbarBrand className="justify-content-md-center" style={white} href="/">GABRIEL STORE <Icon style={{fontSize:"32px"}}>speaker_phone</Icon></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse style={white} isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           
           
         
          <NavbarText style={white}>Username</NavbarText>
        
          </Nav>  
           <a onclick={{logout}}>sair</a>
        </Collapse>
      </Navbar>
      <div>
        
        <Breadcrumb>
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/categorias">Categorias</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/addcategorias">Adicionar Categorias</a></BreadcrumbItem>

        </Breadcrumb>
      </div>
     
      <Container>
        <ShowIcons/>
        <Button color="danger" onClick={handleShowMorePosts}>Load more</Button>
      </Container>
      
      </div>
  );
}

export default Example;