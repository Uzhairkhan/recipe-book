import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "./loginForm";

export default function loginShow(props) {
  return (
    <div className="forms-page">
      <Container>
        <div className="credentials">
          <Row>
            <h2>Login</h2>
          </Row>
          <Row>
            <Form {...props} />
          </Row>
          <Row>
            <h6>
              <strong>Don't</strong> have an account ?
            </h6>
          </Row>
          <Row>
            <Button className="button">
              <Link to="/register">Sign-Up</Link>
            </Button>
          </Row>
        </div>
      </Container>
    </div>
  );
}
