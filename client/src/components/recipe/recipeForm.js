import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

export default class recipeForm extends Component {
  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="form-field"
        encType="multipart/form-data"
      >
        <Form.Group>
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control type="text" name="recipeName" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Ingredients</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Steps</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Add your Images</Form.Label>
          <Form.File />
        </Form.Group>

        <Button variant="primary" className="button" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

// value={this.state.name}
//             onChange={this.handleChange}
