import React from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import Form from "./recipeForm";

export default function recipeShow(props) {
  const handleSubmit = (recipeData) => {
    console.log(recipeData);
    axios
      .post("http://localhost:3786/recipe/add", recipeData, {
        headers: {
          authToken: localStorage.getItem("authToken"),
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="forms-page">
      <Container>
        <div className="recipe-form">
          <Row className="title">
            <h2>Add a Recipe</h2>
          </Row>
          <Row>
            <Form {...props} handleSubmit={handleSubmit} />
          </Row>
        </div>
      </Container>
    </div>
  );
}
