import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

export default class recipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "",
      description: "",
      ingredients: "",
      steps: "",
      images: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const recipeData = {
    //   recipeName: this.state.recipeName,
    //   description: this.state.description,
    //   ingredients: this.state.ingredients,
    //   steps: this.state.steps,
    //   images: this.state.images,
    // };
    const recipeData = new FormData();
    recipeData.append("recipeName", this.state.recipeName);
    recipeData.append("description", this.state.description);
    recipeData.append("ingredients", this.state.ingredients);
    recipeData.append("steps", this.state.steps);
    recipeData.append("images", this.state.images);

    this.props.handleSubmit(recipeData);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageAdd = (e) => {
    let images = e.target.files[0];
    this.setState({ images });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-field">
        <Form.Group>
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="text"
            name="recipeName"
            value={this.state.recipeName}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            name="ingredients"
            value={this.state.ingredients}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Steps</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            name="steps"
            value={this.state.steps}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Add your Images</Form.Label>
          <Form.File
            type="file"
            name="images"
            multiple
            onChange={this.handleImageAdd}
          />
        </Form.Group>

        <Button variant="primary" className="button" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
