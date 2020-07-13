import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import Form from "./registerForm";

export default function Show(props) {
  return (
    <div className="forms-page">
      <Container>
        <div className="credentials">
          <Row className="form">
            <h2>Register</h2>
          </Row>
          <Row className="form">
            <Form {...props} />
          </Row>
          <Row className="form">
            <h6>
              <strong>Already</strong> have an account ?
            </h6>
          </Row>
          <Row className="form">
            <Button className="button">
              <Link to="/login">Login</Link>
            </Button>
          </Row>
        </div>
      </Container>
    </div>
  );
}
