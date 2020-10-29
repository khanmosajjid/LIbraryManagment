import React, { Component } from "react";
import { Container, FormGroup, Row,Form, 
    Button ,Label,Input} from "reactstrap";
import "./Search.css";

export default class Search extends Component {
  render() {
    return (
      <Container fluid={true} className="search-container">
        <Row className="search-main">
          <Form>
          <FormGroup>
              <Button color="primary">
              Search 
              </Button>
              
                    
                    <Input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search Book"
                      required
                    />
                  </FormGroup>
          </Form>
       
        </Row>
      </Container>
    );
  }
}
