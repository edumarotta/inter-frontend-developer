import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import logo from '../../assets/logo.png'

import './Header.css'



function Header({acao}) {
    return(
        <>
        <style type="text/css">
            {`
            .btn-git {
            background-color: #FF7A00;
            color: white;
            margin-left: 10px;
            margin-right: 20px;
           
            }

            .btn-git2 {
                background-color: #7BAF34;
                color: #fff;
                margin-left: 10px;
                margin-right: 20px;
               
            }



            `}
        </style>
        <Navbar expand="lg" fixed="top" className="header-sup">
            <span className="header-sup-span">Web Aplication criada a partir dos conhecimentos adquiridos no Bootcamp <span className="header-sup-destaque">Inter Front-End Developer</span> da DIO</span>
        </Navbar>

        
        <Navbar expand="lg" fixed="top" className={acao ? 'ativaCor' : 'teste'}>

            <Container>
            <Navbar.Brand href="#home">
                <img
                    alt="teste"
                    src={logo}
                    width="100"
                    height="100"
                
                />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={acao ?  "menu-options-2" : "menu-options-1"} href="#home">Sobre</Nav.Link>
                            <Nav.Link className={acao ?  "menu-options-2" : "menu-options-1"} href="#link">Bootcamp</Nav.Link>
                            <Nav.Link className={acao ?  "menu-options-2" : "menu-options-1"} href="#link">Desafios</Nav.Link>
                            <Nav.Link className={acao ?  "menu-options-2" : "menu-options-1"} href="#link">Templates</Nav.Link>
                            <Nav.Link className={acao ?  "menu-options-2" : "menu-options-1"} href="#link">Link</Nav.Link>
 
                        </Nav>
                        <div className="vertical-line"></div>
                        <Button variant={acao? 'git2' : 'git'}> Meu Github </Button>{' '}
                        <Button variant='outline-warning'> Meu Github </Button>{' '}
                </Navbar.Collapse>

            </Container>
        </Navbar>

       


        
        </>
        
    
    )

}

export default Header;
