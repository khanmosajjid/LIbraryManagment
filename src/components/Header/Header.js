import React, { Component } from 'react'
import {Container,
Row,Col} from 'reactstrap';
import NavBar from '../NavBar/Navbar'
// import logo from '../../assets/4.png'


export default class Header extends Component{
    // state={
    //     image:logo,
    // }
    render(){
        return(
            <Container fluid>
                <Row>
                  <NavBar></NavBar>

                </Row>
            </Container>

        )
    }
}

