import React from "react";

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './Conteudo.css'


import imagem2 from '../../assets/imagem3.png'
import { Button } from "react-bootstrap";

function Conteudo(){
    return(
        <>
        <style type="text/css">
        {`
            .btn-introduction {
            background-color: #FF7A00;
            color: white;
            margin-left: 10px;
            margin-right: 20px;
            
           
            }


            `}
        </style>
            <section className="conteudo">
                <Container>
                    <Row>
                        <Col sm={6} className="intoduction-col-1">
                            <h1>Vamos falar sobre o Bootcamp Dio </h1>
                            <h5>Inter Front-End Developer</h5>
                            <div className="d-grid gap-2">
                                <Button variant="introduction">
                                    Vamos lá
                                </Button>
                            </div>

                        </Col>
                        <Col sm={6} className="intoduction-col-1"> 
                            <img
                                alt="teste"
                                src={imagem2}
                                width="100%"
                                height="100%"                      
                            />    
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Conteudo;
