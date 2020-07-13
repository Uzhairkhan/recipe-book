import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class registerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:3786/users/register", userData)
      .then((response) => {
        if (response.data.hasOwnProperty("errors")) {
          this.setState({ errors: response.data.errors });
        } else {
          alert(response.data.message);
          this.props.history.push("/login");
          window.location.reload();
        }

        console.log(response);
      })
      .catch((err) => console.log(err));

    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const nameError = (((this.state.errors || {}).name || {}).properties || {})
      .message;
    const emailError = (
      ((this.state.errors || {}).email || {}).properties || {}
    ).message;
    const passwordError = (
      ((this.state.errors || {}).password || {}).properties || {}
    ).message;
    const nameMessage =
      !this.state.errors.hasOwnProperty("name") && this.state.errors;
    const emailMessage =
      !this.state.errors.hasOwnProperty("email") && this.state.errors;

    return (
      <Form onSubmit={this.handleSubmit} className="form-field">
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="name"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted text">
            {this.state.errors.hasOwnProperty("name") ? nameError : nameMessage}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            {this.state.errors.hasOwnProperty("email")
              ? emailError
              : emailMessage}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            {this.state.errors ? passwordError : ""}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
