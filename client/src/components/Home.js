import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3786/recipe/list")
      .then((response) => {
        const recipes = response.data;
        this.setState({ recipes });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const recipes = this.state.recipes;
    return (
      <div id="home">
        <Container>
          {recipes.map((recipe) => {
            console.log("recipe", recipe);
            return (
              <Card style={{ width: "18rem" }} key={recipe._id}>
                <Card.Img
                  variant="top"
                  id="card-image"
                  src={recipe.images}
                  alt=""
                  width="50px"
                  height="50px"
                />
                <Card.Body>
                  <Card.Title>{recipe.recipeName}</Card.Title>
                  <Card.Text>{recipe.description}</Card.Text>
                  <Button className="btn" variant="primary" type="submit">
                    <Link to="/">more</Link>
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </div>
    );
  }
}
