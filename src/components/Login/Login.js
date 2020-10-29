import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  CardTitle,
  Form,
  Label,
  FormGroup,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <Container fluid={true} className="login">
        <Row className="card-row">
          <Col lg={10} className="card-main">
            <Row className="card-head">
              <Col>
                <h1>Login</h1>
              </Col>
            </Row>
            <Row className="login-form">
              <Col lg={12}>
                <Form  className="form was-validated">
                  <Col lg={12}>
                    <FormGroup>
                      <Row className="form-row">
                        <Col lg={2} xs={5} className="form-label">
                          <Label for="userId">User id</Label>
                        </Col>
                        <Col lg={10} xs={7}>
                          <Input
                            type="text"
                            name="userId"
                            id="userId"
                            placeholder="Enter Your UserId"
                            required
                          />
                          <div className="valid-feedback">valid.</div>
                          <div className="invalid-feedback">
                            Please enter user id
                          </div>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col lg={12}>
                    <FormGroup>
                      <Row className="form-row">
                        <Col lg={2} xs={5} className="form-label">
                          <Label for="examplePassword">Password</Label>
                        </Col>
                        <Col lg={10} xs={7}>
                          <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                            required
                          />
                          <div className="valid-feedback">valid.</div>
                          <div className="invalid-feedback">
                            Please enter password
                          </div>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Button href="/user">User Login</Button>
                  <span class="space"></span>
                  <Button href="/admin">Admin Login</Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

{
  /* <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="myemail@email.com"
                      />
                    </FormGroup> */
}
{
  /* <FormGroup>
                
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
                <FormText>Your username is most likely your email.</FormText>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form> */
}
