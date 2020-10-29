import React, { Component } from "react";
import Header from "../Header/Header";
import Corousel from "../Corousel/Corousel";
import "./LandingPage.css";
import Popular from "../Popular/Popular";
import Footer from '../Footer/Footer'

import {Container, Row} from 'reactstrap'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Corousel></Corousel>
        <Container fluid={true} className="qoute">
        <Row className="lib-quote">
            "Bad libraries build collections, 
          good libraries build services, 
          great libraries build communities."
            </Row>
        </Container>
        
            
         

          
        
        <Popular></Popular>
        <Footer></Footer>
      </div>
    );
  }
}
