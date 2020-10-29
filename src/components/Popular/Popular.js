import React, { Component } from 'react';
import {Container,
Row,Col} from 'reactstrap';
import Cards from '../Cards/Cards'
import Book1 from '../../assets/book1.jpeg';
import Book2 from '../../assets/book2.jpeg';
import Book3 from '../../assets/book3.jpeg';
import Book4 from '../../assets/book4.jpg';



export default class Popular extends Component{
    state={
        book1:Book1,
        book2:Book2,
        book3:Book3,
        book4:Book4
    }
    
    render(){
        return(
            <Container>
                <h1>New Arrival</h1>
                <br></br>
                <Row>
                    <Col lg={3}>
                        <Cards book={this.state.book1}></Cards>
                    </Col>
                    <Col lg={3}>
                    <Cards book={this.state.book2}></Cards>
                    </Col>
                    <Col lg={3}>
                    <Cards book={this.state.book3}></Cards>
                    </Col>
                    <Col lg={3}>
                    <Cards book={this.state.book3}></Cards>
                    </Col>
                    </Row>
                    <span style={{margin:"20px"}}></span>
                    <Row>
                    <Col lg={3}>
                    <Cards book={this.state.book2}></Cards>
                    </Col>
                    <Col lg={3}>
                    <Cards book={this.state.book1}></Cards>
                    </Col>
                    <Col lg={3}>
                    <Cards book={this.state.book1}></Cards>
                    </Col>
                    <Col lg={3}>
                    <Cards book={this.state.book1}></Cards>
                    </Col>

                </Row>
            </Container>
        )
    }
}