import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '@material-ui/core/Icon';
import fire from '../config/fire-config';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  NavbarText,
  Form, FormGroup,Label,Input
} from 'reactstrap';

import { Fab } from '@material-ui/core';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout  = {

    
  };
  const router = useRouter();

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

      const postsPerPage = 13;
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
  const [input, setInput] = useState([]);
  const [iconSel, setIconSel] = useState([]);

  const [iconB, setIconB] = useState([]);

  class ShowIcons extends Component {
      render(){
        let br = "\n";

        return (
          <div>
            
          {iconsToShow.map(ind =>
              <span>
              <Button   onClick={e => setIconSel( ind)} color={iconSel === ind ? "primary" : "default"}>
               <Icon style={{fontSize:"50px"}}>{ind}</Icon>
               </Button> {" "}
             
               </span>
          )}
              

          </div>
        );
    }
  }

  const handleSubmit = () => {
      console.log(input);
       console.log(iconSel);
       fire.firestore().collection("categorias").add({
        iconName: iconSel,
        nome: input
      });  

      router.push("/categorias");

  }

  const fabStyle = { right: 10, top: "90%", position: 'fixed', color:"white", backgroundColor:"green"}
  const fabStyle2 = { float: "left", top: "90%", position: 'fixed'}

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
        <Form >
            <FormGroup>
            <Label for="novacat">Insira o nome da nova categoria</Label>
            <Input   onChange={e => setInput(e.target.value)} type="text" name="novacat" id="novacat" placeholder="Celulares/Notebooks ..."/>
          </FormGroup>

        <ShowIcons/>
        {"\n\n\n"}
        <Fab variant="extended"  color="primary"  onClick={handleShowMorePosts} style={fabStyle2}>Carregar<Icon>add</Icon>Icones</Fab>
        <Fab onClick={handleSubmit} variant="extended"  style={fabStyle}><Icon>add</Icon>Salvar</Fab>
        </Form>
      </Container>
      
      </div>
  );
}

export default Example;