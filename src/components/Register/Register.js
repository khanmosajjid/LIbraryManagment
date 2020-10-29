import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import "./Register.css";
export default class Register extends Component {
  render() {
    return (
      <Container fluid={true} className="register-main">
        <Row lg={10} className="register-row">
          <Col lg={10} className="form-main">
            <Row className="register-heading">
              <Col>
                <h1>Register</h1>
              </Col>
            </Row>

            <Form className="form was-validated">
              <Row>
                <Col lg={4}>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                      type="name"
                      name="firstname"
                      id="firstname"
                      placeholder="Enter your first Name"
                      required
                    />
                   
                  </FormGroup>
                  <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div>
                </Col>
                <Col lg={4}>
                  <FormGroup>
                    <Label>Middle Name</Label>
                    <Input
                      type="name"
                      name="middlename"
                      id="middlename"
                      placeholder="enter your middleName"
                      required
                    />
                  </FormGroup>
                  {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                </Col>
                <Col lg={4}>
                  <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="enter your lastname"
                      required
                    />
                  </FormGroup>
                  {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <FormGroup>
                    <Label>Date</Label>
                    <Input
                      type="date"
                      name="date"
                      id="Date"
                      placeholder="date placeholder"
                      required
                    />
                    {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label>Address</Label>
                    <Input
                      type="text"
                      name="address"
                      id="exampleAddress"
                      placeholder="1234 Main St"
                      required
                    />
                     {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="with a placeholder"
                      required
                    />
                     {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampleNumber">Number</Label>
                    <Input
                      type="number"
                      name="number"
                      id="exampleNumber"
                      placeholder="number placeholder"
                      required
                    />
                     {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <FormGroup>
                    <Label>UserName</Label>
                    <Input
                      type="text"
                      name="Username"
                      id="usrname"
                      placeholder="mosajjid"
                      required
                    />
                     {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="Password"
                      placeholder="********"
                      required
                    />
                     {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                  </FormGroup>
                </Col>
              </Row>

              <Button href="/user">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
