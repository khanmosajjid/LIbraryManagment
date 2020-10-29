import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "../User/Header/Header";
import "./User.css";
import Search from "../User/Search/Search";
import Pagination from '../components/Page/Pagination';
import ReadBooks from '../User/ReadBooks/ReadBooks'

export default class User extends Component {
  state={
    head:"Read Books"
  }
  render() {
    return (
      <Container fluid={true} className="user">
        {/* <Header></Header> */}
        <Search></Search>
        <Pagination></Pagination>
        <ReadBooks heading={this.state.head}></ReadBooks>

      </Container>
    );
  }
}
