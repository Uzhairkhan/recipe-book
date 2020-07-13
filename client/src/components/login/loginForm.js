import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

export default class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:3786/users/login", userInfo)
      .then((response) => {
        console.log(response.data);
        console.log(this.props);
        if (response.data.errors) {
          // alert(typeof response.data.errors);
          this.setState({ errors: response.data.errors });
        } else {
          const token = response.data.token;
          localStorage.setItem("authToken", token);
          // this.props.history.push("/");
          window.location.href= "/";
        }
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-field">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">{this.state.errors}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
