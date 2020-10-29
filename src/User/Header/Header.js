import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import Navigation from '../Navigation/Navigation'
import './Header.css'

export default class Header extends Component{
    render(){
        return(
            <Container fluid={true} className="header">
                <Row>
                    <Navigation></Navigation>

                </Row>
            </Container>
        )
    }
}