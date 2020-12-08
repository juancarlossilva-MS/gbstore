import React, { useState, Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPhonelinkRing, MdSpeakerPhone, MdAttachMoney, MdPeople, MdShowChart } from "react-icons/md";
import Link from 'next/link'

import fire from '../config/fire-config';
import {  Icon, makeStyles  } from '@material-ui/core';
import {  SpeedDialIcon, SpeedDial, SpeedDialAction  } from '@material-ui/lab';

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

import { useRouter } from 'next/router';

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
  const [corIcons, setCorIcons] = useState("");
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
            <Row>
               {blogs.map(index => 
              <Col xs="6" sm="2">              
              <Button style={{marginTop:30}} color={corIcons}>
                  <Icon style={{fontSize:"100px" }}>{index.iconName}</Icon>
                  <h5>{index.nome}</h5>

                  </Button> 
             
               </Col>               
               )}
               
            </Row> 

        );
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      transform: 'translateZ(0px)',
      flexGrow: 1,
    },
    exampleWrapper: {
      position: 'relative',
      marginTop: theme.spacing(3),
      height: 0 ,
    },
    radioGroup: {
      margin: theme.spacing(1, 0),
    },
    speedDial: {
      position: 'absolute',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
      },
    },
  }));
  const router = useRouter();

  const addCat = () =>{

    router.push("/addcategorias");
  }
  const excluirCat = () =>{

    router.push("/addcategorias");
  }
  const editarCat = () =>{
    setCorIcons("primary");
   
  }
  const actions = [
    { icon: <Icon>delete</Icon> , name: 'Excluir', fun: excluirCat },
    { icon: <Icon>edit</Icon>, name: 'Editar', fun: editarCat },
    { icon: <Icon>add</Icon>, name: 'Adicionar', fun: addCat },
  ];
  const classes = useStyles();
  const [direction, setDirection] = useState('up');
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
 
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
         <ShowCats setCorIcons={'default'}/> 
         
      </Container>

      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={direction}
        >
          {actions.map((action) => (
         
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.fun}
            />
           
          ))}
        </SpeedDial>
      </div>
      </div>
  );
}

export default Example;

