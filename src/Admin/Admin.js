import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "../User/Header/Header";
import "./Admin.css";
import Search from "../User/Search/Search";
import Pagination from '../components/Page/Pagination';
import ReadBooks from '../User/ReadBooks/ReadBooks'
import Footer from '../components/Footer/Footer'

export default class Admin extends Component {
    state={
        head:"Not Availble Book"
    }
  render() {
    return (
      <Container fluid={true} className="user">
        <Header ></Header>
        <Search></Search>
        <Pagination></Pagination>
        <ReadBooks heading={this.state.head}></ReadBooks>
        <Footer></Footer>

      </Container>
    );
  }
}
