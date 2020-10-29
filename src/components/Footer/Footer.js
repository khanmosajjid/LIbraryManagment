import React, { Component } from "react";
import {Container,Row,Col} from 'reactstrap';
import './Footer.css';
import twit from '../../assets/icon-twitter.svg';
import fb from '../../assets/icon-facebook.svg'
export default class Footer extends Component{
    render(){
        return(
            <Container fluid={true} className="footer">
                <Row className="footer-main">
                    <Col>
                    <img src={twit} className="footer-twit-image" alt="twit"></img>
                    <img src={fb} className="footer-twit-image" alt="fb"></img>
                    </Col>

                </Row>
            </Container>

        )
    }
}